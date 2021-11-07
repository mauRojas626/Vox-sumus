import SimpleProperty from './SimpleProperty'

export default class MemberModel extends SimpleProperty {
    id = 0;
    name = '';
    code = '';
    photo = '';
    email = '';
    career = '';
}

const validateMember = (member) => {
    let errors = {
        name: null,
        code: null,
        email: null,
        career: null
    }
    //let regex = new RegExp("^[a-zA-Z ñáéíóú]+$");

    if(!member.name || String(member.name).trim().length === 0){
        errors.name = 'Por favor ingrese un nombre';
    }
    if(!member.code || String(member.code).trim().length === 0){
        errors.code = 'Por favor ingrese un código de alumno';
    }
    if(!member.email || String(member.email).trim().length === 0){
        errors.email = 'Por favor ingrese un email';
    }
    
    return errors;
}

export { validateMember }