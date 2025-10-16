import Marquee from "./Marquee";

function Skills() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen overflow-hidden">
        
        <h1 className="flex-1 mt-9 mb-10 font-bold size-5xl">Skills</h1>
        <div className="flex-1 h-20 overflow-hidden">
          <Marquee />
        </div>
          
      </div>
    </>
  );
}

export default Skills;
