import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Auth/Authcontext';
import { toast } from 'react-toastify';
import LoddingSpenner from '../../Component/LoddingSpenner';
import Card from '../../Component/Card';

const AllModel = () => {
  const { user, loading: authLoading } = useContext(AuthContext);

  // State to store fetched models
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState(""); // <-- Add filter state

  // Fetch all models
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/models`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        if (Array.isArray(resData)) {
          setData(resData);
        } else {
          console.warn("Expected an array but got:", resData);
          setData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching models:", err);
        toast.error("Failed to load model details!");
      });
  }, [user]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setSearchLoading(true);
    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setSearchLoading(false));
  };

  if (loading || authLoading) {
    return <LoddingSpenner />;
  }

  // Apply framework filter
  const filteredData = selectedFramework
    ? data.filter((model) => model.framework === selectedFramework)
    : data;

  return (
    <div className="w-11/12 mx-auto border-rose-500">
      <div className="my-8 text-center w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2">
          Explore the AI Universe
        </h1>
        <p className="text-gray-500 text-lg md:text-xl">
          Browse all available AI models with ease and insight.
        </p>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between mb-4 w-full md:w-1/2 mx-auto my-5 gap-4">
          {/* Search */}
          <form className="relative w-full" onSubmit={handleSearch}>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              name="search"
              type="text"
              placeholder="Search by Name, Framework, Use Case, Created By..."
              className="w-full pl-10 pr-24 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg font-medium transition-colors"
            >
              Search
            </button>
          </form>

          {/* Framework Filter */}
          <select
            value={selectedFramework}
            onChange={(e) => setSelectedFramework(e.target.value)}
            className="border rounded px-2 py-2 w-full md:w-1/2"
          >
            <option value="">All Frameworks</option>
            <option value="TensorFlow">TensorFlow</option>
            <option value="PyTorch">PyTorch</option>
            <option value="Keras">Keras</option>
          </select>
        </div>
      </div>

      {/* Models Display */}
      {searchLoading ? (
        <LoddingSpenner />
      ) : filteredData.length === 0 ? (
        <p className="text-center text-gray-500">No models found.</p>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
          {filteredData.map((item) => (
            <Card key={item._id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllModel;
