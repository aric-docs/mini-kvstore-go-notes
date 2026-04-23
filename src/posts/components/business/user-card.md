# 用户卡片

用于展示用户信息的卡片组件。

## 基础用法

```tsx
import { UserCard } from '@/components/user-card'

<UserCard
  name="张三"
  avatar="https://example.com/avatar.jpg"
  email="zhangsan@example.com"
  role="开发者"
/>
```

## 带操作按钮

```tsx
<UserCard
  name="张三"
  avatar="https://example.com/avatar.jpg"
  email="zhangsan@example.com"
  role="开发者"
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 用户名 | `string` | - |
| avatar | 头像地址 | `string` | - |
| email | 邮箱 | `string` | - |
| role | 角色 | `string` | - |
| onEdit | 编辑回调 | `() => void` | - |
| onDelete | 删除回调 | `() => void` | - |
