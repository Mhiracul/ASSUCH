import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Room from "../components/Room";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Room />
      <Footer />
    </div>
  );
};

export default Home;
