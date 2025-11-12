import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate,  } from 'react-router';
import { AuthContext } from '../../Auth/Authcontext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ViweDetails = () => {
  const detailsData = useLoaderData();
  console.log(detailsData)
  const { user } = useContext(AuthContext);
    const navigate = useNavigate()

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
  } = detailsData || {};



const handleDelete = () => {


  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // Call DELETE API
      fetch(`http://localhost:3000/models/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your model has been deleted.",
            icon: "success",
          });
          toast.success("Model deleted successfully!");
          navigate("/allmodel"); // redirect after deletion
        })
        .catch((err) => {
          console.error(err);
          toast.error("Failed to delete model!");
        });
    }
  });
};
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 p-4 flex justify-center items-center bg-gray-100">
            <img
              src={image || "https://i.ibb.co.com/JW1pxyfk/Black-Modern-Minimalist-Simple-Technology-Banner.png"}
              alt={name}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
        <div className='flex justify-between items-center'>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                   {user?.email === createdBy && (
              <div className="mt-6 flex flex-col md:flex-row gap-3">
                <Link to={`/updataeModel/${_id}  `}
               
                  className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-normal p-2 rounded-full transition duration-300"
                >
                  Edit
                </Link>
                <button onClick={handleDelete}
       
                  className=" bg-red-500 hover:bg-red-600 text-white font-normal p-2 rounded-full transition duration-300"
                >
                  Delete
                </button>
              </div>
            )}
        </div>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-semibold text-gray-700">Framework:</span> {framework}
              </p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Use Case:</span> {useCase}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Dataset:</span> {dataset}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Purchased:</span> {purchased || 0} times</p>
              <p className="text-gray-600 mt-4">{description}</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col md:flex-row gap-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Buy Now
              </button>
    
            </div>

            {/* Show Edit/Delete only if user is creator */}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViweDetails;
