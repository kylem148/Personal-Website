import Skills from "./Skills";

function AboutMe() {
  return (
    <div className="md:flex flex-col h-screen w-screen overflow-hidden p-20">
      <div className="flex-1 flex flex-row">
        <div className="flex flex-col flex-shrink basis-2/3 justify-center items-left flex-wrap">
          <h1 className="text-5xl font-bold pl-5 mb-5">About me</h1>
          <p className="text-[20px] p-5 text-left">
            I am a freshman at Cal Poly San Luis Obispo. Since starting my
            programming journey in game development, I have learned the
            importance of user experience. It is imperative that an application
            interface is appealing, a concept that guided my artistic and
            architectural design decisions. As I have progressed in data
            structures, algorithms, and system design I still prioritize
            maintaining ergonomic interfaces.
          </p>
        </div>
        <div className="flex-1 bg-amber-500">{/* Image Placeholder */}</div>
      </div>

      <div className="mt-10 pb-2">
        <Skills />
      </div>
    </div>
  );
}
export default AboutMe;
