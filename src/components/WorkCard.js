import React from 'react'
const WorkCard = (props) => {
  return (
    <div>
        <div className='project-card'>
          <img src={props.imgsrc} alt="pic" width="100%"/>
          <h2 className='project-title'>{props.title}</h2>
          <p>{props.text}</p>
          <div className='pro-btns'>
            <a href={props.view} className='btn'>View</a>
          </div>
        </div>
    </div>
  )
}

export default WorkCard