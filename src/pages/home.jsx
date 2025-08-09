import usePageTitle from "../hooks/usePageTitle";
import Header from "../layouts/Header/Header";
import AboutMe from "../sections/AboutMe/index.js";
import Carousel from "../sections/Carousel/Carousel.jsx";

const HomePage = () => {
  usePageTitle("Главная");

  return (
    <>
      <Header />
      <Carousel />
      <AboutMe />
    </>
  );
};

export default HomePage;
