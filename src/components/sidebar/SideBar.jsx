import './sidebar.scss'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="menu">
          <h3 className="title">Dashboard</h3>
          <ul className="list">
            <Link to='/'>
              <li className="listItem active">
                <LineStyleIcon className='icon' />
                Home
              </li>
            </Link>
            <li className="listItem">
              <TimelineIcon className='icon' />
              Analytics
            </li>
            <li className="listItem">
              <TrendingUpIcon className='icon' />
              Sales
            </li>
          </ul>
          <h3 className="title">Quick Menu</h3>
          <ul className="list">
            <Link to='/users'>
              <li className="listItem">
                <PersonOutlineIcon className='icon' />
                Users
              </li>
            </Link>
            <Link to='/products'>
              <li className="listItem">
                <StorefrontIcon className='icon' />
                Products
              </li>
            </Link>
            <li className="listItem">
              <AttachMoneyIcon className='icon' />
              Transactions
            </li>
            <li className="listItem">
              <BarChartIcon className='icon' />
              Reports
            </li>
          </ul>
          <h3 className="title">Notifications</h3>
          <ul className="list">
            <li className="listItem">
              <MailOutlineIcon className='icon' />
              Mail
            </li>
            <li className="listItem">
              <DynamicFeedIcon className='icon' />
              Feedback
            </li>
            <li className="listItem">
              <ChatBubbleOutlineIcon className='icon' />
              Messages
            </li>
          </ul>
          <h3 className="title">Staff</h3>
          <ul className="list">
            <li className="listItem">
              <WorkOutlineIcon className='icon' />
              Manage
            </li>
            <li className="listItem">
              <TimelineIcon className='icon' />
              Analytics
            </li>
            <li className="listItem">
              <ReportGmailerrorredIcon className='icon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar