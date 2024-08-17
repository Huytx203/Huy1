import React from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Newsletter = () => {
  return (
    <div className="md:flex flex-col-3 my-6">
      <div className="relative mx-auto  flex justify-center h-[520px] w-[250px]  border-4 border-black rounded-2xl">
        <span className="border border-black bg-black w-16 h-4 mt-2 rounded-full"></span>

        <span className="absolute -right-1.5 top-20  border-2 border-black h-10 rounded-md"></span>

        <span className="absolute -left-1.5 top-16  border-2 border-black h-6 rounded-md"></span>
        <span className="absolute -left-1.5 top-32  border-2 border-black h-12 rounded-md"></span>
        <span className="absolute -left-1.5 top-48  border-2 border-black h-12 rounded-md"></span>
      </div>
      <div className="relative mx-auto flex mt-6 justify-center h-[520px] w-[250px]  border-4 border-black rounded-2xl">
        <span className="border border-black bg-black w-16 h-4 mt-2 rounded-full"></span>

        <span className="absolute -right-1.5 top-20  border-2 border-black h-10 rounded-md"></span>

        <span className="absolute -left-1.5 top-16  border-2 border-black h-6 rounded-md"></span>
        <span className="absolute -left-1.5 top-32  border-2 border-black h-12 rounded-md"></span>
        <span className="absolute -left-1.5 top-48  border-2 border-black h-12 rounded-md"></span>
      </div>
      <div className="relative mx-auto mt-6 flex justify-center h-[520px] w-[250px]  border-4 border-black rounded-2xl">
        <span className="border border-black bg-black w-16 h-4 mt-2 rounded-full"></span>

        <span className="absolute -right-1.5 top-20  border-2 border-black h-10 rounded-md"></span>

        <span className="absolute -left-1.5 top-16  border-2 border-black h-6 rounded-md"></span>
        <span className="absolute -left-1.5 top-32  border-2 border-black h-12 rounded-md"></span>
        <span className="absolute -left-1.5 top-48  border-2 border-black h-12 rounded-md"></span>
      </div>
    </div>
  );
};

export default Newsletter;
