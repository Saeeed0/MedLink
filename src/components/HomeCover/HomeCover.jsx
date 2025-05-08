import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
function HomeCover() {
  function importHomeCover(r) {
    return r.keys().map(r);
  }

  const homeCoverSlider = importHomeCover(
    require.context(
      "../../assets/images/homeSliders/homeCover",
      false,
      /\.(png|jpe?g)$/
    )
  );
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        style={{ height: "100vh" }}
      >
        {homeCoverSlider.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomeCover;
