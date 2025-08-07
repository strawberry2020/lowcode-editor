import { forwardRef, type ForwardRefRenderFunction } from "react";
import type { CommonComponentProps } from "../../interface";

export interface TableColumnRef {
}

const TableColumn: ForwardRefRenderFunction<TableColumnRef, Omit<CommonComponentProps, 'ref'>> = () => {

    return <></>
}

export default forwardRef(TableColumn);
