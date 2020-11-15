import React from 'react'
import style from './UserStyle.module.css'
import avatar from '../../img/avata.png'
import * as axios from 'axios'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${this.props.state.currentPage}`)
            .then(response => {
                this.props.getUsers(response.data.items)
            })
    }
    onChangeFollow = (id) => {
        this.props.changeFollow(id)
    }

    onClickPagination(num){

        this.props.changeCurrentPage(num)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.pageSize}&page=${num}`)
            .then(response => {
                this.props.getUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.state.totalUserCount / this.props.state.pageSize )
        const pages = []

        for(let i = 1; i <=pagesCount; i++){
            pages.push(i)
        }
        return (


            <div className={style.usersWrapper}>
                <div className={style.paginations}>
                    {
                        pages.map(item => <button onClick={() => {this.onClickPagination(item)}} className={item===this.props.state.currentPage ? style.currentPage : style.paginationBtn} key={item}>{item}</button>)
                    }
                </div>
                <ul className={style.userList}>
                    {this.props.state.users.map(item => <li key={item.id} className={style.listItem}>
                        <div className={style.itemColumn}>
                            <img className={style.avatar} src={!item.photos.small ? avatar : item.photos.small} alt="" />
                        </div>
                        <div className={style.itemColumn}>
                            <span className={style.itemName}>{item.name}</span>
                        </div>
                        <div className={`${style.itemColumn} ${style.statusWrapper}`}>
                            <span className={style.status}>{item.status}</span>
                            <button onClick={() => { this.onChangeFollow(item.id) }} className={style.btn}>{!item.followed ? 'unfollowed' : 'followed'}</button>
                        </div>
                    </li>)}

                </ul>
            </div>
        )
    }
}

export default Users