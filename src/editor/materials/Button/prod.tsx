import { Button as AntdButton } from 'antd';
import { type CommonComponentProps } from '../../interface';
import { forwardRef, type ForwardRefRenderFunction } from 'react';

export interface ButtonRef {
}

const Button: ForwardRefRenderFunction<ButtonRef, Omit<CommonComponentProps, 'ref'>> = ({ id, type, text, styles, ...props }, ref) => {

  return (
    <AntdButton type={type} style={styles} {...props}>{text}</AntdButton>
  )
}

export default forwardRef(Button);
