import "./AboutMe.scss";
const AboutMe = () => {
  return (
    <section className="about-me container" aria-labelledby="about-me-title">
      <div className="about-me__inner">
        <div className="about-me__photo-wrapper"> 
              <img
          className="about-me__photo"
          alt="Портрет Дианы Пырх"
          src="/home-page/main-photo.webp"
          width={1400}
          height={1100}
          loading="lazy"
        />

        </div>
    

        <div className="about-me__info">
          <h1 className="about-me-title">
            Диана Пырх - фотограф <br /> в Минске и Светлогоске
          </h1>
          <h2 className="about-me__heading">Mоя история в фотографии </h2>
          <p>
            Всё началось с репортажной съёмки в мире журналистики — динамичной,
            яркой. Но со временем я поняла: мне хочется большего. Больше тепла,
            больше искренности, больше глубины в общении с людьми. Так я открыла
            для себя портретную фотографию, а затем и другие виды съемок.
            <p>
              Сегодня за моими плечами — более 7 лет в мире фотографии, и я
              по-прежнему влюблена в своё дело. В людей, в эмоции, в те
              неповторимые моменты, которые мы создаём вместе.{" "}
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
