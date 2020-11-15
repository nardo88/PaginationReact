import { connect } from "react-redux"
import Users from "./Users"
import {changeFolowed, getUsersAC, changeCurrentPageAC} from '../../reducers/reducerUsers'


const mapStateToProps = (state) => {
    return {
        state: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFollow(id){
            dispatch(changeFolowed(id))
        },
        getUsers(users){
            dispatch(getUsersAC(users))
        },
        changeCurrentPage(num){
            dispatch(changeCurrentPageAC(num))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer