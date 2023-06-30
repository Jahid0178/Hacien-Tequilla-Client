"use client";

import React, { useState, useEffect, SetStateAction } from "react";
import ProductCard from "../../components/Cards/ProductCard";
import SearchBar from "../../components/Inputs/SearchBar";
import { recipeData } from "../../data/data";

const RecipeBuilderPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newRecipeData = recipeData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(newRecipeData);
  }, [searchValue]);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col align-start md:flex-row justify-between md:items-center gap-4 mb-6">
          <div>
            <h4 className="text-primary uppercase">Tequila Cocktails</h4>
            <h2 className="text-4xl uppercase font-bold">Recipe Builder</h2>
            <h5 className="mt-2">Total Data Found: {data.length}</h5>
          </div>
          <SearchBar setSearchValue={setSearchValue} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((recipe) => <ProductCard key={recipe.id} data={recipe} />)
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecipeBuilderPage;
