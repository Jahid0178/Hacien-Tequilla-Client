"use client";

const RecipeDetailsPage = ({ params }) => {
  const { recipeId } = params;
  return (
    <section>
      <div className="container">recipe {recipeId} details page</div>
    </section>
  );
};

export default RecipeDetailsPage;
