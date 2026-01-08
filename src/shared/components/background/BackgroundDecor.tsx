export default function BackgroundDecor() {
  return (
    <div className="animated-background">
          <div className="grid-lines"></div>
          <div className="particle" style={{ top: '15%', left: '15%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ top: '25%', left: '65%', width: '150px', height: '150px', animationDelay: '-3s' }}></div>
          <div className="particle" style={{ top: '60%', left: '25%', width: '180px', height: '180px', animationDelay: '-7s' }}></div>
          <div className="particle" style={{ top: '70%', left: '70%', width: '120px', height: '120px', animationDelay: '-12s' }}></div>
        </div>
  );
}
