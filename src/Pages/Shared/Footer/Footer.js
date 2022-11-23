import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.jpg'

const Footer = () => {
    return (
        <div className='mt-auto'>
            <footer className=" footer p-10 bg-blue-200 text-base-content">
                <div>
                    <img className='w-24 h-24 rounded-xl' src={logo} alt="" />
                    <p>Moto Vintage.<br />Providing reliable service since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>

        </div>
    );
};

export default Footer;