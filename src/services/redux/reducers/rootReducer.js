import { combineReducers } from 'redux'

import area from './area'
import group from './group'
import image from './image'
import article from './article'

const rootReducer = combineReducers({
    area,
    group,
    image,
    article,
})

export default rootReducer