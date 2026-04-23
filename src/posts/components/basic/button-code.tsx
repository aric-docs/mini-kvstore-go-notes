/**
 * 按钮组件示例代码
 * 文件位置: docs/posts/components/basic/button-code.tsx
 */

// @ts-nocheck - 这是文档示例代码，忽略类型检查

// #region basic-usage
import { Button } from '@/components/button'

export function BasicButtonExample() {
  return (
    <Button type="primary">点击我</Button>
  )
}
// #endregion basic-usage

// #region button-types
export function ButtonTypesExample() {
  return (
    <div>
      <Button type="primary">主要按钮</Button>
      <Button type="secondary">次要按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
  )
}
// #endregion button-types

// #region button-sizes
export function ButtonSizesExample() {
  return (
    <div>
      <Button size="small">小按钮</Button>
      <Button size="medium">中等按钮</Button>
      <Button size="large">大按钮</Button>
    </div>
  )
}
// #endregion button-sizes
