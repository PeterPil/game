const SET_INITIAL_DATA = 'SET_INITIAL_DATA';
const SET_MODE = 'SET_MODE';
const SET_USER = 'SET_USER';

export const actionTypes = {
    SET_INITIAL_DATA,
    SET_USER,
    SET_MODE,
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

export const useContextActions = dispatch => ({
    setInitialData: data => dispatch(setInitialData(data)),
    setMode: mode => dispatch(setMode(mode)),
    setUser: user => dispatch(setUser(user)),
});