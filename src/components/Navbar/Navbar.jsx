import React from 'react'
import './navbar.scss'
const Navbar = () => {
    return (
        <section className="navBarSection">

            <header className="header flex">
                <div className="logoDev">
                    <a href="" className="logo flex">
                        <h1 className="icon">MPCL</h1>
                    </a>


                </div>

                <div className="navBar">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a></li>
                        <li className="navItem">
                            <a href="#" className="navLink">About</a></li>
                        <li className="navItem">
                            <a href="#" className="navLink">Career</a></li>
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a></li>
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a></li>
                    </ul>
                </div>
            </header>
        </section>
    )
}

export default Navbar
