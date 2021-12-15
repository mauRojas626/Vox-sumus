import { apiGet, apiPost, apiDelete } from '../api/api'

const getArticles = async () => {
    return await apiGet(`articulos`);
}

const getArticle = async (id) => {
    return await apiGet(`articulos/` + id)
}

const createArticle = async (article) => {
    return await apiPost(`articulos/register`, article);
}

const deleteArticle = async (id) => {
    return await apiDelete(`articulos/delete/`+id);
}

export { getArticles, createArticle, getArticle, deleteArticle } 