import React, { Suspense } from "react";
import { topFood } from "./TopSellingData";
import TopSellingFood from "./TopSellingFood";
import { FaMedal } from "react-icons/fa";
import Spinner from "../../Components/Spinner/Spinner";
import IngredientsSection from "./Ingreadients";

const Home = () => {
  const topSellingFoodData = topFood();

  return (
    <div className="space-y-16 px-4 py-10 xl:max-w-8xl lg:max-w-7xl mx-auto">
      <div className=" lg:min-h-screen min-h-[50vh] md:min-h-[70vh]">
        <Suspense fallback={<Spinner></Spinner>}>
          <TopSellingFood topSellingFoodData={topSellingFoodData} />
        </Suspense>
      </div>

      <IngredientsSection></IngredientsSection>

      <section className="bg-base-200 p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl flex items-center justify-center font-bold text-[rgb(231,113,97)] mb-4">
          <FaMedal /> Our Best Achievement
        </h2>
        <p className="text-center text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          We are honored to receive the{" "}
          <span className="font-semibold">Food Hygiene Award</span> for
          maintaining the highest level of cleanliness and care. Our stunning
          ambiance attracts food lovers from everywhere, offering an escape from
          monotony with cozy vibes and mouth-watering dishes.
        </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
  <img
    src="https://i.ibb.co/pv0zmXj8/Food-Menu.jpg"
    alt="Menu"
    className="rounded-xl shadow-lg hover:scale-105 transition duration-300 w-full h-48 object-cover"
  />
  <img
    src="https://i.ibb.co/ns7FTnyW/Caldo-Verde-jpg-optimal.jpg"
    alt="Caldo Verde"
    className="rounded-xl shadow-lg hover:scale-105 transition duration-300 w-full h-48 object-cover"
  />
  <img
    src="https://i.ibb.co/fYMqgMTm/Bolinhos-de-Bacalhau-jpg-optimal.jpg"
    alt="Bolinhos"
    className="rounded-xl shadow-lg hover:scale-105 transition duration-300 w-full h-48 object-cover"
  />
  <img
    src="https://i.ibb.co/zVsvTq29/Arroz-De-Mariscos-Portugal-Food-jpg-optimal.jpg"
    alt="Arroz"
    className="rounded-xl shadow-lg hover:scale-105 transition duration-300 w-full h-48 object-cover"
  />
</div>

      </section>

      <section className="bg-[rgb(249,237,216)] dark:text-white p-10 rounded-2xl shadow-xl  text-center">
        <h2 className="text-4xl font-bold mb-4">
          📬 Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Get updates on our latest dishes, food hygiene tips, special events,
          and much more. Stay connected with us!
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-96 dark:text-white text-black"
            required
          />
          <button
            type="submit"
            className="btn bg-[rgb(255,141,107)] text-white "
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
