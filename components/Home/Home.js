import React from "react";

// components
import Hero from "components/Hero/Hero";
import Values from "components/Values/Values";
import Feauters from "components/Feauters/Feauters";
import Culture from "components/Culture/Culture";

const Home = () => {
  return (
    <div>
      <Hero />
      <Values />
      <Feauters />
      <Culture />
    </div>
  );
};

export default Home;
