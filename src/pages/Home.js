import React from "react";
import { Box } from "@mui/system";
import HeroBanner from "../components/hero-banner/HeroBanner";
import SearchExercises from "../components/search-exercises/SearchExercises";
import Exercises from "../components/exercises/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
