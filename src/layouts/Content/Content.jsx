import AboutMe from "../../sections/AboutMe";
import WhatIShoot from "../../sections/WhatIShoot/WhatIShoot";

import WhyChooseMe from "../../sections/WhyChooseMe/WhyChooseMe";

import "./Content.scss";

const Content = () => {
  return (
    <main className="content">
      <AboutMe />
      <WhatIShoot />
      <WhyChooseMe />
    </main>
  );
};

export default Content;
