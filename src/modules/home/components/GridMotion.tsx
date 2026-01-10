import { useEffect, useRef, type JSX } from 'react';
import { gsap } from 'gsap';
import './GridMotion.css';
import bgVideo from '@/assets/images/main_vdo.mp4';

type Props = {
  autoSpeed?: number;
};

const GRID_ITEMS: (string | JSX.Element)[] = [
  'https://media.istockphoto.com/id/1390249924/photo/industrial-plant-for-the-production-of-sheet-metal-in-a-steel-mill-storage-of-sheet-rolls.jpg?s=1024x1024&w=is&k=20&c=hNYNzW3cJemADUDb8rmGhmpCT-E2bwtPyFS6eO9wT44=',
  'https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://th.bing.com/th/id/OIP.l9MV3oQFW5yvSSWyGzbD4AHaDi?rs=1&pid=ImgDetMain',
  'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.istockphoto.com/id/173194744/photo/close-up-of-a-heartbeat-on-a-machine.jpg?s=1024x1024&w=is&k=20&c=_zsgrJzOq-kYstc3DlRWaU15ftpe9vAk6YjJA1d-uhI=',
  'https://images.unsplash.com/photo-1643649819787-8433d30868ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.istockphoto.com/id/1337173750/photo/solar-and-wind-power.jpg?s=612x612&w=0&k=20&c=krNUQVFMq4DDPDvhKhW4SwL06NlmZ7dcHWWGDsxZzKI=',
  'https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1643649819787-8433d30868ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.istockphoto.com/id/1135885965/photo/thermoscan-industrial-equipment-used-for-checking-the-internal-temperature-of-the-machine-for.jpg?s=1024x1024&w=is&k=20&c=-UNNRcvTu0zZ6dqkE31PrC32wqD-ZW9tY48XvDKN55Y=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbp0Dxw3RTE6T4RMGdX3hX8ZmhDzCpTTJMJA&s',
  'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1690973692388-239878450c7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661960643553-ccfbf7d921f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://th.bing.com/th/id/OIP.l9MV3oQFW5yvSSWyGzbD4AHaDi?rs=1&pid=ImgDetMain',
  'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.istockphoto.com/id/173194744/photo/close-up-of-a-heartbeat-on-a-machine.jpg?s=1024x1024&w=is&k=20&c=_zsgrJzOq-kYstc3DlRWaU15ftpe9vAk6YjJA1d-uhI=',
  'https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1679917152396-4b18accacb9d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1643649819787-8433d30868ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.istockphoto.com/id/1135885965/photo/thermoscan-industrial-equipment-used-for-checking-the-internal-temperature-of-the-machine-for.jpg?s=1024x1024&w=is&k=20&c=-UNNRcvTu0zZ6dqkE31PrC32wqD-ZW9tY48XvDKN55Y=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbp0Dxw3RTE6T4RMGdX3hX8ZmhDzCpTTJMJA&s',
  'https://media.istockphoto.com/id/1337173750/photo/solar-and-wind-power.jpg?s=612x612&w=0&k=20&c=krNUQVFMq4DDPDvhKhW4SwL06NlmZ7dcHWWGDsxZzKI=',
  'https://plus.unsplash.com/premium_photo-1678889596384-6e317ec8bf97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function GridMotion({ autoSpeed = 1.5 }: Props) {

  const gradientColor = 'rgba(238, 255, 0, 0.3)';
  const heroTitle = "Arka Nexus";

  const gridRef = useRef(null);
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const autoAnimationsRef = useRef<(gsap.core.Tween | null)[]>([]);

  const totalItems = 28;
  const defaultItems = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);
  const combinedItems = GRID_ITEMS.length > 0 ? GRID_ITEMS.slice(0, totalItems) : defaultItems;

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
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center" ref={gridRef}>
      <section className="relative w-full h-full flex items-center justify-center overflow-hidden">

        {/* Background Video */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-[-1]">
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Gradient Overlay - Pulls from gradientColor prop */}
        <div
          className="absolute inset-0 w-[500%] h-full z-[1]"
          style={{ background: `radial-gradient(circle, ${gradientColor} 0%, rgba(0,0,0,0.7) 100%)` }}
        />

        {/* Hero content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-4/5 max-w-[800px] text-center text-white">
          <h1 className="animated-title text-[4rem] sm:text-[6rem] lg:text-[8rem] mb-4">
            <span className="word">{heroTitle.split(' ')[0]}</span>
            <span className="word pl-4 sm:pl-8">{heroTitle.split(' ')[1]}</span>
          </h1>
          <h5 className="eiei-text text-lg sm:text-2xl lg:text-[2rem] font-medium tracking-wider">
            Engineering Intelligence Empowering Industry
          </h5>
        </div>

        {/* Grid content - This will disappear after animation */}
        <div className="gridMotion-container relative z-[2] w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 gap-4 opacity-100 rotate-[-15deg] origin-center">
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className="row grid grid-cols-7 gap-4 will-change-transform" ref={(el) => { if (el) rowRefs.current[rowIndex] = el; }}>
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111]/60 backdrop-blur-[2px] flex items-center justify-center text-white text-2xl">
                      {typeof content === 'string' && content.startsWith('http') ? (
                        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${content})` }} />
                      ) : (
                        <div className="p-4 text-center z-[1]">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


