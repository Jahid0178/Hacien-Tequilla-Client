"use client";

import { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import { recipeData } from "../../../data/data";
import Button from "../../../components/Buttons/Button";
import { RecipeDetailsParamsProps } from "@/types/types";

interface Recipe {
  id: string | number;
  src: string;
  category: string;
  title: string;
  description: string;
  recipeInfo: {
    difficulty: string;
    ice: string;
    glass: string;
    garnish: string;
  };
}

interface RecipeInfo {
  difficulty: string;
  ice: string;
  glass: string;
  garnish: string;
}

const RecipeDetailsPage = ({ params }: RecipeDetailsParamsProps) => {
  const [filterData, setFilterData] = useState<Recipe[]>([]);
  const { recipeId } = params;

  useEffect(() => {
    const filterRecipes = recipeData.filter(
      (recipe) => recipe.id === +recipeId
    );
    console.log(filterRecipes);
    setFilterData(filterRecipes);
  }, [recipeId]);

  const {
    category = "",
    description = "",
    src = "/",
    title = "",
    recipeInfo = {} as RecipeInfo,
  } = filterData.length > 0 ? filterData[0] : {};

  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative">
            <div>
              <h3 className="text-primary text-xl font-bold uppercase">
                {category}
              </h3>
              <h2 className="text-4xl md:text-6xl uppercase font-bold my-2">
                {title}
              </h2>
              <p>{description}</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 border-y py-8">
                <div>
                  <h3 className="text-primary text-lg uppercase font-bold">
                    Difficulty
                  </h3>
                  <p>{recipeInfo?.difficulty}</p>
                </div>
                <div>
                  <h3 className="text-primary text-lg uppercase font-bold">
                    Ice
                  </h3>
                  <p>{recipeInfo?.ice}</p>
                </div>
                <div>
                  <h3 className="text-primary text-lg uppercase font-bold">
                    Glass
                  </h3>
                  <p>{recipeInfo?.glass}</p>
                </div>
                <div>
                  <h3 className="text-primary text-lg uppercase font-bold">
                    Garnish
                  </h3>
                  <p>{recipeInfo?.garnish}</p>
                </div>
              </div>
              <div className="mt-10">
                <Button
                  className="btn-primary"
                  type="button"
                  onClick={() => console.log("clicked")}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={src || "/"}
                alt={title || "Recipe Image"}
                width={550}
                height={480}
                className="h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-6xl font-bold uppercase">
                Ingredients
              </h2>
              <div className="bg-[#1F1F1F] p-8 mt-8 rounded-md">
                <ul>
                  <li className="mb-6">HACIEN Tequila</li>
                  <li className="my-6">Lime Juice</li>
                  <li className="my-6">Basil Syrup</li>
                  <li className="my-6">Pineapple juice</li>
                  <li className="my-6">6 basil leaves</li>
                  <li className="mt-6">Top with prosecco</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">Method</h3>
              <ul className="list-decimal list-inside">
                <li>
                  Shake the first 5 ingredients well in a cocktail shaker.
                </li>
                <li>Fine strain into martini/coupe glass.</li>
                <li>Top with Prosecco and gently stir it in.</li>
                <li>Garnish with a basil leaf.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeDetailsPage;
