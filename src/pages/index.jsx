import { Soup } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Navbar from "../components/navbar";
import Button from "../components/button";
import HeaderSection from "../layouts/headerSection";
import ItemCard from "../components/itemCard";
import ProductCard from "../components/productCard";
import Review from "../components/review";
import Footer from "../layouts/footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="px-5 mb-26 mt-16 sm:px-16 lg:px-32 xl:px-52">
        <section>
          <div className="md:flex md:flex-row-reverse md:justify-center md:items-center md:gap-32">
            <div className="">
              <p className="text-base font-semibold">Healty & Tasty</p>
              <h1 className="text-4xl font-bold text-orange-500">
                Food made
                <br></br>
                with love!
              </h1>
              <p className="text-sm font-normal text-black/50 mt-7 mb-10 max-w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button
                onClick={() =>
                  (window.location.href = "https://wa.me/6285936391713")
                }
              >
                Book a Table
              </Button>
            </div>
            <img src="/Vector.png" alt="" className="mt-10 md:h-80" />
          </div>
        </section>
        <section id="services" className="mt-26">
          <HeaderSection
            title="The healthiest way to start your day."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="flex flex-col gap-10 mt-12 md:flex-row">
            <ItemCard
              icon={<Soup size={50} className="text-orange-500" />}
              name="Healty and Tasty Food"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ItemCard
              icon={<Soup size={50} className="text-orange-500" />}
              name="Healty and Tasty Food"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ItemCard
              icon={<Soup size={50} className="text-orange-500" />}
              name="Healty and Tasty Food"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </section>
        <section
          id="about"
          className="flex flex-col justify-center items-center mt-26 md:flex-row md:justify-center md:items-center md:gap-32"
        >
          <img src="/Vector.png" alt="" className="h-60 w-60" />
          <div className="mt-10 md:max-w-70">
            <h2 className="text-3xl font-bold text-orange-500">
              Find the best healty food from us
            </h2>
            <p className="text-sm font-normal text-black/50 mt-7 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm font-normal text-black/50 mt-10 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button>Book a Table</Button>
          </div>
        </section>
        <section id="menu" className="mt-26">
          <HeaderSection
            title="Top item's we have"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <div className="flex gap-10 overflow-scroll mt-12">
            <ProductCard
              name="Vibrant noodle bowl"
              description="Lorem ipsum dolor sit amet, consectetur"
              price={100}
              link=""
              image="/Vibrant-Noodle-Bowl.png"
            />
            <ProductCard
              name="Vibrant noodle bowl"
              description="Lorem ipsum dolor sit amet, consectetur"
              price={100}
              link=""
              image="/Vibrant-Noodle-Bowl.png"
            />
            <ProductCard
              name="Vibrant noodle bowl"
              description="Lorem ipsum dolor sit amet, consectetur"
              price={100}
              link=""
              image="/Vibrant-Noodle-Bowl.png"
            />
            <ProductCard
              name="Vibrant noodle bowl"
              description="Lorem ipsum dolor sit amet, consectetur"
              price={100}
              link=""
              image="/Vibrant-Noodle-Bowl.png"
            />
          </div>
        </section>
        <section id="reviews" className="mt-26 mb-26">
          <HeaderSection
            className="flex flex-col justify-center items-center"
            title="Our Customers"
            description="Lorem ipsum dolor sit amet, consectetur"
          />
          <div className="mt-12">
            <Swiper
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              centeredSlides={true}
              modules={[Autoplay]}
            >
              <SwiperSlide className="flex justify-center">
                <Review
                  name="Lorem ipsum"
                  prophecy="Student"
                  content="Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur"
                  image="/Vector.png"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <Review
                  name="Lorem ipsum"
                  prophecy="Student"
                  content="Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur"
                  image="/Vector.png"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <Review
                  name="Lorem ipsum"
                  prophecy="Student"
                  content="Lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, consectetur"
                  image="/Vector.png"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
