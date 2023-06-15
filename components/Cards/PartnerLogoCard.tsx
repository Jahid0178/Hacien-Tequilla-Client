import Image from "next/image";

const PartnerLogoCard = ({ data }: any) => {
  const { src } = data;

  return (
    <div className="bg-[#232323] p-5 flex justify-center items-center w-full h-44 rounded-md hover:border hover:border-[#988357]">
      <Image src={src} alt="Partner Logo" width={150} height={150} />
    </div>
  );
};

export default PartnerLogoCard;
