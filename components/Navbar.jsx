"use client";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { BsFillFilePersonFill } from "react-icons/bs";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const Navbar = () => {
  let date = new Date();
  let year = date.getFullYear();
  {
    /*handleScroll is for the smooth scroll which will overtake the scroll behaviour of href and it will also add active link*/
  }

  const ref = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-[8vh] lg:h-[8vh] sticky top-0 z-50 px-4 bg-white">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <div>
          <Image
            src="/assets/loogo.png"
            alt="personal logo"
            width="121024"
            height="90"
            className="w-[130px] img-cover h-[100px]"
          />
        </div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}>
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}>
                Menu
              </motion.li>
            </Link>
            <Link
              href="#techStack"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}>
                Service
              </motion.li>
            </Link>
            <Link
              href="#project"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}>
                Gallary
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
              onClick={handleScroll}>
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}>
                Contact
              </motion.li>
            </Link>
          </ul>
        </div>

        {/* MOBILE RIGHT_NAVBAR section*/}
        <div
          onClick={() => setShowMenu(true)}
          className="mdl:hidden cursor-pointer hover:scale-110">
          <GiHamburgerMenu />
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 pt-[50px] relative">
              <GiCrossMark className="absolute top-[2%] right-[5%] text-7xl text-red-400"onClick={() => setShowMenu(false)}/>
              <div className="flex flex-col items-center gap-7 pt-[30]">
                <ul className=" mt-[59px] flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    className="font-medium text-white text-4xl hover:text-lightGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}>
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    className="font-medium text-white text-4xl hover:text-lightGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}>
                      Menu
                    </motion.li>
                  </Link>
                  <Link
                    href="#techStack"
                    className="font-medium text-white text-4xl hover:text-lightGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: "easeIn",
                      }}>
                      Service
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    className="font-medium text-white text-4xl hover:text-lightGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeIn",
                      }}>
                      Gallary
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    className="font-medium text-white text-4xl hover:text-lightGreen cursor-pointer duration-300 nav-link"
                    onClick={handleScroll}>
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.5,
                        ease: "easeIn",
                      }}>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <div className="flex gap-4 pt-[20%]">
                  <a
                    href="https://www.facebook.com/profile.php?id=100088284609836"
                    target="_blank">
                    <span className="w-9 h-9 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-lightGreen cursor-pointer text-8xl hover:-translate-y-2 transition-all duration-300">
                      <SlSocialFacebook />
                    </span>
                  </a>
                  <a href="https://github.com/fullstacksherpa" target="_blank">
                    <span className="w-10 h-10 bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-lightGreen cursor-pointer  text-8xl hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </a>
                  <a href="https://ongchen.com" target="_blank">
                    <span className="w-10 h-10 text-8xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-lightGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <BsFillFilePersonFill />
                    </span>
                  </a>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-center mt-6 text-white">

                <p className="tracking-widest leading-6">Open: 8.00 am - 10.00pm</p><br/>

                <p className="tracking-wider">Booking Request</p>

                <a
                  href="tel:+9779813891923"
                  className="body-1 contact-number hover-underline hover:text-lightGreen hover:-tracking-tighter hover:font-extrabold hover:shadow-2xl">
                  (+977)-981-389-1923
                </a>
              </motion.div>
              <motion.footer initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-center absolute bottom-3 text-white flex flex-col" >
                 
                  <h3>Copyright © {year} &#124; Himalayan Thakali Cuisine</h3>
                  <h3>website by <a href="https://ongchen.com" className="hover:text-lightGreen">Ongchen Sherpa</a></h3>

              </motion.footer>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
