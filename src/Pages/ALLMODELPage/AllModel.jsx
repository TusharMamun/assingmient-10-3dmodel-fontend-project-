// import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import Card from '../../Component/Card'
import { use } from 'react'
import { AuthContext } from '../../Auth/Authcontext'
// import { AuthContext } from '../../Auth/Authcontext'

const AllModel = () => {
  const {loading} =use(AuthContext)
  const allproductDAta = useLoaderData()
  
  console.log(allproductDAta)
  if (loading) {
    return <LoddingSpenner/>;
  }

  return (
    <div className='w-11/12 mx-auto border-rose-500'>
      <div className='my-8'>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent 
bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2 text-center">
  Explore the AI Universe
</h1>
<p className="text-gray-500 text-lg md:text-xl text-center">
  Browse all available AI models with ease and insight.
</p>
      </div>
<div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto'>
  {
  allproductDAta.map(data=><Card data={data} key={data._id}></Card>)
}
</div>
    </div>
  )
}

export default AllModel