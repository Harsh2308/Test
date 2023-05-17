import React from 'react'
import { ConciergeSlideStyledContent } from './style.js'
import {motion, AnimatePresence} from 'framer-motion'


const Index = ({ item, index, data,activeSlide }) => {

  const showSlide = activeSlide === index;

  const variants = {
    initial: {opacity: 0,},
    visible: {opacity:1},
  }

  const titleVariants = {
    initial: {opacity: 0,y:'100%'},
    visible: {opacity:1,y:0},
  }


  const imageVariants = {
    initial: {opacity: 0,y:'-100%'},
    visible: {opacity:1,y:0},
  }

  const transition = {duration:1}

  return (
    <motion.div className="slide-animation-container" animate={showSlide ? 'visible' : 'initial'} variants={variants} style={{position:'absolute',height:'100%',width:'100%',top:0,left:0}}>
    <ConciergeSlideStyledContent>
      <motion.div className='text'>
        <motion.h1 
         animate={showSlide ? 'visible' : 'initial'} variants={imageVariants} transition={transition}
        className='concierge-heading'>{item.heading}</motion.h1>
        <motion.p animate={showSlide ? 'visible' : 'initial'} variants={titleVariants} transition={transition} className='concierge-para'>{item.para}</motion.p>
        <motion.button animate={showSlide ? 'visible' : 'initial'} variants={titleVariants} transition={transition} className='reserve-btn'>Reserve</motion.button>
      </motion.div>
      <motion.div className='image' animate={showSlide ? 'visible' : 'initial'} variants={imageVariants} transition={transition}>
        <img src={item.image} alt='conciergeSlideImage' />
      </motion.div>
      <div className="numbering">
        <p>{index}</p>
        <span>|</span>
        <p>{data.length}</p>
      </div>

    </ConciergeSlideStyledContent>
    </motion.div>

  )
}

export default Index