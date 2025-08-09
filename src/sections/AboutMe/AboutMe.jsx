import aboutMe from "../../data/aboutMe";
import "./AboutMe.scss";

const AboutMe = () => {
  const { photo, title, subtitle, paragraphs} = aboutMe;
 
  return (
  <section className="about-me container" aria-labelledby="about-me-title">
      <div className="about-me__inner">
        <div className="about-me__photo-wrapper">
          <img
            className="about-me__photo"
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading={photo.loading}
          />
        </div>

        <div className="about-me__info">
          <h1 id="about-me-title" className="about-me-title">
            {title}
          </h1>

          <h2 className="about-me__heading">{subtitle}</h2>

           {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  )
  }


export default AboutMe;
