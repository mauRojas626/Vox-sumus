import SimpleProperty from './SimpleProperty'

export default class AreaModel extends SimpleProperty {
    id = 0;
    name = '';
    description = '';
    photo = '';
    color = '#ffffff';
    members = [];
    director = [];
}

const validateArea = (area) => {
    let errors = {
        name: null,
        description: null,
        color: null
    }
    //let regex = new RegExp("^[a-zA-Z ñáéíóú]+$");

    if(!area.name || String(area.name).trim().length === 0){
        errors.name = 'Por favor ingrese un nombre';
    }
    if(!area.description || String(area.description).trim().length === 0){
        errors.description = 'Por favor ingrese una descripción';
    }
    if(!area.color || String(area.color).trim().length === 0){
        errors.color = 'Por favor ingrese un color';
    }
    
    return errors;
}

export { validateArea }