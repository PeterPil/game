import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app/provider';
import { statuses } from '../../constants/statuses';


// import styles from './styles.module.scss';

const RightContainer = () => {
    const {
        winners,
        fetchWinners,
        status,
    } = useContext(AppContext);

    useEffect(() => {
        if(status === statuses.DONE || status === statuses.INITIAL) {
            fetchWinners();
        } 
    }, [status]);

    return (
        <div>
{ winners.map(({ winner, date }) => (
    <div>
        {winner}
        {date}
    </div>
)) }
        </div>
    );
}

export default RightContainer;
