import './topbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <span className='logo'>React Admin</span>
        </div>
        <div className="right">
          <div className="iconContainer">
            <NotificationsNoneIcon />
            <span className='topIconBag'>2</span>
          </div>
          <div className="iconContainer">
            <LanguageIcon />
          </div>
          <div className="iconContainer">
            <SettingsIcon />
          </div>
          <img src="https://images.unsplash.com/photo-1498558263790-a9555e3d002d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="profilePic" className="avatar" />
        </div>
      </div>
    </div>
  )
}

export default TopBar