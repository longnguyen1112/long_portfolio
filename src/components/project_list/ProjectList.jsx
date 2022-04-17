import React from 'react';
import Project from '../project/Project';
import "./projectlist.css";
import { projects } from "../../data.js";

const ProjectList = () => {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h1 className="pl-title">These are my works</h1>
            <p className="pl-desc">
                Those are my projects that I have been working on. The project topic varies from <b>Back-End, Front-End</b> to some research related to <b>Mathematics and Data Science</b> I will be adding more on my <a href="https://github.com/longnguyen1112" target="_blank" rel="noreferrer">
                <b>GitHub</b>.</a> 
            </p>
        </div>
        <div className="pl-list">
            {projects.map((item) => (
            <Project key={item.id} img={item.img} link={item.link} name={item.pro_name} />
            ))}
        </div>
    </div>
  )
};

export default ProjectList;
