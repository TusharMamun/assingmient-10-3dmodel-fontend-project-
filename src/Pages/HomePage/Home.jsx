import React from 'react'
import HomeSlider from './HomeSlider'
import { useLoaderData } from 'react-router'
import Card from '../../Component/Card'


const Home = () => {

  const allproductDAta = useLoaderData()


  return (
    <div>
   
<HomeSlider></HomeSlider>
<div className='my-14 border-e-cyan-500 border-2 rounded-md w-11/12 mx-auto'>
<h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-8">
  Explore the 8 Most Recent AI Models
</h1>
<div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto'>
  {
  allproductDAta.map(data=><Card data={data} key={data._id}></Card>)
}
</div>
</div>

    </div>

  )
}

export default Home