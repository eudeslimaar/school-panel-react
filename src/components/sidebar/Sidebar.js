import './sidebar.scss'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <p className="logo">My Admin Panel</p>
      </div>
      <div className="center">
        <p className="title">Admin</p>
        <ul>
          <li>
            <BorderAllOutlinedIcon/>
            General
          </li>
        </ul>
        <ul>
          <li>
            <SquareFootOutlinedIcon/>
            Profesores
          </li>
        </ul>
        <ul>
          <li>
            <SchoolOutlinedIcon/>
            Alumnos
          </li>
        </ul>
      </div>
      <div className="bottom">
       <p className="title">
       Configuraciones
       </p>
       <ul>
          
          <li>
          <AccountCircleOutlinedIcon/>
            User
          </li>
        </ul>
        <ul>
          
          <li>
          <SettingsOutlinedIcon/>
            Configuraciones
          </li>
        </ul>
        <ul>
          <li>
            <LogoutOutlinedIcon/>
            Logout
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar