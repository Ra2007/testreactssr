import React from 'react'
import T from 'prop-types'

const UsersList = ({ users, name, handleName, isShowList }) => {
  return (
    users.length > 0 &&
    isShowList && (
      <div className='user-list'>
        {name !== '' &&
          users.map((user) => (
            <div className='user-item' key={user.id} onClick={() => handleName(user.name)}>
              {user.name}
            </div>
          ))}
      </div>
    )
  )
}

export default UsersList

UsersList.propTypes = {
  users: T.arrayOf(T.shape({ id: T.number, name: T.string })).isRequired,
  name: T.string,
  handleName: T.func,
  isShowList: T.bool,
}
