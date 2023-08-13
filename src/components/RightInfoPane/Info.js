import React from 'react'
import './Info.css'
import Avatar from '@mui/material/Avatar';
const Info = () => {
  let profile = {
    username: 'amrit.0607',
    name: 'Amrit'
  }
  return (
    <div className='info'>
      <div className='profile'>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 46, height: 46 }}
        />
        <div className='profile_detail'>
          <div>
            {profile.username}
          </div>
          <div>
            {profile.name}
          </div>
        </div>
        <button className='switch'>Switch</button>
      </div>
      <div className='profile_nav'>
        <div className='sugg'>
          Suggested for you
        </div>
        <div className='seeAll'>
          See All
        </div>
      </div>
    </div>
  )
}

export default Info