"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { recipeData } from "../../../data/data";

const RecipeDetailsPage = ({ params }) => {
  const [filterData, setFilterData] = useState([]);
  const { recipeId } = params;

  useEffect(() => {
    const filterRecipes = recipeData.filter(
      (recipe) => recipe.id === +recipeId
    );
    setFilterData(filterRecipes);
  }, [recipeId]);

  const { category, description, src, title, recipeInfo } =
    filterData.length > 0 ? filterData[0] : {};

  return (
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
  );
};

export default RecipeDetailsPage;
