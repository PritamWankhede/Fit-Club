import React from 'react'
import Styles from './Resaons.module.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className={Styles.Reasons} id={Styles.reasons}>
      <div className={Styles.leftSection}>
         <img src={image1} alt=""/>
         <img src={image2} alt=""/>
         <img src={image3} alt=""/>
         <img src={image4} alt=""/>
      </div>

      <div className={Styles.rightSection}>
         <span>Some Reasons</span>

         <div>
            <span className='strokeText'>why</span>
            <span> choose us? </span>
         </div>

         <div className={Styles.details}>
          <div>
            <img src={tick} alt=""/>
            <span>OvER 140+ EXPERT COACHES</span>
         </div>
         <div>
             <img src={tick} alt=""/>
             <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
         <div>
              <img src={tick} alt=""/>
              <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
         <div>
              <img src={tick} alt=""/>
              <span>RELIABLE PARTINERS</span>
         </div>
    </div>
    
           <span
              style={{
              color: 'var(--gray)',
              fontWeight: 'normal'
             }}
            >
              OUR PARTNERS
           </span>
           <div class="parterns">
           <img src={nb} alt=""/>
           <img src={adidas} alt=""/>
           <img src={nike} alt=""/>
           </div>
        </div>
    </div>
  )
}

export default Reasons