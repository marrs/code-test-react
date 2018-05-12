import { TOGGLE_GRID } from '../actions';

export default (state, action) => {
    switch(action.type) {
        case TOGGLE_GRID: {
            return { showGrid: !state.showGrid };
        }
        default: return state || { showGrid: false };
    }
};
