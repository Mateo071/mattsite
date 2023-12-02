import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='h-10 items-center justify-center flex font-bold'>
        <p className='blue-gradient_text'>Vinson Math and Physics</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/services' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
          Services
        </NavLink>
        <NavLink to='/schedule' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
          Schedule
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar