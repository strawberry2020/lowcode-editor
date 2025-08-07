import type { CommonComponentProps } from '../../interface';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';
import { useDrag } from 'react-dnd';

const Container = ({ id, name, children, styles }: CommonComponentProps) => {


    const { canDrop, drop } = useMaterialDrop(['Button', 'Container', 'Table'], id);

    const [_, drag] = useDrag({
        type: name,
        item: {
            type: name,
            dragType: 'move',
            id: id
        }
    });

    return (
        <div
            ref={(node) => { drop(node); drag(node); }}
            data-component-id={id}
            className={`min-h-[100px] p-[20px] ${canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'}`}
            style={styles}
        >
            {children}
        </div>
    )
}

export default Container;
