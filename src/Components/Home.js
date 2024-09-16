import React from 'react'
import Header from './Header'
import Text from './Text'
import AllPlaced from './AllPlaced'
import WhyChoose from './WhyChoose'

const Home = ({title,description,bgImage}) => {
  return (
    <div>
  
      <Header title={title} description={description} bgImage={bgImage}/>
      <Text/>
      <AllPlaced/>
      <WhyChoose title={title}/>
    
    </div>
  )
}

export default Home