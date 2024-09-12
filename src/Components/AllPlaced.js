import React from 'react'
import GrideCard from './GrideCard'

const AllPlaced = () => {
  return (
    <div className='All-cources'>
            <h1>All Self-Paced Courses</h1>
            <ul>
                <li>Accelerated Computing</li>
                <li>Data Science</li>
                <li>Deep Learning</li>
                <li>Generative AI/LLM</li>
            </ul>
            <GrideCard/>
            <h3>view full catlog</h3>
    </div>
  )
}

export default AllPlaced