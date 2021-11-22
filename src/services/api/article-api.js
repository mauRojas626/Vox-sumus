import { apiGet, apiPost } from '../api/api'

const getArticles = async () => {
    return await apiGet(`articulos`);
}

const createArticle = async (article) => {
    return await apiPost(`articulos/register`, article);
}


export { getArticles, createArticle } 