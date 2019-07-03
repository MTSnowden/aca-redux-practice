import { combineReducers } from 'redux'

const pics = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PIC':
            const newPics = [ ...state ]
            newPics.push(action.value)
            return newPics
        default:
            return [ ...state ]
    }
} 

export default combineReducers({
    pics
})