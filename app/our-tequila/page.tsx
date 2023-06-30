"use client";

import Button from "@/components/Buttons/Button";
import { productsData } from "@/data/data";
import Image from "next/image";

const OurTequilaPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center">
            <h4 className="text-primary font-bold text-2xl mb-2">
              Our Tequila
            </h4>
            <h1 className="font-bold text-4xl md:text-6xl mb-4 uppercase">
              The Range
            </h1>
            <Button type="button" className="btn-primary">
              Explore Our Range
            </Button>
            <div className="hidden md:flex justify-evenly mt-8 flex-wrap gap-4 relative">
              <Image
                src="/assets/images/bottle-1.png"
                alt="Tequila Pineapple"
                width={350}
                height={180}
                className="-z-10"
              />
              <Image
                src="/assets/images/bottle-2.png"
                alt="Tequila Pineapple"
                width={350}
                height={180}
                className="-z-10"
              />
              <Image
                src="/assets/images/bottle-3.png"
                alt="Tequila Pineapple"
                width={350}
                height={180}
                className="-z-10"
              />
              <div className="absolute bottom-0 right-0 left-0 h-28 bg-gradient-to-t from-[#1C1C1C] "></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {productsData.map((product) => {
            const {
              id,
              colorCode,
              description,
              flavour,
              src,
              title,
              aroma,
              color,
              price,
              size,
              testProfile,
            } = product;

            return (
              <section key={id}>
                <div className="container">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                      <Image
                        src={src}
                        alt="Pineapple tequila"
                        width={200}
                        height={150}
                        className="mx-auto"
                      />
                    </div>
                    <div>
                      <h2
                        className={"text-4xl font-bold"}
                        style={{ color: colorCode }}
                      >
                        {flavour}
                      </h2>
                      <h4 className="text-2xl font-bold mb-4">{title}</h4>
                      <p>{description}</p>
                      <div className="mt-4">
                        <h3 className="text-[#988357] text-2xl font-bold mb-4">
                          TASTING NOTES
                        </h3>
                        <ul>
                          <li className="flex gap-4">
                            <span className="text-[#6E6E6E] font-bold">
                              TASTE PROFILE:
                            </span>
                            <span>{testProfile}</span>
                          </li>
                          <li className="flex gap-4">
                            <span className="text-[#6E6E6E] font-bold">
                              AROMA:
                            </span>
                            <span>{aroma}</span>
                          </li>
                          <li className="flex gap-4">
                            <span className="text-[#6E6E6E] font-bold">
                              COLOUR:
                            </span>
                            <span>{color}</span>
                          </li>
                          <li className="flex gap-4">
                            <span className="text-[#6E6E6E] font-bold">
                              SIZE:
                            </span>
                            <span>{size}</span>
                          </li>
                          <li className="mt-4">
                            <span className="text-2xl font-bold">
                              £ {price} GBP
                            </span>
                          </li>
                        </ul>
                        <div className="mt-4 flex gap-4">
                          <Button type="button" className="btn-secondary">
                            Leanr More
                          </Button>
                          <Button type="button" className="btn-primary">
                            Add To Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default OurTequilaPage;
