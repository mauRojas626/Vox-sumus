import {
    GET_AREAS,
    CREATE_AREA,
    ERROR_AREA
} from './actionTypes/area'
import {
    createArea as createAreaAPI,
    getAreas as getAreasAPI
} from '../../api/area-api'

import ResponseModel from '../../models/ResponseModel'

const getAreas = () => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await getAreasAPI();
        
        if(!res.error && res.status >= 200 && res.status <= 300){
            console.log(res.response)
            return dispatch({
                type: GET_AREAS,
                playload: res.response
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+ GET_AREAS);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_AREA,
        playload: false
    })
}

const createArea = (area) => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await createAreaAPI(area);
        area.id = res.response;

        if(!res.error && res.status >= 200 && res.status <= 300){
            return dispatch({
                type: CREATE_AREA,
                playload: area 
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+CREATE_AREA);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_AREA,
        playload: false
    })
}

export { getAreas, createArea }