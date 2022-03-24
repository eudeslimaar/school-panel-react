import React from './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="search">
        <input type="text" placeholder='Buscar' />
        <SearchIcon className='icon'/>
      </div>
    </div>
  )
}

export default Navbar