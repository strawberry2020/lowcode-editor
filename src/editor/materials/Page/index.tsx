import { message } from "antd";
import type { PropsWithChildren } from "react";
import { useDrop } from "react-dnd";

function Page({ children }: PropsWithChildren) {

    const [{ canDrop }, drop] = useDrop(() => ({
        accept: ['Button', 'Container'],
        drop: (item: { type: string}) => {
            message.success(item.type)
        },
        collect: (monitor) => ({
          canDrop: monitor.canDrop(),
        }),
    }));

    return (
        <div
            ref={(node)=>{drop(node)}}
            className='p-[20px] h-[100%] box-border'
            style={{ border: canDrop ? '2px solid blue' : 'none' }}
        >
            {children}
        </div>
    )
}

export default Page;
