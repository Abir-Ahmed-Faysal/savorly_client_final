import { useNavigate } from "react-router";

export default function IngredientsSection() {
  const navigate=useNavigate()
  return (
    <section className=" py-16 rounded-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12">
        
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Tasty and Crunchy
          </p>
          <h2 className="text-4xl font-bold tracking-wide text-gray-900 mt-2">
            Ingredients
          </h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
           We use all-natural, hygienic ingredients like turmeric, paper chili, and other pure spices, ensuring fresh, authentic flavors with the highest quality and safety for a wholesome culinary experience.
          </p>
          <button onClick={()=>navigate('/all-foods')} className="mt-8 bg-white border border-gray-300 px-6 py-3 text-sm font-semibold tracking-wide hover:bg-gray-50">
            View Our Menu
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center space-x-8">
          <img
            src="https://i.ibb.co.com/C3X5RnPr/home1-main-image-4.jpg"
            alt="Savorly Ingredients"
            className=" object-cover  shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
