import React from 'react'
import Styles from './Plans.module.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import '../../App.css';
const Plans = () => {
  return (
    <div className={Styles.plansContainer}>
  <div className={Styles.programHeader} style={{ gap: '2rem' }}>
    <span>READY TO START</span>
    <span className="strokeText">YOUR JOURNEY</span>
    <span className="strokeText">NOW WITH US</span>
  </div> 

  <div className={Styles.plans}>
  {plansData.map((plan, index) => (
    <div className={Styles.plan} key={index}>
      {plan.icon}
      <span>{plan.name}</span>
      <span>$ {plan.price}</span>

      <div className={Styles.features}>
        {plan.features.map((feature, i) => (
          <div className={Styles.feature} key={i}>
            <img src={whiteTick} alt="" />
            <span key={i}>{feature}</span>
          </div>
        ))}
      </div>

     <div><span>See more benfits</span></div>
       <button className='btn'>Join Now</button>
    </div>
   ))}
  </div>
</div>
  )
}

export default Plans;