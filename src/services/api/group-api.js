import { apiGet, apiPost, apiDelete } from '../api/api'

const getGroups = async () => {
    return await apiGet(`agrupaciones`);
}

const createGroup = async (group) => {
    return await apiPost(`agrupaciones/register`, group);
}

const deleteGroup = async (id) => {
    return await apiDelete(`agrupaciones/delete/`+id);
}


export { getGroups, createGroup, deleteGroup }