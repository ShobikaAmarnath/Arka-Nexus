/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';
import bgVideo from '@/assets/images/main_vdo.mp4';
// import { ContainerTextFlip } from "../components/ui/container-text-flip";

const GridMotion = ({
  items = [],
  gradientColor = 'rgba(238, 255, 0, 0.3)',
  autoSpeed = 1,
  heroTitle = "Arka Nexus",
  // heroDescription = "Engineering Intelligence Empowering Industry"
}) => {
  const gridRef = useRef(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const autoAnimationsRef = useRef<(gsap.core.Tween | null)[]>([]);

  // Ensure the grid has 28 items (4 rows x 7 columns) by default
  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const startAutoAnimations = () => {
      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const baseSpeed = autoSpeed * direction;

          // Clear previous animation if exists
          if (autoAnimationsRef.current[index]) {
            autoAnimationsRef.current[index].kill();
          }

          // Create animation without infinite loop
          autoAnimationsRef.current[index] = gsap.to(row, {
            x: direction > 0 ? '+=1000' : '-=1000',
            duration: 10 / Math.abs(baseSpeed),
            ease: 'none',
            repeat: 0, // No repetition
            onComplete: () => {
              // Hide the grid after the animation completes
              if (index === rowRefs.current.length - 1) {
                gsap.to(".gridMotion-container", {
                  opacity: 0,
                  duration: 6,
                  onComplete: () => {
                    const element = document.querySelector(".gridMotion-container") as HTMLElement;
                    if (element) {
                      element.style.display = "none";
                    }
                  }
                });
              }
            }
          });
        }
      });
    };

    startAutoAnimations();

    return () => {
      autoAnimationsRef.current.forEach(anim => {
        if (anim) anim.kill();
      });
    };
  }, [autoSpeed]);

  return (
    <div className="loading" ref={gridRef}>
      <section
        className="intro hero-section"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video" >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Blue gradient overlay */}
        <div className="gradient-overlay" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '500%',
          height: '100%',
          background: `radial-gradient(circle, ${gradientColor} 0%, rgba(0,0,0,0.7) 100%)`,
          zIndex: 1,
        }}></div>

        {/* Hero content */}
        <div className="hero-content" style={{
          position: 'absolute',
          transform: 'translateX(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          justifyContent: 'center',
          zIndex: 3,
          width: '80%',
          maxWidth: '800px'
        }}>
          <h1 className="animated-title">
            <span className="word">{heroTitle.split(' ')[0]}</span> {/* "Arka" */}
            <span className="word">{heroTitle.split(' ')[1]}</span> {/* "Nexus" */}
          </h1>
          <div
            style={{
              fontSize: '2rem',
              fontWeight: '500',
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="text-white font-bold"
          >
            {/* <span className="short-text">EIEI -</span> */}
            <h5 className='eiei-text'>Engineering Intelligence Empowering Industry</h5>
          </div>


        </div>

        {/* Grid content - This will disappear after animation */}
        <div className="gridMotion-container" style={{
          position: 'relative',
          zIndex: 2,
          opacity: 1, // Initially visible
        }}>
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => {
                if (el) {
                  rowRefs.current[rowIndex] = el;
                }
              }}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{
                      backgroundColor: 'rgba(17, 17, 17, 0.6)',
                      backdropFilter: 'blur(2px)'
                    }}>
                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                            opacity: 0.7,
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {/* Hero Content - Replace your existing title with this */}


        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
