
import {
    SAVE_IMAGE,
    ERROR_IMAGE,
} from '../actions/actionTypes/image';

const initialState = {
    isLoading: true,
    failed: false
};

const group = (state = initialState, action) => {    
    switch(action.type){
        case SAVE_IMAGE:
            return {...state, isLoading: false, failed: false};
        case ERROR_IMAGE:            
            return {...state, isLogged: false};
        default:
            return {...state};
    }
}

export default group