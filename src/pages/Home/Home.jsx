import Booking from "../../components/Booking/Booking";
import HomeCover from "../../components/HomeCover/HomeCover";

function Home() {
  return (
    <main className="position-relative">
      {/* Content over slider */}
      <header
        className="container vh-100 px-5 start-50 translate-middle-x position-absolute"
        style={{ zIndex: 20 }}
      >
        <section className="pt-5">
          <h1 className="text-muted fw-bolder mt-5 pt-3 px-3">
            Better Healthcare for a Better Life
          </h1>
          <h2 className="text-muted px-3">
            Book online or call <a href="tel:16676">16676</a>
          </h2>
        </section>

        {/* Booking Section */}
        <Booking />
      </header>

      {/* Background Slider */}
      <HomeCover />
    </main>
  );
}

export default Home;
