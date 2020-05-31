const SET_INITIAL_DATA = 'SET_INITIAL_DATA';
const SET_MODE = 'SET_MODE';
const SET_USER = 'SET_USER';
const SET_WINNERS = 'SET_WINNERS';

export const actionTypes = {
    SET_INITIAL_DATA,
    SET_USER,
    SET_MODE,
    SET_WINNERS,
};

const setInitialData = data => ({
    type: SET_INITIAL_DATA,
    payload: data,
});

const setMode = mode => ({
    type: SET_MODE,
    payload: mode,
});

const setUser = user => ({
    type: SET_USER,
    payload: user,
});

const setWinners = winners => ({
    type: SET_WINNERS,
    payload: winners,
});

export const useContextActions = dispatch => ({
    setInitialData: data => dispatch(setInitialData(data)),
    setMode: mode => dispatch(setMode(mode)),
    setUser: user => dispatch(setUser(user)),
    setWinners: winners => dispatch(setWinners(winners)),
});