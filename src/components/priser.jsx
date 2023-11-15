import React from 'react';
import styles from '../style';
import Button from './Button';
import { Route, Routes } from 'react-router-dom';
import Sma from '../assets/micro.svg'; // Adjust the path as necessary

import Sedan from '../assets/sedan.svg'; // Adjust the path as necessary

import Kombi from '../assets/suv.svg'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import Yrkesfordon from '../assets/panelvan.svg'; // Adjust the path as necessary
import Smallcar from './prislist/smallcar';
import SedanL from './prislist/sedan';
import KombiL from './prislist/kombi';
import YrkesL from './prislist/yrkes';
const Priser = () => {
  return (
    <div>
      <section
        id="clients" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row  flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div>
          <div className="flex-1 items-center flex flex-col">
            <h2
              className={`${styles.heading2} max-w-[870px] text-center mt-5 mix-blend-normal`}
            >
              BILTVÄTT
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] text-center`}>
              väljestorlek
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white h-full flex justify-cente rounded-2xl py-4">
        <div className="flex flex-col justify-center gap-4 md:flex-row w-full">
          <div className="flex justify-center gap-4">
            <Link
              className="items-center w-20 flex flex-col bg-blue-400 rounded-xl hover:bg-blue-500 p-4"
              to="/Liten"
            >

                <img src={Sma} alt="Car Icon" width="45vw" height="88" />
               Liten

            </Link>
            <Link
              className="items-center  w-20 flex flex-col bg-blue-400 rounded-xl hover:bg-blue-500 p-4"
              to="/sedan"
            >

                <img src={Sedan} width="45vw" height="88" alt="Car Icon" />
                Sedan

            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              className="items-center  w-20 flex flex-col bg-blue-400 rounded-xl hover:bg-blue-500 p-2.5"
              to="/kombi"
            >

                <img src={Kombi} width="45vw" height="88" alt="Car Icon" />
                Kombi

            </Link>
            <Link
              className="items-center  w-20 flex flex-col bg-blue-400 rounded-xl hover:bg-blue-500 p-2.5"
              to="/yrkes"
            >
              <img src={Yrkesfordon} width="45vw" height="88" alt="Car Icon" />
              Yrkes
            </Link>
          </div>
        </div>
      </div>
      <div className=" mt-2 bg-white  rounded-2xl ">
        <Routes>
          <Route path="/Liten" element={<Smallcar />} />
          <Route path="/sedan" element={<SedanL />} />
          <Route path="/kombi" element={<KombiL/>} />
          <Route path="/yrkes" element={<YrkesL/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Priser;
