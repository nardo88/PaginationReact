const CHANGE_FOLOWED = 'CHANGE_FOLOWED'
const GET_USERS = 'GET_USERS'
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'

let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 100,
    currentPage: 1
}





const reduserUsers = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case CHANGE_FOLOWED: {
            let NewState = {...state}
            NewState.users = [...state.users]
            NewState.users = NewState.users.map(item => {
                if (item.id === action.id) {
                    item.followed = !item.followed
                    return item
                }

                return item
            })
            return NewState
        }
        case GET_USERS: {
            const NewState = {...state}
            NewState.users = [...action.users]
            return NewState
        }
        case CHANGE_CURRENT_PAGE: {
            const NewState = {...state}
            NewState.currentPage = action.num
            return NewState
        }
        default:
            return state
    }
}

export const changeFolowed = (id) => {
    return {
        type: CHANGE_FOLOWED,
        id
    }
}

export const getUsersAC = (users) => {
    return {
        type: GET_USERS,
        users

    }
}

export const changeCurrentPageAC = (num) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        num

    }
}


export default reduserUsers