import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/userSlice'

const Users = () => {
    const dispatch = useDispatch()
    const { users, status } = useSelector((state) => state.users)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getUsers())
        }
    }, [dispatch, status])

    console.log(users)
    return (
        <div className='grid grid-cols-3 gap-5'>{
            users.map((user) => (
                <div className='bg-white p-5'>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            ))
        }</div>
    )
}

export default Users