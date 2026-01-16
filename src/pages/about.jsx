import Navbar from "../components/navbar";
import Footer from "../layouts/footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="px-5 mb-26 mt-16 sm:px-16 lg:px-32 xl:px-52">
        <section className="h-screen">
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
              <p className="text-sm font-normal text-black/50 mt-10 mb-10 max-w-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <img src="/Vector.png" alt="" className="mt-10 md:h-80" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
