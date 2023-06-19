import { TeamData } from "@/interfaces/interfaces";
import Image from "next/image";

const TeamCard = ({ data }: { data: TeamData }) => {
  const { name, role, description, profile } = data;

  return (
    <div className="relative overflow-hidden group transition-all duration-75 h-[450px]">
      <Image
        src={profile}
        alt={name}
        width={250}
        height={250}
        className="w-full rounded-md"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 group-hover:ease-linear">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-[#988357] font-bold">{role}</p>
        <p className="hidden group-hover:block">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
