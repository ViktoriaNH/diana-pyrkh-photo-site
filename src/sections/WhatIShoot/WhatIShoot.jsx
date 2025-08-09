import NavButton from '../../components/NavButton/NavButton'
import whatIShoot from "../../data/whatIShoot";
import "./WhatIShoot.scss";

const WhatIShoot = () => {
  const { photo, title, paragraphs } = whatIShoot;

  return (
    <div
      className="what-i-shoot container"
      aria-labelledby="what-i-shoot-title"
    >
      <div className="what-i-shoot__inner">
        <div className="what-i-shoot__info">
          <h2 id="what-i-shoot-title" className="what-i-shoot__heading">{title}</h2>

          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}

          <NavButton className="button focus-visible" to="./services">
            услуги
          </NavButton>
        </div>

        <div className="what-i-shoot__photo-wrapper">
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading={photo.loading}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIShoot;
