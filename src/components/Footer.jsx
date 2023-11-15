import styles from '../style';

import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">


      </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Bilvårdscenter Vättersnäs AB. All Rights Reserved.
      </p>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
       Created by  <a className="text-yellow-400" href="https://www.linkedin.com/in/meshel-alsadou-2b9644256/">Meshel Alsadou</a>
      </p>


    </div>
  </section>
);

export default Footer;
