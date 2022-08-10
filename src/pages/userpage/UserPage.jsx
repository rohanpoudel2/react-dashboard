import './userpage.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

const UserPage = () => {
  return (
    <div className="user">
      <div className="titleContainer">
        <h1 className='title'>Edit User</h1>
        <Link to='/newUser'>
          <button className="addbtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="top">
            <img src="https://images.unsplash.com/photo-1585422544771-75e895ba76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="userImg" className="img" />
            <div className="title">
              <span className="username">Gohan Poudel</span>
              <span className="title">Software Engineer</span>
            </div>
          </div>
          <div className="bottom">
            <span className="title">Account Details</span>
            <div className="userinfo">
              <PermIdentityIcon className='icon' />
              <div className="title">gohan125</div>
            </div>
            <div className="userinfo">
              <CalendarTodayIcon className='icon' />
              <div className="title">12/12/2022</div>
            </div>
            <span className="title">Contact Details</span>
            <div className="userinfo">
              <PhoneIphoneIcon className='icon' />
              <div className="title">+977 9801234321</div>
            </div>
            <div className="userinfo">
              <MailOutlineIcon className='icon' />
              <div className="title">gohan@gmail.com</div>
            </div>
            <div className="userinfo">
              <LocationSearchingIcon className='icon' />
              <div className="title">Kathmandu, Nepal</div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="title">Edit</span>
          <form className="userUpdateForm">
            <div className="left">
              <div className="item">
                <label>Username</label>
                <input type="text" placeholder='gohan125' className='input' />
              </div>
              <div className="item">
                <label>Full Name</label>
                <input type="text" placeholder='Gohan Poudel' className='input' />
              </div>
              <div className="item">
                <label>Email</label>
                <input type="text" placeholder='gohan@gmail.com' className='input' />
              </div>
              <div className="item">
                <label>Phone</label>
                <input type="text" placeholder='+977 9801234321' className='input' />
              </div>
              <div className="item">
                <label>Address</label>
                <input type="text" placeholder='Kathmandu, Nepal' className='input' />
              </div>
            </div>
            <div className="right">
              <div className="upload">
                <img src="https://images.unsplash.com/photo-1585422544771-75e895ba76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="updateImg" className='img' />
                <input type="file" id='upload' hidden />
                <label htmlFor="upload"><PublishIcon className='icon' /></label>
              </div>
              <button className="updatebtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserPage