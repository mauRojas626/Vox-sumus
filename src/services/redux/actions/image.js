import {
    SAVE_IMAGE,
    ERROR_IMAGE
} from './actionTypes/image'
import {
    saveImage as saveImageAPI,
} from '../../api/images-api'

import ResponseModel from '../../models/ResponseModel'

const saveImage = (image) => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await saveImageAPI(image);
        const message = res.response;

        if(!res.error && res.status >= 200 && res.status <= 300){
            return dispatch({
                type: SAVE_IMAGE,
                playload: message
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+ SAVE_IMAGE);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_IMAGE,
        playload: false
    })
}

export { saveImage }