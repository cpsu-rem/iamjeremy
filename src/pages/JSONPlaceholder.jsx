import { useEffect, useState } from 'react';

const JSONPlaceholder = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-8 pt-32">
    
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pl-4">This is the User List of JSON Placeholder API</h1>
      <hr />
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Website:</span>{' '}
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {user.website}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JSONPlaceholder;
