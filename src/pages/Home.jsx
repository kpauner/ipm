import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import fetchFromApi from "../lib/fetchFromApi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.5 } },
};

function Home() {
  const [categories, setCategories] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          "https://api.spotify.com/v1/browse/categories?country=DK&offset=0&limit=20"
        );
        if (data) {
          setCategories(data.categories.items);

          setKey((prevKey) => prevKey + 1);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  return (
    <>
      <section>
        <motion.div
          key={key}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item}>
              {category.name}
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

export default Home;
