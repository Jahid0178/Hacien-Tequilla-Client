"use client";

import Image from "next/image";

const ProductCard = ({ data }) => {
  const { src, title } = data;
  return (
    <div className="rounded overflow-hidden bg-[#2F2F2F] group border border-transparent hover:border-[#988357] transition-all ease-in-out duration-300">
      <Image
        src={src}
        alt={title}
        width={450}
        height={250}
        className="w-full"
      />
      <div className="p-4 text-center ">
        <h2 className="text-2xl font-bold text-[#6E6E6E] group-hover:text-white transition-all ease-in-out duration-300">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
