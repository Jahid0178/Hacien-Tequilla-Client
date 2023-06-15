"use client";

const HomePage = () => {
  return (
    <>
      <section className="bg-[#1c1c1c] text-white h-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h4 className="uppercase text-primary font-bold mb-4">
                Our Story
              </h4>
              <h1 className="text-2xl md:text-5xl mb-4">IN JALISCO, MEXICO…</h1>
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
    </>
  );
};

export default HomePage;
