import SimpleProperty from './SimpleProperty'

export default class GroupModel extends SimpleProperty {
    id = 0;
    name = '';
    logo = '';
}

const validateGroup = (group) => {
    let errors = {
        name: null
    }
    let regex = new RegExp("^[a-zA-Z ñáéíóú]+$");

    if(!group.name || String(group.name).trim().length === 0){
        errors.name = 'Por favor ingrese un nombre';
    }
    if (!regex.test(group.name)) {
        errors.name = 'Por favor ingrese un nombre válido';
    }
    
    return errors;
}

export { validateGroup }