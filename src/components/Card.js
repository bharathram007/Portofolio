import React from 'react'
import "../components/Card.css"
import WorkCard from './WorkCard';
import Carddata from './Carddata';
const Card = () => {
  return (
    <div className='work-container'>
      <br/>
      <div className='project-container'>
        {Carddata.map((val,ind)=>{
          return (
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
          )
        })}
      </div>

    </div>
  )
}

export default Card