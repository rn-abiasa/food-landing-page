import { Soup } from "lucide-react";

import Navbar from "../components/navbar";
import Button from "../components/button";
import HeaderSection from "../layouts/headerSection";
import ItemCard from "../components/itemCard";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="px-5">
        <section>
          <div>
            <div>
              <p className="text-base font-semibold">Healty & Tasty</p>
              <h1 className="text-4xl font-bold text-orange-500">
                Food made
                <br></br>
                with love!
              </h1>
              <p className="text-sm font-normal text-black/50 mt-7 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Button>Book a Table</Button>
            </div>
            <img src="/Vector.png" alt="" className="mt-10" />
          </div>
        </section>
        <section className="mt-26">
          <HeaderSection
            title="The healthiest way to start your day."
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <div className="flex flex-col gap-10 mt-16">
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
      </main>
    </>
  );
};

export default Index;
