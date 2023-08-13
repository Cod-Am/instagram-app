import React from 'react'
import './Nav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ForumIcon from '@mui/icons-material/Forum';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Avatar from '@mui/material/Avatar';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Nav = () => {

    return (
        <div className='nav'>
            <div className='title-content'>
                {/* <img 
            src="https://www.pngkey.com/png/detail/1-13459_instagram-font-logo-white-png-instagram-white-text.png" 
            alt="Instagram Font Logo White Png - Instagram White Text@pngkey.com" /> */}
                <div className='title'>
                    <img
                        className='logoimg'
                        src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-instagram-logo-instagram-text-icon-18.png'
                        alt='img not found'
                    />
                </div>
            </div>
            <div className='nav_content'>
                <div className='nav_content'>
                    <div className='home_content'>
                        <HomeIcon fontSize='medium' />
                        <div className='home'>
                            Home
                        </div>
                    </div>
                    <div className='search_content'>
                        <SearchIcon fontSize='medium' />
                        <div className='search'>
                            Search
                        </div>
                    </div>
                    <div className='explore_content'>
                        <ExploreOutlinedIcon fontSize='medium' />
                        <div className='explore'>
                            Explore
                        </div>
                    </div>
                    <div className='reels_content'>
                        <VideoLibraryIcon fontSize='medium' />
                        <div className='reel'>
                            Reels
                        </div>
                    </div>
                    <div className='messages_content'>
                        <ForumIcon fontSize='medium' />
                        <div className='messages'>
                            Messages
                        </div>
                    </div>
                    <div className='notifs_content'>
                        <FavoriteBorderIcon fontSize='medium' />
                        <div className='notifs'>
                            Notifications
                        </div>
                    </div>
                    <div className='create_content'>
                        <AddBoxOutlinedIcon fontSize='medium' />
                        <div className='create'>
                            Create
                        </div>
                    </div>
                    <div className='profile_content'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
                        <div className='profile'>
                            Profile
                        </div>
                    </div>
                    <div className='more_content'>
                        <DensityMediumIcon fontSize='medium' />
                        <div className='more'>
                            More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav