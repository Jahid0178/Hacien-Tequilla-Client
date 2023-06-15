import React from "react";

const OurStoryPage = () => {
  return (
    <>
      <section className="bg-[#1c1c1c] text-white h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="uppercase text-primary font-bold mb-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="uppercase text-primary font-bold mb-4">
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
            <div>2</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStoryPage;
