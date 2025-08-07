import { forwardRef, type ForwardRefRenderFunction } from "react";
import { type CommonComponentProps } from "../../interface";

export interface PageRef {
}

const Page: ForwardRefRenderFunction<PageRef, Omit<CommonComponentProps, 'ref'>> = ({ id, name, children, styles }, ref) => {

    return (
        <div
            className='p-[20px]'
            style={{ ...styles }}
        >
            {children}
        </div>
    )
}

export default forwardRef(Page);

