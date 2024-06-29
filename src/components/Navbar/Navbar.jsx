import logo from '../../assets/logo.svg'
import { NavItem } from './NavItem'

export default function Navbar(){
  return(
    <nav className='flex justify-between items-center px-[5%] py-2 fixed w-full bg-white'>
      <div className='flex gap-4'>
        <img src={logo}/>
        <div >
          <h5 className='font-extrabold text-2xl text-primary'>Dev</h5>
          <p className='text-secondary text-lg'>Zen</p>
        </div>
      </div>
      <ul className='flex items-center gap-10'>
        {NavItem.map((item) => (
          <li key={item.id} className='font-semibold text-tertiary hover:text-secondary cursor-pointer'>{item.title}</li>
        ))}
      </ul>
      <div className='flex gap-8 items-center'>
        <button className='border border-secondary w-32 rounded-xl py-2 px-4 text-secondary'>Login</button>
        <button className='bg-secondary py-2 px-4 rounded-xl w-32 text-center text-white font-semibold'>Get Started</button>
      </div>
    </nav>
  )
}