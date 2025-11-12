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
        // Ensure we get an array
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
        setLoading(false);
      });
  }, [user]);

  if (loading || authLoading) {
    return <LoddingSpenner />;
  }

  return (
    <div className="w-11/12 mx-auto border-rose-500">
      <div className="my-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2">
          Explore the AI Universe
        </h1>
        <p className="text-gray-500 text-lg md:text-xl">
          Browse all available AI models with ease and insight.
        </p>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">No models found.</p>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
          {data.map((item) => (
            <Card key={item._id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllModel;
