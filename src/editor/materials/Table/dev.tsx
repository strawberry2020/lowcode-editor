import { Table as AntdTable } from 'antd';
import React, {  useMemo} from 'react';
import { type CommonComponentProps } from '../../interface';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';
import { useDrag } from 'react-dnd';

function Table({ id, name, children, styles }: CommonComponentProps) {

    const {canDrop, drop } = useMaterialDrop(['TableColumn'], id);

    const [_, drag] = useDrag({
        type: name,
        item: {
            type: name,
            dragType: 'move',
            id: id
        }
    });

    const columns = useMemo(() => {
        return React.Children.map(children, (item: any) => {
            return {
                title: <div className='m-[-16px] p-[16px]' data-component-id={item.props?.id}>{item.props?.title}</div>,
                dataIndex: item.props?.dataIndex,
                key: item
            }
        })
    }, [children]);

    return (
        <div
            className={`w-[100%] ${canDrop ? 'border-[2px] border-[blue]' : 'border-[1px] border-[#000]'}`}
            ref={(node) => { drop(node); drag(node); }}
            data-component-id={id}
            style={styles}
        >
            <AntdTable
                columns={columns}
                dataSource={[]}
                pagination={false}
            />
        </div>
    );
}

export default Table;
