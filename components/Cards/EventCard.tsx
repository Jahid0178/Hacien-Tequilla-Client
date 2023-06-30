"use client";

import { EventDataProps } from "@/types/types";
import Image from "next/image";
import { FaCalendarAlt, FaClock, FaLocationArrow } from "react-icons/fa";

const EventCard = ({ data }: EventDataProps) => {
  const { imageSrc, name, date, time, location } = data;
  return (
    <div className="bg-[#2B2A2A] h-full rounded-md overflow-hidden border border-transparent hover:border-[#988357] transition-all ease-in-out delay-100">
      <Image
        src={imageSrc}
        alt={name}
        width={350}
        height={280}
        className="w-full h-60 object-cover"
      />
      <div>
        <ul className="p-6">
          <li className="mb-2">
            <h2 className="text-2xl">{name}</h2>
          </li>
          <li className="mb-2">
            <p className="flex gap-4 items-center">
              <FaCalendarAlt color="#988357" /> {date}
            </p>
          </li>
          <li className="mb-2">
            <p className="flex gap-4 items-center">
              <FaClock color="#988357" /> {time}
            </p>
          </li>
          <li className="mb-2">
            <p className="flex gap-4 items-center">
              <span>
                <FaLocationArrow color="#988357" />
              </span>
              {location}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventCard;
