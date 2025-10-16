import Skills from "./Skills";

function AboutMe() {
  return (
    <>
      <div className="h-screen flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="relative flex  items-center justify-center">
            <div className="text-2xl flex flex-col items-start justify-center mr-10">
              <h2 className="font-bold pb-6">This is the about me section</h2>
              <p>I am doing this and this and this</p>
            </div>
            <img
              className="block w-[40vw] h-[40vw]"
              src="./IDPhoto.png"
              alt="Picture of Kyle Morgan"
            />
          </div>

          <Skills />
        </div>
      </div>
    </>
  );
}
export default AboutMe;
