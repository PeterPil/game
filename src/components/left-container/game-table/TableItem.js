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
            onClick={clickHandler}
            className={styles.item}
            style={{ backgroundColor: item.color }}
        />
    );
};

export default TableItem;
