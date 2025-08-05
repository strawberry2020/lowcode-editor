import type { CommonComponentProps } from '../../interface';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';

const Container = ({ id, styles, children }: CommonComponentProps) => {


    const { canDrop, drop } = useMaterialDrop(['Button', 'Container'], id);

    return (
        <div
            ref={(node) => { drop(node) }}
            data-component-id={id}
            className={`min-h-[100px] p-[20px] ${canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'}`}
            style={styles}
        >
            {children}
        </div>
    )
}

export default Container;
