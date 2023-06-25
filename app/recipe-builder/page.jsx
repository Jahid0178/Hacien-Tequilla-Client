import ProductCard from "../../components/Cards/ProductCard";
import SearchBar from "../../components/Inputs/SearchBar";
import { recipeData } from "../../data/data";

const recipeBuilderPage = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="text-primary uppercase">Tequila Cocktails</h4>
            <h2 className="text-4xl uppercase font-bold">Recipe Builder</h2>
          </div>
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recipeData.map((recipe) => (
            <ProductCard key={recipe.id} data={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default recipeBuilderPage;
