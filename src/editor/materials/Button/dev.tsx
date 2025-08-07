import { Button as AntdButton } from 'antd';
import type { CommonComponentProps } from '../../interface';
import { useDrag } from 'react-dnd';

const Button = ({id,name, type, text, styles}: CommonComponentProps) => {

  const [_, drag] = useDrag({
    type: name,
    item: {
        type: name,
        dragType: 'move',
        id,
    }
  });

  
  return (
    <AntdButton ref={drag} data-component-id={id} type={type} style={styles}>{text}</AntdButton>

  )
}

export default Button;
