import React from 'react'
import Styles from './Header.module.css';
import Logo from '../../assets/logo.png'


const Header = () => {
  return (
    <div className={Styles.header}>
    <img src={Logo} alt='logo image' className={Styles.logo}/>

     <ul className={Styles.menu}>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>  
     </ul>
    </div>
  )
}
export default Header