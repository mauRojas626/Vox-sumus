import SimpleProperty from './SimpleProperty'

export default class ArticleModel extends SimpleProperty {
    id = 0;
    title = '';
    description = '';
    miniDesc = '';
    photo = '';
    authors = '';
    tags = [];
    views = 0;
}

const validateArticle = (article) => {
    let errors = {
        title: null,
        description: null,
        authors: null
    }
    //let regex = new RegExp("^[a-zA-Z ñáéíóú]+$");

    if(!article.title || String(article.title).trim().length === 0){
        errors.title = 'Por favor ingrese un titulo';
    }
    if(!article.description || String(article.description).trim().length === 0){
        errors.description = 'Por favor ingrese una descripción';
    }
    if(!article.authors || String(article.authors).trim().length === 0){
        errors.color = 'Por favor ingrese un autor';
    }
    
    return errors;
}

export { validateArticle }