import { apiGet, apiPost } from '../api/api'

const getAreas = async () => {
    return await apiGet(`areas`);
}

const createArea = async (area) => {
    return await apiPost(`areas/register`, area);
}


export { getAreas, createArea } 
