import {
    CREATE_AREA,
    GET_AREAS,
    ERROR_AREA
} from '../actions/actionTypes/area'

const initialState = {
    areas: [],
    isLoading: true,
    failed: false
};

const area = (state = initialState, action) => {    
    switch(action.type){
        case CREATE_AREA:
            return {...state, areas: [...state.areas, action.playload], failed: false};
        case GET_AREAS:
            return {...state, areas: action.playload, isLoading: false, failed: false};
        case ERROR_AREA:            
            return {...state, isLogged: false};
        default:
            return {...state};
    }
}

export default area
