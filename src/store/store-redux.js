import { combineReducers, createStore } from 'redux'
import reduserUsers from '../reducers/reducerUsers'

let reducers = combineReducers({
    users: reduserUsers
})


const store = createStore(reducers)

export default store


