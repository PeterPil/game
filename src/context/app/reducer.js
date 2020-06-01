import produce from 'immer';
import { actionTypes } from './actions';
import { statuses } from '../../constants/statuses';

export const defaultState = {
  modes: [],
  user: '',
  mode: {
      field: 5,
      delay: 5000,
      name: 'easyMode',
  },
  winners: [],
  status: statuses.INITIAL,
}

export default (state, action) =>
    produce(state, draft => {
        switch (action.type) {
            case actionTypes.SET_INITIAL_DATA: {
                const payload = action.payload;
                const modes = Object
                    .entries(payload)
                    .map(([name, value]) => ({
                        name,
                        ...value,
                    }));
                draft.modes = modes;
                break;
            }
            case actionTypes.SET_MODE: {
                draft.mode = action.payload;
                break;
            }
            case actionTypes.SET_USER: {
                draft.user = action.payload;
                break;
            }
            case actionTypes.SET_WINNERS: {
                draft.winners = action.payload;
                break;
            }
            case actionTypes.SET_STATUS: {
                draft.status = action.payload;
                break;
            }
            default:
                break;
        }
    });