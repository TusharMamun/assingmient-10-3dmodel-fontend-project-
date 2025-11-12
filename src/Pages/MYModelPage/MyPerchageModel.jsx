import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/Authcontext";
import LoddingSpenner from "../../Component/LoddingSpenner";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyPerchageModel = () => {
  const { user } = useContext(AuthContext);
  const [myModel, setMymodel] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch purchased models for logged-in user
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`http://localhost:3000/purchase?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMymodel(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load purchased models!");
      })
      .finally(() => setLoading(false));
  }, [user]);

  // Handle purchase of a model
  const handlePurchase = (detailsData) => {
    Swal.fire({
      title: "Confirm Purchase",
      text: "Do you want to purchase this model?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, purchase it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/purchase`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user?.accessToken}`,
          },
          body: JSON.stringify({ ...detailsData, createdBy: user.email }),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire(
              "Purchased!",
              "Your model has been purchased.",
              "success"
            );
            toast.success("Model purchased successfully!");
            // Optionally refresh the list of purchased models
            setMymodel((prev) => [...prev, { ...detailsData, createdBy: user.email }]);
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to purchase model!");
          });
      }
    });
  };

  if (loading) return <LoddingSpenner />;

  return (
    <div className="relative overflow-x-auto bg-white w-11/12 mx-auto shadow-md rounded-lg">
      <h1 className="text-2xl text-red-500 text-center my-5">
        HISTORY OF MY PURCHASED MODELS
      </h1>

      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-300">
            <th className="p-4 text-sm font-medium text-slate-500">Image</th>
            <th className="p-4 text-sm font-medium text-slate-500">Name</th>
            <th className="p-4 text-sm font-medium text-slate-500">Framework</th>
            <th className="p-4 text-sm font-medium text-slate-500">Use Case</th>
            <th className="p-4 text-sm font-medium text-slate-500">Created By</th>
            <th className="p-4 text-sm font-medium text-slate-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {myModel.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-4 text-center text-red-600">
                No purchased models found.
              </td>
            </tr>
          ) : (
            myModel.map((model, idx) => (
              <tr
                key={model._id || idx}
                className="hover:bg-slate-50 border-b border-slate-200"
              >
                <td className="p-4">
                  <img
                    src={model.image || "https://via.placeholder.com/60"}
                    alt={model.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-4">{model.name}</td>
                <td className="p-4">{model.framework}</td>
                <td className="p-4">{model.useCase}</td>
                <td className="p-4">{model.createdBy}</td>
                <td className="p-4">
                  <button
                    onClick={() => handlePurchase(model)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full text-sm"
                  >
                    Purchase Again
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyPerchageModel;
