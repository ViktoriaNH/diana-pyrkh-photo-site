import usePageTitle from "../hooks/usePageTitle";
import Header from "../layouts/Header/Header";

const HomePage = () => {
  usePageTitle("Главная");

  return <Header />;
};

export default HomePage;
