import usePageTitle from "../hooks/usePageTitle";
import Content from "../layouts/Content/Content.jsx";
import Header from "../layouts/Header/Header";
import Carousel from "../sections/Carousel/Carousel.jsx";
import PageWrapper from "../layouts/PageWrapper/PageWrapper.jsx";

const HomePage = () => {
  usePageTitle("Главная");

  return (
    // <PageWrapper>
    //   <Carousel />
    //   <Content />
    // </PageWrapper>
    <PageWrapper>
      <section className="fade-in">
        <Carousel />
      </section>

      <section className="fade-in">
        <Content />
      </section>
    </PageWrapper>
  );
};

export default HomePage;
