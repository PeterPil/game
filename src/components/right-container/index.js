import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app/provider';


// import styles from './styles.module.scss';

const RightContainer = () => {
    const {
        winners,
        fetchWinners,
    } = useContext(AppContext);

    useEffect(() => {
        fetchWinners();
    }, []);

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
