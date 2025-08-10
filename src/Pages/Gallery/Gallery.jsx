import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const imageLinks = [
    "https://i.ibb.co/jk8b0mgS/Bifana-jpg-optimal.jpg",
    "https://i.ibb.co/sJ2yBL4c/Monkfish-Cataplana-jpg-optimal.jpg",
    "https://i.ibb.co/BVgKzMyH/Camarao-so-Alho-Shrimp-jpg-optimal.jpg",
    "https://i.ibb.co/zVsvTq29/Arroz-De-Mariscos-Portugal-Food-jpg-optimal.jpg",
    "https://i.ibb.co/23K5DQzm/Sardines-and-Corn-Bread-jpg-optimal.jpg",
    "https://i.ibb.co/60ftFWHJ/Miss-Can-Lisbon-jpg-optimal.jpg",
    "https://i.ibb.co/ns7FTnyW/Caldo-Verde-jpg-optimal.jpg",
    "https://i.ibb.co/WptmF9Xs/Grilled-Sardines-Portugal-jpg-optimal.jpg",
    "https://i.ibb.co/s93FR0x7/Octopus-Polvo-jpg-optimal.jpg",
    "https://i.ibb.co/kVyrSWng/Foods-to-Eat-in-Portugal-Photo-jpg-optimal.jpg",
  ];

  const slides = imageLinks.map((link) => ({ src: link }));

  return (
    <div className="min-h-screen md:mt-36 space-y-8 md:space-y-16 bg-cover bg-center flex flex-col items-center justify-center px-4 py-10" style={{ backgroundImage: 'url(https://i.ibb.co/C3tpCmcN/pexels-pixabay-262978.jpg)' }}>
      <h1 className="text-4xl md:text-5xl font-bold text-white bg-black bg-opacity-60 p-6 rounded-xl mb-10 text-center shadow-lg">
        Delicious Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl">
        {imageLinks.map((link, index) => (
          <img
            key={index}
            src={link}
            alt={`Image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg cursor-pointer  shadow-md"
            onClick={() => {
              setSelectedIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={selectedIndex}
        on={{
          view: ({ index }) => setSelectedIndex(index),
        }}
      />
    </div>
  );
};

export default Gallery;
