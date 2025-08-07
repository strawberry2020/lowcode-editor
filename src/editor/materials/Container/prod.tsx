import { forwardRef, type ForwardRefRenderFunction } from 'react';
import { type CommonComponentProps } from '../../interface';

export interface ContainerRef {
}

const Container: ForwardRefRenderFunction<ContainerRef, Omit<CommonComponentProps, 'ref'>> = ({ id, children, styles },ref) => {

    return (
        <div 
            style={styles}
            className={`p-[20px]`}
        >{children}</div>
    )
}

export default forwardRef(Container);
