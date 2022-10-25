import React from "react";
import { useLoaderData } from "react-router-dom";
import AboutLearn from "./AboutLearn";
import Hero from "./Hero";
import LetsTalk from "./LetsTalk";
import Primium from "./Primium";

const Home = () => {
  const courseCategory = useLoaderData();

  return (
    <div>
      <Hero />
      <Primium courses={courseCategory} />
      <AboutLearn />
      <LetsTalk />
    </div>
  );
};

export default Home;
