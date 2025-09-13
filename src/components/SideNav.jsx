import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { X } from 'lucide-react';
import { useEffect, useRef } from "react"
const SideNav = ({ navOpen, setNavOpen }) => {
const menuRef = useRef(null)
const timeLine = gsap.timeline(
{ x: 0, ease: "power3.out" 
})
useGSAP(() => {
    timeLine.fromTo("#menu", {
  opacity: 0,
    y: -20,

    stagger: 0.1,
    ease: "sine.inOut"
  },

{
  opacity: 1,
    y: 0,
    x: 0,
    ease: "sine.inOut",
    delay: 0.05,
    duration: 1
} )

    timeLine.fromTo(".stagger" ,{
            y: -10,    
    },
    {
        y: 0,
        stagger:{
            amount: 1.5,
            ease: "",
            from: "top",
        }

    }
)
},[navOpen])

  return (
    <>
  {navOpen &&  (
     <div id="menu" ref={menuRef} className="side-nav">

            <ul>
                <li className="stagger side-nav-li">CREATIVE</li>
                <li className="stagger side-nav-li">EXPLORATION</li>
                <li className="stagger side-nav-li">GROWTH</li>
                <li className="stagger side-nav-li">EXPRESSION</li>
                <li className="stagger side-nav-li">PLAYFULNESS</li>
            </ul>
    </div>
    )}
    </>
  )
}

export default SideNav