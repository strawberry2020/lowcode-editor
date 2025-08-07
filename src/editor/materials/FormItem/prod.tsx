import { forwardRef, type ForwardRefRenderFunction } from "react";
import type { CommonComponentProps } from "../../interface";

export interface FormItemRef {
}

const FormItem: ForwardRefRenderFunction<FormItemRef, Omit<CommonComponentProps, 'ref'>> = () => <></>;


export default forwardRef(FormItem);