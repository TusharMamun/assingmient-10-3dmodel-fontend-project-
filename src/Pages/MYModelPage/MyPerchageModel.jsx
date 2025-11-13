import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/Authcontext";
import LoddingSpenner from "../../Component/LoddingSpenner";

const MyPerchageModel = () => {
  const { user } = useContext(AuthContext);
  const [myModel, setMymodel] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch purchased models for logged-in user
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    fetch(`https://3daimodelserverbackend.vercel.app/mypurchase?email=${user.email}`, {
      headers: {
        "Content-Type": "application/json",
        // if your API requires auth, uncomment the next line:
  authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // ensure data is an array
        setMymodel(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to fetch purchased models:", err);
      })
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) return <LoddingSpenner />;

  return (
    <div className="relative overflow-x-auto bg-white w-11/12 mx-auto shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-blue-600 text-center my-5">
        HISTORY OF MY PURCHASED MODELS
      </h1>

      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-300">
            <th className="p-4 text-sm font-medium text-slate-600">Image</th>
            <th className="p-4 text-sm font-medium text-slate-600">Name</th>
            <th className="p-4 text-sm font-medium text-slate-600">Framework</th>
            <th className="p-4 text-sm font-medium text-slate-600">Use Case</th>
            <th className="p-4 text-sm font-medium text-slate-600">Created By</th>
            <th className="p-4 text-sm font-medium text-slate-600">Purchased At</th>
          </tr>
        </thead>

        <tbody>
          {myModel.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-4 text-center text-red-500">
                No purchased models found.
              </td>
            </tr>
          ) : (
            myModel.map((model) => (
              <tr
                key={model._id}
                className="hover:bg-slate-50 border-b border-slate-200 transition-all"
              >
                <td className="p-4">
                  <img
                    src={model.image || "https://via.placeholder.com/60"}
                    alt={model.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-4 font-medium">{model.name}</td>
                <td className="p-4">{model.framework}</td>
                <td className="p-4">{model.useCase}</td>
                <td className="p-4">{model.createdBy}</td>
                <td className="p-4">
                  {model.createdAt
                    ? new Date(model.createdAt).toLocaleString()
                    : "-"}
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
