import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/ceika_logo7.png'

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 border-top bg-dark">
            <ul className='nav col-md-4 justify-content-start list-unstyled d-flex'>
                <li> <p className='text-primary'> Email: ing.hugoespinosa@gmail.com</p></li>
                <li> <p className='text-primary'> Teléfono: +57 313 8871873</p></li>
            </ul>
            <div className='justify-content-center '>
                <ul className='nav border-bottom  mb-3'>
                    <li className='mx-2'><Link to={'https://www.facebook.com/groups/832391130456275'} className='bi bi-facebook btn btn-outline-primary btn-lg border border-0' role="button"></Link></li>
                    <li className='mx-2'><Link to={'https://wa.link/orsxfc'} className='bi bi-whatsapp btn btn-outline-primary btn-lg border border-0' role="button"></Link></li>
                    <li className='mx-2'><Link to={'/'} className='bi bi-instagram btn btn-outline-primary btn-lg border border-0' role="button"></Link></li>
                </ul>
                <p className="mb-3 mb-md-0 text-primary">© 2023 Cika, Inc</p>
            </div>
            <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
                <li><NavLink to={'/'} className={'text-primary'}>
                    <img src={logo} alt="Logo" className="d-inline-block align-text-top" />
                </NavLink></li>
            </ul>
        </footer>
    );
};

export default Footer;
