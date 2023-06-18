"use client";

import Button from "@/components/Buttons/Button";
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <Image
                src="/assets/images/bottle-yellow.png"
                alt="Pineapple tequila"
                width={200}
                height={150}
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#FFC000]">PINEAPPLE</h2>
              <h4 className="text-2xl font-bold mb-4">
                PINEAPPLE TEQUILA BLANCO
              </h4>
              <p>
                Our signature Tequila Blanco, infused with sweet, aromatic
                pineapple to create an easy-drinking, smooth and naturally
                flavoured tequila. Shake into a cocktail, pour it straight, or
                serve over ice with your favourite mixer.
              </p>
              <div className="mt-4">
                <h3 className="text-[#988357] text-2xl font-bold mb-4">
                  TASTING NOTES
                </h3>
                <ul>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">
                      TASTE PROFILE:
                    </span>
                    <span>
                      Ripe Pineapple, Crunchy Citrus Sorbet, Earthy Agave and
                      Prickly Pepper
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">AROMA:</span>
                    <span>Citrus, Pineapple, Straw, Mint</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">COLOUR:</span>
                    <span>Clear</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">SIZE:</span>
                    <span>70cl</span>
                  </li>
                  <li className="mt-4">
                    <span className="text-2xl font-bold">£ 59.95 GBP</span>
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
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <Image
                src="/assets/images/bottle-black.png"
                alt="Pineapple tequila"
                width={200}
                height={150}
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#696868]">CRISTALINO</h2>
              <h4 className="text-2xl font-bold mb-4">AÑEJO CRISTALINO</h4>
              <p>
                Our Tequila Añejo Cristalino is classically barrel-aged, with
                the distinctive smooth taste of Jalisco’s finest agave. Named
                for its crystal clear complexion, it’s filtered with charcoal to
                remove colour and retain a bold and complex flavour. Best served
                over ice and enjoyed slowly.
              </p>
              <div className="mt-4">
                <h3 className="text-[#988357] text-2xl font-bold mb-4">
                  TASTING NOTES
                </h3>
                <ul>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">
                      TASTE PROFILE:
                    </span>
                    <span>
                      Notes of Honey, Forest Floor, Roasted Agave, Sweet Toffee,
                      Truffle and Pink Peppercorn
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">AROMA:</span>
                    <span>Caramel, Vanilla, Butterscotch</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">COLOUR:</span>
                    <span>Clear</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">SIZE:</span>
                    <span>70cl</span>
                  </li>
                  <li className="mt-4">
                    <span className="text-2xl font-bold">£ 104.95 GBP</span>
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
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <Image
                src="/assets/images/bottle-clear.png"
                alt="Pineapple tequila"
                width={200}
                height={150}
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-[#FFC000]">BLANCO</h2>
              <h4 className="text-2xl font-bold mb-4">TEQUILA BLANCO</h4>
              <p>
                Our 100% agave Tequila Blanco has the clean, aromatic taste of
                Jalisco&apos;s finest blue agave. Smooth and subtle yet full of
                distinctive flavour. Shake into a cocktail, pour it straight, or
                serve over ice with your favourite mixer.
              </p>
              <div className="mt-4">
                <h3 className="text-[#988357] text-2xl font-bold mb-4">
                  TASTING NOTES
                </h3>
                <ul>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">
                      TASTE PROFILE:
                    </span>
                    <span>
                      Peppery Spice, Herby Agave, Citrus Sorbet and Wisps of
                      Tropical Fruit
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">AROMA:</span>
                    <span>Fresh Mint, Herbal, Straw and Citrus</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">COLOUR:</span>
                    <span>Clear</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[#6E6E6E] font-bold">SIZE:</span>
                    <span>70cl</span>
                  </li>
                  <li className="mt-4">
                    <span className="text-2xl font-bold">£ 54.95 GBP</span>
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
    </>
  );
};

export default OurTequilaPage;
