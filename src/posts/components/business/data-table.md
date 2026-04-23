# 数据表格

功能强大的数据表格组件，支持分页、排序、筛选等功能。

## 基础用法

```tsx
import { DataTable } from '@/components/data-table'

const columns = [
  { title: '姓名', dataIndex: 'name' },
  { title: '年龄', dataIndex: 'age' },
  { title: '邮箱', dataIndex: 'email' }
]

const data = [
  { id: 1, name: '张三', age: 25, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 30, email: 'lisi@example.com' }
]

<DataTable columns={columns} data={data} />
```

## 分页

```tsx
<DataTable
  columns={columns}
  data={data}
  pagination={{
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条`
  }}
/>
```

## 排序

```tsx
<DataTable
  columns={columns}
  data={data}
  sortable
  onSortChange={(sort) => console.log(sort)}
/>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列配置 | `Column[]` | `[]` |
| data | 数据源 | `T[]` | `[]` |
| pagination | 分页配置 | `PaginationConfig \| false` | - |
| sortable | 是否可排序 | `boolean` | `false` |
| loading | 加载状态 | `boolean` | `false` |
| onSortChange | 排序变化 | `(sort) => void` | - |
