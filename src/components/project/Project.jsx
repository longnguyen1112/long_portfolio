import React from 'react'
import "./project.css"

const Project = ({img,link,name}) => {
  return (
    <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
        </a>
        <div className="p-project-name">
          {name}
        </div>
    </div>
  )
}

export default Project;