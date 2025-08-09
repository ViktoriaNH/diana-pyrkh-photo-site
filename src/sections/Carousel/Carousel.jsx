import "swiper/css"; // базовые стили
import "swiper/css/navigation"; // если нужна навигация
import "swiper/css/pagination"; // если нужна пагинация

import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.scss";
import photoCarousel from "../../data/photoCarousel";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <aside className="carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        speed={500}
        autoplay={{
          delay: 3000, // задержка между переключениями в миллисекундах (3000ms = 3 секунды)
          disableOnInteraction: false, // автоплей не отключается после взаимодействия пользователя
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            navigation: { enabled: false },
          },
          435: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          767: {
            navigation: { enabled: true },
          },
          1024: {
            // при ширине окна >= 1024px
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1480: {
            slidesPerView: 5,
          },
        }}
      >
        {photoCarousel.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <img
              src={src}
              alt={alt || `Photo ${id}`}
              className="carousel__image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </aside>
  );
};

export default Carousel;
