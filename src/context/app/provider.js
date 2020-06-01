import React, { createContext, useReducer, useEffect } from 'react';
import { useContextActions } from './actions';
import reducer, { defaultState } from './reducer';
import { baseUrl } from '../../constants/baseUrl';
import { endpoints } from '../../constants/endpoints';


export const AppContext = createContext({});

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const {
        setInitialData,
        setMode,
        setUser,
        setWinners,
        setStatus,
    } = useContextActions(dispatch);

    const fetchInitialData = async () => {
        try {
            const url = baseUrl + endpoints.gameSettings;
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();

            if(data) {
                setInitialData(data);
            }
        } catch (e) {
            console.warn(`Fetch with ${e}`);
        }
    };

    const fetchWinners = async () => {
        try {
            const url = baseUrl + endpoints.winners;
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();

            if(data) {
                setWinners(data.reverse());
            }
        } catch (e) {
            console.warn(`Fetch with ${e}`);
        }
    }

    useEffect(() => {
        fetchInitialData();
    }, []);

    const value = {
        ...state,
        setMode,
        setUser,
        fetchWinners,
        setStatus,
    };

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    );
};

export default AppProvider;