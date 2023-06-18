"use client";

import TeamCard from "@/components/Cards/TeamCard";
import Image from "next/image";
import { Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import { teamMembers } from "@/data/data";

const OurStoryPage = () => {
  return (
    <>
      <section className="bg-[#1c1c1c] text-white h-screen flex items-center bg-[url('/assets/images/our-story-header.png')] bg-no-repeat bg-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="uppercase text-primary font-bold mb-4 text-2xl">
                Our Story
              </h4>
              <h1 className="text-2xl md:text-5xl mb-4 font-bold">
                IN JALISCO, MEXICO…
              </h1>
              <p className="mb-4">
                …we first saw tequila drinkers pause between sips to appreciate
                the depth of flavour — as the locals have been doing for
                centuries.{" "}
              </p>
              <p className="mb-4">
                A mark of respect for the quality of the tequila — at odds with
                the shot culture we knew from bars back home. We were converted
                immediately.
              </p>
              <p>
                It was an experience we didn’t want to leave behind. It inspired
                us to bring premium tequila home to the UK and to create a new
                appreciation for this often-overlooked spirit.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="bg-[url('/assets/images/img-1.png')] w-full h-full p-4 bg-center rounded-md">
              <h4 className="uppercase text-primary font-bold mb-4 text-2xl">
                Steeped In Tradition
              </h4>
              <h2 className="text-2xl md:text-5xl mb-4 font-bold">
                The Journey…
              </h2>
              <p className="mb-4">
                Finding the right distillery to work with took time — testing
                flavours, discussing techniques and sharing our vision. Just
                outside the town of Tequila itself, we finally found a partner
                with the skill and ambition to bring our unique flavoured
                tequila to life.
              </p>
              <p>
                The result — HACIEN. Named for the haciendas of Jalisco where
                it’s sourced and bottled. Distilled from 100% blue agave,
                resulting in a natural sweetness. Smooth and subtle, yet full of
                distinctive flavour.
              </p>
            </div>
            <div>
              <Image
                src="/assets/images/image-2.png"
                alt="Image 2"
                width={750}
                height={550}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <Image
                src="/assets/images/image-3.png"
                alt="Image 2"
                width={750}
                height={550}
                className="rounded-md"
              />
            </div>
            <div className="bg-[url('/assets/images/img-1.png')] w-full h-full p-4 bg-center rounded-md">
              <h4 className="uppercase text-primary font-bold mb-4 text-2xl">
                TRUE TEQUILA TASTE
              </h4>
              <h2 className="text-2xl md:text-5xl mb-4 font-bold">
                OVER TO YOU…
              </h2>
              <p className="mb-4">
                HACIEN is presented in three varieties — aromatic Blanco,
                barrel-aged Añejo Cristalino, and our signature bottle, a
                lightly infused Pineapple Blanco.
              </p>
              <p>
                Sipped straight, on the rocks or crafted into a cocktail,
                spending time with HACIEN is about exploration — of flavour, of
                texture, of tradition. Whether you’re at the beach, in the club
                or relaxing at home, it’s an experience to be savoured.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team section */}
      <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          scrollbar={{
            hide: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Scrollbar, Autoplay]}
        >
          {teamMembers.map((teamMember) => (
            <SwiperSlide key={teamMember.id}>
              <TeamCard data={teamMember} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default OurStoryPage;
