import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../assets/styles/Header.module.scss';

// Mademoiselle Logo
import logo from '../images/logo.png';
const whatsAppLink = 'https://wa.me/5517988071374?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+fazer+uma+encomenda+';
const navMenu = [
    {
        position: 1,
        name: 'Menu',
        link: '/',
    },

];

const navMenuItems = navMenu.map(item => <li key={item.position}><a href={item.link}>{item.name}</a></li>);

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className={styles.mainNav}>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-3">
                    <Link to="/"><img src={logo} className={styles.logo} alt="Logo" /></Link>
                    <h1>Menu</h1>
                </div>


                <div className={styles.cta}>
                    <div className={styles.toggleBtn} onClick={() => setToggleMenu(true)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>



                    {
                        (toggleMenu == true) ?
                            <ul className={styles.menuResponsive}>
                                <i className={`fa-sharp fa-solid fa-xmark ${styles.closeBtn}`} onClick={() => setToggleMenu(false)}></i>
                                {navMenuItems}
                                <a href={whatsAppLink} target="_blank" className={`btn btn-primary ${styles.btnPrimary}`}><i className="fa-brands fa-whatsapp"></i> &nbsp;Encomendar Online</a>
                            </ul>

                            : <ul className={styles.menu}>
                                {navMenuItems}
                                <a href={whatsAppLink} target="_blank" className={`btn btn-primary ${styles.btnPrimary}`}><i className="fa-brands fa-whatsapp"></i> &nbsp;Encomendar Online</a>
                            </ul>
                    }


                </div>
            </div>
        </header>
    )
}
