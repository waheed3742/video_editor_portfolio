import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Testmonials from "./components/Testimonials";
import Tools from "./components/Tools";

const App = () => {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Header />
      <About />
      <Portfolio />
      <Tools />
      <Testmonials />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
