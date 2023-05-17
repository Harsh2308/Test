import { useEffect, useState } from "react";
import data from "./Data.json";
import { ConciergePage } from "./style.js";
import ConciergeSlideContent from './ConciergeSlideContent';
import ConciergeFormServices from './ConciergeFormServices';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [activeSlide,setActiveSlide] = useState(1);
  const [scrollSpeed,setScrollSpeed] = useState(0)
  const scrollSpeedNotEqualtoZero = scrollSpeed!==0 ? scrollSpeed : 1
  const breakpoint1 = 700
  const breakpoint2 = 1400
  const breakpoint3 = 2100
  const breakpoint4 = 2800

  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function () {
    setWidth(window.innerWidth);
  });

const checkScrollSpeed = (function(settings){
    settings = settings || {};

    let lastPos, newPos, timer, delta, 
        delay = settings.delay || 50;

    function clear() {
        lastPos = null;
        delta = 0;
    }

    clear();

    return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll 
            delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        setScrollSpeed(delta)
        return
    };
})();
  window.addEventListener('scroll', function () {
    checkScrollSpeed()
    if(window.scrollY<200){
      setActiveSlide(1)
      return
    }
    else if(window.scrollY>breakpoint1 && window.scrollY<breakpoint2){
      setActiveSlide(2)
      return
    }else if(window.scrollY>breakpoint2 && window.scrollY<breakpoint3){
      setActiveSlide(3)
      return
    }
    else if(window.scrollY>breakpoint3 && window.scrollY<breakpoint4){
      setActiveSlide(4)
      return
    }
    else if(window.scrollY>breakpoint4){
      setActiveSlide(5)
      return
    }else{
      return
    }
  });

  useEffect(()=>{
    gsap.to(".slide-animation-container", {
      scrollTrigger: {
        trigger: ".concierge-page",
        start: "215",
        end: `+=${700 * 5}`,
        pin: ".concierge-page",
        scrub: 2,
      },
    });
  },[])


  return (
    <div>
    <ConciergePage className="concierge-page">
      <h1 className='title' style={{ display: width > 520 ? 'block' : 'none' }}>Concierge Services</h1>
      <div className='concierge_services-slider' style={{
        position:'relative',
        height: `calc(100vh - 100px)`,
        overflow: 'hidden',
        width:'100%'
      }}>
        {data.conciergedata.map((item, index) => {
          return (
            <ConciergeSlideContent key={index} item={item} index={index + 1} data={data.conciergedata} activeSlide={activeSlide} />
          );
        })}

      </div>
        <ConciergeFormServices />
    </ConciergePage>
    </div>
  );
};

export default Index;