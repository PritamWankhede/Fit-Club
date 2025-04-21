import React from 'react'
import Styles from './Programs.module.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
    return (
      <div className={Styles.programs} id={Styles.Programs}>
        <div className={Styles.header}>
          <span className="strokeText">Explore our</span>
          <span>Progress</span>
          <span className="strokeText">to shape you</span>
        </div>
  
        <div className={Styles.data}>
          {programsData.map((program, index) => (
            <div className={Styles.category} key={index}>
                     {program.image} 
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className={Styles.joinnow}>
                <span>Join Now</span>
                <img src={RightArrow} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Programs;