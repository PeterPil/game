import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context/app/provider';


import styles from './styles.module.scss';
import TableItem from './TableItem';

const GameTable = ({
    width = 0,
    onItemClick,
    tableArray,
}) => {
    return (
        <div className={styles.table} style={{ width }}>
            { tableArray.map(item => <TableItem onClick={onItemClick} item={item} />)}
        </div>
    );
};

export default GameTable;
