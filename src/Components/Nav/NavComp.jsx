import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavComp.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavComp() {

    const [navPadding, setNavPadding] = useState('py-3');


    window.addEventListener('scroll', function () {
        if (this.scrollY > 10)
            setNavPadding('py-2');
        else
            setNavPadding('py-3');

    })


    return (
        <Navbar expand="lg" className={`bg-blue-color navbar-dark text-uppercase ${navPadding} fixed-top`}>
            <Container >
                <Navbar.Brand href="#home" className='fw-bold fs-1'>React-Framework</Navbar.Brand>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item mx-lg-1 mx-0">
                            <NavLink className="nav-link rounded" to="/React-router-DOM-and-formik-exercise/home">home</NavLink>
                        </li>
                        <li className="nav-item mx-lg-1 mx-0">
                            <NavLink className="nav-link rounded" to="/React-router-DOM-and-formik-exercise/about">about</NavLink>
                        </li>
                        <li className="nav-item mx-lg-1 mx-0">
                            <NavLink className="nav-link rounded" to="/React-router-DOM-and-formik-exercise/portfolio">portfolio</NavLink>
                        </li>
                        <li className="nav-item mx-lg-1 mx-0">
                            <NavLink className="nav-link rounded" to="/React-router-DOM-and-formik-exercise/contact">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </Navbar>
    )
}



