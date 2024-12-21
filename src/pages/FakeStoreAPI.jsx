import { useEffect, useState } from 'react';

const FakeStoreAPI = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      
    };

    fetchProducts();
  }, []);

 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  py-8 pt-32">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pl-8">This is the Products List of Fake Store API</h1>
      <hr />
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain bg-gray-50 p-4"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description.slice(0, 80)}...</p>
              <p className="text-gray-800 font-bold mb-2">$ {product.price}</p>
              <p className="text-sm text-gray-500 capitalize">
                <span className="font-medium">Category:</span> {product.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FakeStoreAPI;
