# 存储引擎

底层存储引擎是一个追加写入式（append-only）分段日志。

## 数据写入流程

```
Set(key, value)
  1. 构造 Record: Magic(2) + Op(1) + KeyLen(4) + ValLen(4) + Key + Value + CRC32(4)
  2. 写入当前活跃段文件
  3. Flush + Sync (fsync)
  4. 更新内存 HashMap (values[key] = value)
  5. 更新 Index (key → segmentID + offset)
  6. 更新 Bloom Filter
  7. 如果段文件 >= 16MB，轮转到新段
```

## 数据读取流程

```
Get(key)
  1. 查内存 HashMap (values)
  2. 命中 → 返回值副本
  3. 未命中 → 查 Bloom Filter
  4. Bloom 说不存在 → 返回 ErrNotFound
```

读取是纯内存操作，不涉及磁盘 I/O。

## 二进制记录格式

```
┌───────┬──────┬────────┬────────┬─────┬───────┬───────┐
│ Magic │  Op  │ KeyLen │ ValLen │ Key │ Value │ CRC32 │
│ 2B    │ 1B   │ 4B     │ 4B     │ ... │ ...   │ 4B    │
└───────┴──────┴────────┴────────┴─────┴───────┴───────┘

Magic = 0xF0F1
Op    = 1 (Set) | 2 (Delete)
```

## 段文件管理

- 文件命名：`segment-{N}.dat`（N 从 0 递增）
- 每个段最大 16MB，满了自动轮转到新段
- 压缩（Compact）：删除所有段文件，将所有活跃键重写到新的 `segment-0`

## 删除机制

删除操作写入一条 `Op=Delete` 记录，并从内存 HashMap 和索引中移除。已删除的数据在压缩时被清理。

## 索引快照

启动时优先加载 `index.snapshot` 文件，然后回放段文件。快照格式：

```
Magic(8B "KVINDEX1") + EntryCount(4B) + [KeyLen(4B) + Key + SegmentID(8B) + Offset(8B)]...
```
