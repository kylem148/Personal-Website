import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Experince from "./Experience";
import Header from "./Header";
import Footer from "./Footer";

const CorePage = () => {
  return (
    <div className="text-amber-50 bg-neutral-800">
      <Header />
      <Experince />
      <Footer />
    </div>
  );
};

export default CorePage;
