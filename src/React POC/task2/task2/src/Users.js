import React from 'react'

export const Users = ({userList,userHandleClick}) => {
  return (
    <>
    <button onClick={userHandleClick}>Users</button>
    {userList?
    <ul>
        {userList.map(item => (
        <li>
            {JSON.stringify(item)}
        </li>
        )
        )}
    </ul>: null}
    </>
  )
}

export default Users