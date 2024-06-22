import React from 'react';
import logo1 from '../assets/footer/logo1.svg';
import logo2 from '../assets/footer/logo2.svg';
import linkedin from '../assets/footer/linkedin.svg';
import instagram from '../assets/footer/instagram.svg';


const Footer = () => {
  return (
    <footer className="contact bg-gradient-to-b mt-20 from-[#050B17] to-[#050B17] w-screen">
      <div className="max-w-5xl m-auto p-5">
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 md:justify-between">
          <div>
            {/* Logo pertama dari folder assets/footer */}
            <img src={logo1} alt="Your Logo" className="h-auto w-48 md:w-auto" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#ffffff] md:text-3xl text-2xl font-semibold">
              Contact
            </h3>
            <ul className="text-gray-400 md:text-base text-sm">
              <li>Mail: iQuran@gmail.com</li>
              <li>Phone: +62 813 9898 2222</li>
              <li>Address: Palembang Selatan bagian 1 ulu</li>
              <li>JL RA Demak No 17 Kertapati</li>
              <li>Satukertapatisatu</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#ffffff] md:text-3xl text-2xl font-semibold">
              Social Media
            </h3>
            <div className="flex gap-3">
              <a href="#" target="" rel="noreferrer">
                {/* Instagram logo dari folder assets/footer */}
                <img src={instagram} alt="Instagram" className="h-9 w-9 md:h-10 md:w-10" />
              </a>
              <a href="#" target="" rel="noreferrer">
                {/* LinkedIn logo dari folder assets/footer */}
                <img src={linkedin} alt="LinkedIn" className="h-9 w-9 md:h-10 md:w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-5xl mx-auto py-3 px-5">
        <div className="flex justify-between items-center gap-5">
          <p className="text-gray-400 text-[10px] md:text-base">
            Copyright 2024 © iQuran | Created by{' '}
            <a href="#" target="" rel="noreferrer" className="font-semibold">Mattmwln</a>
          </p>
          <div className="md:w-20 w-10">
            {/* Logo kedua dari folder assets/footer */}
            <img src={logo2} alt="Your Second Logo" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
