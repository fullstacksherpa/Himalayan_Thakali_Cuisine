"use client";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useState } from "react";
import FoodSwiper from "./FoodSwiper";
import Categories from "./Categories";
import { allmomo } from "@/constraints";
const allCategories = [
  "all",
  ...new Set(allmomo.map((eachmomo) => eachmomo.categories)),
];

const MomoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(allmomo);

  const filterItems = (categories) => {
    if (categories === "all") {
      setMenuItems(allmomo);
      return;
    }

    const newMomo = allmomo.filter(
      (eachmomo) => eachmomo.categories === categories
    );
    setMenuItems(newMomo);
  };

  return (
    <section id="menu" className="max-w-container mx-auto">
    <div className="w-[90%] mx-auto cursor-pointer h-screen">  {/* h-screen is given for editiong only*/}
      <div
        className={`${isOpen? 'bg-darkGreen text-white':''} flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="text-[15px] font-medium leading-tight">momos</div>
      
      {isOpen ? (
          <RiArrowDownSLine className="text-2xl text-violet-700 ml-auto" />
        ) : (
          <RiArrowUpSLine className="text-2xl text-violet-700 ml-auto" />
        )}
        </div>
        {isOpen ? (
          <>
          <Categories filterItems={filterItems} categories={categories} /> 
            <FoodSwiper menuItems={menuItems}/>
            </>
        ):<></>}
        
    </div>
    </section>
       
  );
};

export default MomoDropdown;
