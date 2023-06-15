"use client";

import Link from "next/link";
import Image from "next/image";
import { Scrollbar, Autoplay } from "swiper";
import { partnersIcon, recipeData } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/Buttons/Button";
import PartnerLogoCard from "@/components/Cards/PartnerLogoCard";
import "swiper/css/scrollbar";
import RecipeCard from "@/components/Cards/RecipeCard";

const HomePage = () => {
  return (
    <>
      <section className="bg-[#1c1c1c] bg-[url('/assets/images/hero-bg.webp')] bg-no-repeat text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="uppercase text-primary font-bold mb-4">
                Hacien Is Here
              </h4>
              <h1 className="text-2xl md:text-7xl mb-4 font-bold">
                TEQUILA WORTH SPENDING TIME WITH.
              </h1>
              <p className="mb-4">
                HACIEN is an invitation — to rediscover your relationship with
                tequila.
              </p>
              <div className="flex gap-4">
                <Button type="button" className="btn-secondary">
                  Learn More
                </Button>
                <Button type="button" className="btn-primary">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Image
                src="/assets/images/bottle-yellow.png"
                alt="Bottle Yellow"
                width={180}
                height={450}
                className="w-36"
              />
              <Image
                src="/assets/images/bottle-black.png"
                alt="Bottle Yellow"
                width={180}
                height={450}
                className="w-36"
              />
              <Image
                src="/assets/images/bottle-clear.png"
                alt="Bottle Yellow"
                width={180}
                height={450}
                className="w-36"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Recipe Section */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="uppercase text-primary text-2xl font-bold mb-4">
                Cocktail Recipes
              </h4>
              <h2 className="text-2xl md:text-6xl mb-4 font-bold">
                Ways To Enjoy
              </h2>
              <p>Order at the bar, or craft in the comfort of your home.</p>
            </div>
            <div className="text-end">
              <Link href="#" className="btn btn-primary">
                View All
              </Link>
            </div>
          </div>
          {/* Slider */}
          <div className="mt-5">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              scrollbar={{
                hide: true,
              }}
              loop={true}
              autoplay={{
                delay: 2000,
              }}
              modules={[Scrollbar, Autoplay]}
            >
              {recipeData.map((item) => (
                <SwiperSlide key={item.id}>
                  <RecipeCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Partner Section */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="uppercase text-2xl md:text-6xl font-bold mb-8">
                OUR STOCKISTS AND PARTNERS
              </h2>
              <p className="mb-8">
                We’re pleased to partner with some of the leading retailers and
                drinks brands in the industry, to bring HACIEN to an ever-wider
                audience.
              </p>
              <p className="mb-8">
                Keep an eye on our social media and blog for stockist-exclusive
                pop-ups, and unique collaborations on HACIEN cocktails.
              </p>
              <Button className="btn-primary" type="button">
                Shop Now
              </Button>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {partnersIcon.map((item) => (
                  <PartnerLogoCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
