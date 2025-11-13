import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Auth/Authcontext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import LoddingSpenner from "../../Component/LoddingSpenner";

const ViweDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [detailsData, setDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch model details with access token
  useEffect(() => {
    if (!id || !user?.accessToken) return;
    setLoading(true);

    fetch(`http://localhost:3000/models/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch model details");
        return res.json();
      })
      .then((data) => setDetailsData(data))
      .catch(() => toast.error("Failed to load model details!"))
      .finally(() => setLoading(false));
  }, [id, user]);

  if (loading) return <LoddingSpenner />;
  if (!detailsData) return <div className="text-center py-20 text-red-600">No data found.</div>;

  const {
    _id,
    name,
    framework,
    useCase,
    dataset,
    description,
    image,
    purchased,
    createdBy,
  } = detailsData;

  // ✅ Delete model (token included)
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This model will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your model has been deleted.", "success");
            toast.success("Model deleted successfully!");
            navigate("/allmodel");
          })
          .catch(() => toast.error("Failed to delete model!"));
      }
    });
  };

  // ✅ Purchase model (token included)
  const handlePurchase = () => {
    const finalpuchaseWithoutId ={
name:detailsData.name,
    framework:detailsData.framework,
    useCase:detailsData.useCase,
    dataset:detailsData.dataset,
    description:detailsData.description,
    image:detailsData.image,
    purchased:detailsData.purchased,
    createdBy:detailsData.createdBy,
 purchasedBy: user.email,
createdAt:new Date()







    }
fetch(`http://localhost:3000/purchase/${detailsData._id}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(finalpuchaseWithoutId ),
})
    .then((res) => res.json())
    .then((data) => {
      console.log("Purchase response:", data);
  toast.success(" Scucess fully purchas ")
       navigate("/allmodel");
    })
    .catch((err) => {
      console.error("Error during purchase:", err);
      toast.error("Already purcesd")
         navigate("/allmodel");
    });
};

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/2 p-4 flex justify-center items-center bg-gray-100">
            <img
              src={image || "https://i.ibb.co.com/JW1pxyfk/Black-Modern-Minimalist-Simple-Technology-Banner.png"}
              alt={name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Info */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                {user?.email === createdBy && (
                  <div className="mt-6 flex flex-col md:flex-row gap-3">
                    <Link
                      to={`/updataeModel/${_id}`}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-normal p-2 rounded-full transition duration-300"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={handleDelete}
                      className="bg-red-500 hover:bg-red-600 text-white font-normal p-2 rounded-full transition duration-300"
                    >l
                      Delete
                    </button>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-500 mb-4">
                <span className="font-semibold text-gray-700">Framework:</span> {framework}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Use Case:</span> {useCase}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Dataset:</span> {dataset}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Purchased:</span> {purchased || 0} times
              </p>
              <p className="text-gray-600 mt-4">{description}</p>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-3">
              <button
                onClick={handlePurchase}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViweDetails;
