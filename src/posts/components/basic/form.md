# 表单组件

一个灵活的表单组件，支持各种表单控件和验证。

## 基础用法

```tsx
import { Form, FormItem, Input, Select } from '@/components/form'

<Form onSubmit={handleSubmit}>
  <FormItem label="用户名" name="username" required>
    <Input placeholder="请输入用户名" />
  </FormItem>

  <FormItem label="邮箱" name="email" type="email" required>
    <Input placeholder="请输入邮箱" />
  </FormItem>

  <FormItem label="角色" name="role">
    <Select options={roleOptions} />
  </FormItem>
</Form>
```

## 表单验证

```tsx
<Form
  onSubmit={handleSubmit}
  rules={{
    username: [
      { required: true, message: '请输入用户名' },
      { min: 3, message: '用户名至少3个字符' }
    ],
    email: [
      { required: true, message: '请输入邮箱' },
      { type: 'email', message: '请输入有效的邮箱地址' }
    ]
  }}
>
  {/* 表单项 */}
</Form>
```

## 表单控件

### Input 输入框

```tsx
<Input
  placeholder="请输入内容"
  disabled={false}
  maxLength={100}
/>
```

### Select 选择器

```tsx
<Select
  options={[
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' }
  ]}
  placeholder="请选择"
/>
```

### Checkbox 复选框

```tsx
<Checkbox>我同意服务条款</Checkbox>
```

## API

### Form

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSubmit | 提交回调 | `(values) => void` | - |
| rules | 验证规则 | `Record<string, Rule[]>` | - |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |

### FormItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签文本 | `string` | - |
| name | 字段名 | `string` | - |
| required | 是否必填 | `boolean` | `false` |
