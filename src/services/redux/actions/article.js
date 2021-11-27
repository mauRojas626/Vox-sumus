import {
    GET_ARTICLES,
    CREATE_ARTICLE,
    GET_ARTICLE,
    ERROR_ARTICLE
} from './actionTypes/article'
import {
    createArticle as createArticleAPI,
    getArticles as getArticlesAPI,
    getArticle as getArticleAPI
} from '../../api/article-api'

import ResponseModel from '../../models/ResponseModel'

const getArticles = () => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await getArticlesAPI();
        
        if(!res.error && res.status >= 200 && res.status <= 300){
            console.log(res.response)
            return dispatch({
                type: GET_ARTICLES,
                playload: res.response
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+ GET_ARTICLES);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_ARTICLE,
        playload: false
    })
}

const getArticle = (id) => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await getArticleAPI(id);
        console.log("res")
        console.log(res)
        if(!res.error && res.status >= 200 && res.status <= 300){
            console.log(res.response)
            return dispatch({
                type: GET_ARTICLE,
                playload: res.response
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+ GET_ARTICLE);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_ARTICLE,
        playload: false
    })
}

const createArticle = (article) => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await createArticleAPI(article);
        article.id = res.response;

        if(!res.error && res.status >= 200 && res.status <= 300){
            return dispatch({
                type: CREATE_ARTICLE,
                playload: article
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+ CREATE_ARTICLE);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_ARTICLE,
        playload: false
    })
}

export { getArticles, createArticle, getArticle }