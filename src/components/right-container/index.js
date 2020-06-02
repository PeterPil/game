import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app/provider';
import { statuses } from '../../constants/statuses';

import styles from './styles.module.scss';

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
        <div className={styles['right-container']}>
            <div className={styles['leader-board']}>
                <p className={styles.text}>Leader Board</p>
                <div className={styles.winners}>
                    { winners.map(({ winner, date }, index) => (
                        <div key={winner + date + index} className={styles['winners-item']}>
                            <div className={styles.winner}>
                                {winner}
                            </div>
                            <div className={styles.date}>
                                {date}
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default RightContainer;
