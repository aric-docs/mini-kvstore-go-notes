# 按钮组件

一个功能强大的按钮组件，支持多种样式和状态。

## 基础用法

<<< ./button-code.tsx#basic-usage

## 类型

```tsx
// 主要按钮
<Button type="primary">主要按钮</Button>

// 次要按钮
<Button type="secondary">次要按钮</Button>

// 危险按钮
<Button type="danger">危险按钮</Button>
```

## 尺寸

```tsx
<Button size="small">小按钮</Button>
<Button size="medium">中等按钮</Button>
<Button size="large">大按钮</Button>
```

## 状态

```tsx
// 禁用状态
<Button disabled>禁用按钮</Button>

// 加载状态
<Button loading>加载中...</Button>
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'primary' \| 'secondary' \| 'danger'` | `'primary'` |
| size | 按钮尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| onClick | 点击事件 | `() => void` | - |
