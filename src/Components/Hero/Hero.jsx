import React from 'react'
import Styles from './Hero.module.css'
import Header from '../Header/Header'
import '../../App.css'
import heroImage from '../../assets/hero_image.png';
import Back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';

const Hero = () => {
  return (
   <div className={Styles.hero}>
     <div className = {Styles.left}>
       <Header/>

       <div className={Styles.bestad}>
         <div></div>
        <span>the best fitness club</span>
       </div>

       <div className={Styles.heroText}>
        <div>
            <span className='strokeText'>Shape </span>
            <span>Your</span>
        </div>
        <div>
            <span>Ideal Body</span>
        </div>
       
       <div>
       <span>
       Train hard, stay strong, and become the best version of yourself
       </span>
       </div>
       </div>
       
       <div className={Styles.figures}>
         <div>
            <span>+140</span>
            <span>expert coachs</span>
         </div>
         <div>
            <span>+978</span>
            <span>members joined</span>
         </div>
         <div>
            <span>+50</span>
            <span>fitness program</span>
         </div>
       </div>

      <div className={Styles.heroButtons}>
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>
      </div>

     </div>
     
     <div className={Styles.right}>
         <div className={Styles.heartRate}>
            <img src={Heart} alt=""/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
         </div>
         
         <img src={heroImage} alt="hero image" className={Styles.heroImage}/>
         <img src={Back} alt="hero image back" className={Styles.back}/>
         
         <div className={Styles.calories}>
            <img src={Calories} alt='Calories img'/>
            <span>Calories Burn</span>
            <span>220 kcal</span>
         </div>
         <button className="btn" id={Styles.joinUs}>Join Now</button>
     </div>
   </div>
  )
}

export default Hero;