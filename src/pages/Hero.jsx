import { useGSAP } from '@gsap/react'
import React from 'react'
import herodesk from '../assets/hero1.webp' 
import gsap from 'gsap'
const Hero = () => {
    const maskedTimeline = gsap.timeline()

    useGSAP(() => {
    maskedTimeline
    .fromTo(".masked-img", {
      maskSize: "50% 50%",
      duration: 0.5,
      ease: "power1.inOut",
    },
 {
        scale: 1.3,
        maskPosition: "center center",
        maskSize: "100% 100%",
        duration: 2,
        ease: "power1.inOut"
    })
    }, [])
  return (
    <div className='hero' id='art'>
        <img src={herodesk} alt="" className=" masked-img hero-image inset-0 w-full h-full object-cover" />
      
             <div className='hero-text'>
                <h1 className='hero-h1'>1ST PROJECTS</h1>
                <p>diverserangeofcreations</p>
            </div>
    </div>
  )
}

export default Hero