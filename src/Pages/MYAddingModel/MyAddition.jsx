import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/Authcontext";
import LoddingSpenner from "../../Component/LoddingSpenner";
import { toast } from "react-toastify";

const MyAddition = () => {
  const { user } = useContext(AuthContext);
  const [myModel, setMymodel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`http://localhost:3000/my-add-model?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMymodel(Array.isArray(data) ? data : []); // ✅ ensure it's an array
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load models!");
        setLoading(false);
      });
  }, [user]);

  if (loading) return <LoddingSpenner />;

  return (
    <div className="relative overflow-x-auto bg-white w-11/12 mx-auto shadow-md rounded-lg">
      <h1 className="text-2xl text-red-500 text-center my-5">
        HISTORY MY ADD MODELS
      </h1>

      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-300">
            <th className="p-4 text-sm font-medium text-slate-500">Image</th>
            <th className="p-4 text-sm font-medium text-slate-500">Name</th>
            <th className="p-4 text-sm font-medium text-slate-500">Framework</th>
            <th className="p-4 text-sm font-medium text-slate-500">Use Case</th>
            <th className="p-4 text-sm font-medium text-slate-500">Created By</th>
          </tr>
        </thead>
        <tbody>
          {myModel.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-4 text-center text-red-600">
                No models found.
              </td>
            </tr>
          ) : (
            myModel.map((model) => (
              <tr
                key={model._id}
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
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyAddition;
