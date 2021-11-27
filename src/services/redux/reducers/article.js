import {
    CREATE_ARTICLE,
    GET_ARTICLES,
    GET_ARTICLE,
    ERROR_ARTICLE
} from '../actions/actionTypes/article'

const initialState = {
    articles: [],
    article: [],
    isLoading: true,
    failed: false
};

const article = (state = initialState, action) => {    
    switch(action.type){
        case CREATE_ARTICLE:
            return {...state, articles: [...state.articles, action.playload], failed: false};
        case GET_ARTICLES:
            return {...state, articles: action.playload, isLoading: false, failed: false};
        case ERROR_ARTICLE:            
            return {...state, isLogged: false};
        case GET_ARTICLE:
            return {...state, article: action.playload, isLoading: false, failed: false};
        default:
            return {...state};
    }
}

export default article
