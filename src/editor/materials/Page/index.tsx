import type { CommonComponentProps } from "../../interface";
import { useMaterialDrop } from "../../hooks/useMaterialDrop";

function Page({ id, styles, children }: CommonComponentProps) {

    const { canDrop, drop } = useMaterialDrop(['Button', 'Container'], id);

    return (
        <div
            ref={(node) => { drop(node) }}
            data-component-id={id}
            className='p-[20px] h-[100%] box-border'
            style={{ ...styles, border: canDrop ? '2px solid blue' : 'none' }}
        >
            {children}
        </div>
    )
}

export default Page;
