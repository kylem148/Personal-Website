import Skills from "./Skills";

function AboutMe() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden mt-20">
      <div className="flex-1 flex">
        <div className="flex flex-col flex-1 justify-center items-center flex-wrap text-center">
          <h1 className="text-3xl font-bold mb-5">About me</h1>
          <p className="text-[20px] p-1 text-center">
            I am a freshamn at Cal Poly who builds online things
          </p>
        </div>
        <div className=" flex-1 flex items-center justify-center">
          <img
            className="aspect-auto p-3 rounded-2xl"
            src="./IDPhoto.png"
            alt="Picture of Kyle Morgan"
          />
        </div>
      </div>
      <div className="flex-1 mt-10">Skills</div>
    </div>
  );
}
export default AboutMe;
