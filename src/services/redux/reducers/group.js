
import {
    CREATE_GROUP,
    ERROR_GROUP,
    GET_GROUPS,
    DELETE_GROUP
} from '../actions/actionTypes/group';

const initialState = {
    groups: [],
    isLoading: true,
    failed: false
};

const group = (state = initialState, action) => {    
    switch(action.type){
        case CREATE_GROUP:
            return {...state, groups: [...state.groups, action.playload], failed: false};
        case GET_GROUPS:
            return {...state, groups: action.playload, isLoading: false, failed: false};
        case DELETE_GROUP:
            return {...state, groups: state.groups.filter(group => group.id !== action.playload), failed: false}
        case ERROR_GROUP:            
            return {...state, isLogged: false};
        default:
            return {...state};
    }
}

export default group