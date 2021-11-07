import { combineReducers } from 'redux'

import area from './area'
import group from './group'
import image from './image'

const rootReducer = combineReducers({
    area,
    group,
    image
})

export default rootReducer