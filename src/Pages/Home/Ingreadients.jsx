import { useNavigate } from "react-router";

export default function IngredientsSection() {
  const navigate = useNavigate();
  return (
    <section className="py-16 rounded-2xl bg-base-100 text-base-content text-base transition-colors duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12">

        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="uppercase bg-base-100 text-sm tracking-widest">{/* No explicit colors */}Tasty and Crunchy</p>
          <h2 className="text-4xl font-bold tracking-wide mt-2">{/* No explicit colors */}Ingredients</h2>
          <p className="mt-4 leading-relaxed">{/* No explicit colors */}
            We use all-natural, hygienic ingredients like turmeric, paper chili, and other pure spices, ensuring fresh, authentic flavors with the highest quality and safety for a wholesome culinary experience.
          </p>
          <button
            onClick={() => navigate('/all-foods')}
            className="mt-8 border border-current px-6 py-3 text-sm font-semibold tracking-wide hover:bg-opacity-10 transition-colors duration-300"
          >
            View Our Menu
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center space-x-8 bg-base-200 p-4 rounded-lg transition-colors duration-500">
          <img
            src="https://i.ibb.co.com/C3X5RnPr/home1-main-image-4.jpg"
            alt="Savorly Ingredients"
            className="object-cover shadow-lg rounded max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
