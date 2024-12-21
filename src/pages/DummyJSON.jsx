import { useEffect, useState } from 'react';

const DummyJSON = () => {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    const fetchRecipes = async () => {
     
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes); 
    }
    fetchRecipes();
  }, []);



  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  py-8 pt-32">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pl-8">This is the Recipes List of Dummy JSON API</h1>
      <hr />
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={recipe.image || 'https://via.placeholder.com/300'}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Description:</span> {recipe.description}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Ingredients:</span> {recipe.ingredients.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyJSON;