import "./WhyChooseMe.scss";
import whyChooseMe from "../../data/whyChooseMe";
import NavButton from "../../components/NavButton/NavButton";

const WhyChooseMe = () => {
  const { photos, title, paragraphs } = whyChooseMe;

  return (
    <div
      className="why-choose-me container"
      aria-labelledby="why-choose-me-title"
    >
      <div className="why-choose-me__inner">
        <div className="why-choose-me__info">
          <h2 id="why-choose-me-title" className="why-choose-me__heading">
            {title}
          </h2>

          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className="why-choose-me__photo-wrapper">
          {photos.map(({ src, alt, width, height, loading }, index) => (
            <img
              key={index}
              className="why-choose-me__photo"
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={loading}
            />
          ))}
        </div>

        <NavButton className="button focus-visible" to="./portfolio">
          портфолио
        </NavButton>
      </div>
    </div>
  );
};

export default WhyChooseMe;
