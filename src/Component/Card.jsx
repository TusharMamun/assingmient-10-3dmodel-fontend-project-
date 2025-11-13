import React from 'react'
import { Link } from 'react-router'

const Card = ({data}) => {

  return (
    <div>
    
 <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 max-w-sm w-full">
      {/* Image */}
      <div className="relative">
        <img
          src={data.image}
          alt="BERT"
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
          AI Model
        </span>
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors duration-200">
          <svg
            className="w-4 h-4 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4 h-56">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{data.name}</h2>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">{data.framework}</span> TensorFlow
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Use Case:</span> {data.useCase}
        </p>
        <p className="text-gray-500 text-sm mb-4">
  {data.description.slice(0,50)}
        </p>

        <div className="flex justify-between items-center">
        <Link to={`/modelDetails/${data._id}`}>  <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-200">
            View Details
          </button></Link>
          <span className=" text-red-500 text-xl">BEST QUALITY</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card