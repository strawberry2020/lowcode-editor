import type { CommonComponentProps } from "../../interface";
import { useMaterailDrop } from "../../hooks/useMaterialDrop";

function Page({ id, name, children }: CommonComponentProps) {

    const {canDrop, drop } = useMaterailDrop(['Button', 'Container'], id);

    return (
        <div
            ref={(node) => { drop(node) }}
            className='p-[20px] h-[100%] box-border'
            style={{ border: canDrop ? '2px solid blue' : 'none' }}
        >
            {children}
        </div>
    )
}

export default Page;
