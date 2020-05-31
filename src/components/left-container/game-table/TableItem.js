import React from 'react';

import styles from './styles.module.scss';

const TableItem = ({
    item,
    onClick,
}) => {
    const clickHandler = () => {
        onClick(item);
    };

    return (
        <div
            key={String(item.number * 11)}
            onClick={clickHandler}
            className={styles.item}
            style={{ backgroundColor: item.color }}
        />
    );
};

export default TableItem;
