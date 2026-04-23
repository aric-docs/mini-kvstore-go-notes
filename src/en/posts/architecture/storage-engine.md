# Storage Engine

The low-level engine is an append-only segmented log.

## Write Path

1. Construct Record: Magic(2B) + Op(1B) + KeyLen(4B) + ValLen(4B) + Key + Value + CRC32(4B)
2. Write to active segment file
3. Flush + Sync (fsync)
4. Update in-memory HashMap
5. Update Index (key → segmentID + offset)
6. Update Bloom Filter
7. Rotate segment if >= 16MB

## Read Path

1. In-memory HashMap lookup → O(1)
2. Bloom Filter check for missing keys
3. No disk I/O for reads

## Binary Record Format

```
┌───────┬──────┬────────┬────────┬─────┬───────┬───────┐
│ Magic │  Op  │ KeyLen │ ValLen │ Key │ Value │ CRC32 │
│ 2B    │ 1B   │ 4B     │ 4B     │ ... │ ...   │ 4B    │
└───────┴──────┴────────┴────────┴─────┴───────┴───────┘
```

Magic = `0xF0F1`, Op = `1` (Set) or `2` (Delete)

## Segments

- Files: `segment-{N}.dat`
- Max size: 16MB per segment
- Compaction: rewrite all live keys to fresh `segment-0`, delete old segments

## Deletions

Write `Op=Delete` record, remove from in-memory HashMap and index. Old data cleaned up during compaction.

## Snapshots

Binary file `index.snapshot` for fast restart:

```
Magic(8B) + EntryCount(4B) + [KeyLen(4B) + Key + SegmentID(8B) + Offset(8B)]...
```
