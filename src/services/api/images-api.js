import { apiPost } from '../api/api'

const saveImage = async (image) => {
    return await apiPost(`api/upload`, image);
}

export { saveImage }