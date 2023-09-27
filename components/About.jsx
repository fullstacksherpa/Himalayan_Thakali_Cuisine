"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, plateVariants } from "@/constraints/variants";

const About = () => {

    
  return (
    <section className="min-h-[520px] overflow-x-hidden overflow-y-hidden">
        <div className="container mx-auto min-h-[550px]">
            <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.6}}
            className="flex min-h-[550px] flex-col lg:flex-row items-center px-4">
                <motion.div
                variants={fadeIn('right', 'tween', 0.2,1.8)}
                className="flex-1 text-center lg:text-left">
                    <div className="font-secondary font-bold text-base uppercase tracking-[-0.04em] text-accent mb-2">Our Story</div>
                    <h2 className="font-black text-[46px] mb-4 leading-[1.1] capitalize">Who We Are</h2>
                    <p className="mb-8 max-w-[560px]">Renowned for our dedication to delivering not only fresh, delectable meals and exceptional hospitality, but also for offering unbeatable value. Despite upholding a high standard of quality, we pride ourselves on keeping our prices notably affordable. Your satisfaction is our priority, ensuring a memorable dining experience that doesn't burden your wallet.</p>
                    <button className="btn mx-auto lg:mx-0">
                        Price Comparision
                    </button>
                </motion.div>
                <motion.div 
                variants={plateVariants}
                className="-mb-[300px] -mr-[120px] z-10">
                    <Image src="/photobox/img/about/plate.png" width="1600" height="1600" alt="Picture of Thakali" className="w-[500px] h-[500px]"/>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default About