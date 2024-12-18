import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import { ArrowBack } from '@mui/icons-material';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [
        { name: 'All', value: 'all' },
        { name: 'Electronics', value: 'electronics' },
        { name: 'Jewelry', value: 'jewelery' },
        { name: "Men's Clothing", value: "men's clothing" },
        { name: "Women's Clothing", value: "women's clothing" },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            const url =
                selectedCategory === 'all'
                    ? 'https://fakestoreapi.com/products'
                    : `https://fakestoreapi.com/products/category/${selectedCategory}`;
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [selectedCategory]);

    return (
        <div className="min-h-screen  flex">
           
            
           
            <aside className="w-64 fixed  left-0 h-full bg-white p-6 shadow-lg border-r border-gray-200 overflow-y-auto">
            <button className="bg-white text-blue-600 font-semibold text-lg pb-8 transition">
            <NavLink to="/"><ArrowBack/></NavLink>
            </button>
            <div className='flex justify-center pb-4'>

            <img src="/astral.png" alt="logo" className='w-24 ' />
            </div>
            <hr  className='pb-4 '/>
          
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li key={category.value}>
                            <button
                                className={`w-full text-left px-4 py-2 rounded font-medium ${
                                    selectedCategory === category.value
                                        ? 'bg-indigo-500 text-white'
                                        : 'text-gray-800 hover:bg-indigo-100 hover:text-indigo-500'
                                }`}
                                onClick={() => setSelectedCategory(category.value)}
                            >
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            
            <div className="flex-grow ml-64">
               
                <section className="py-12 px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        {selectedCategory === 'all'
                            ? 'All Products'
                            : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white shadow-md rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-48 w-full object-contain mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {product.description.substring(0, 100)}...
                                </p>
                                <p className="text-lg pt-12 font-bold text-black mb-4">
                                    ${product.price}
                                </p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

               
            </div>
        </div>
    );
};

export default Products;
