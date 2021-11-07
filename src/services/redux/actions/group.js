import {
    GET_GROUPS,
    CREATE_GROUP,
    ERROR_GROUP,
    DELETE_GROUP
} from './actionTypes/group'
import {
    createGroup as createGroupAPI,
    getGroups as getGroupsAPI,
    deleteGroup as deleteGroupAPI
} from '../../api/group-api'

import ResponseModel from '../../models/ResponseModel'

const getGroups = () => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await getGroupsAPI();
        
        if(!res.error && res.status >= 200 && res.status <= 300){
            console.log(res.response)
            return dispatch({
                type: GET_GROUPS,
                playload: res.response
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+ GET_GROUPS);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_GROUP,
        playload: false
    })
}

const createGroup = (group) => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await createGroupAPI(group);
        group.id = res.response;

        if(!res.error && res.status >= 200 && res.status <= 300){
            return dispatch({
                type: CREATE_GROUP,
                playload: group
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+CREATE_GROUP);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_GROUP,
        playload: false
    })
}

const deleteGroup = (id) => async (dispatch) => {
    let res = new ResponseModel();
    try{
        res = await deleteGroupAPI(id);

        if(!res.error && res.status >= 200 && res.status <= 300){
            return dispatch({
                type: DELETE_GROUP,
                playload: id 
            })
        }
    } catch(e){
        console.log(e);
        console.log('ERROR! '+DELETE_GROUP);
        console.log(res.status);
        console.log(res.error);
    }
    return dispatch({
        type: ERROR_GROUP,
        playload: false
    })
}

export { getGroups, createGroup, deleteGroup }