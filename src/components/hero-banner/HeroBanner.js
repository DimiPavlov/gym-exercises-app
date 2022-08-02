import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BannerImage from "../../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight={600} fontSize="24px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
        mb="23px"
        mt="30px"
      >
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={8}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
      <img src={BannerImage} alt="banner" className="hero-banner-img" />
      <Typography
        color="#ff2625"
        fontSize="200px"
        fontWeight={600}
        sx={{
          xs: {
            display: "none",
          },
          lg: {
            display: "block",
          },
          opacity: 0.1,
        }}
      >
        Exercises
      </Typography>
    </Box>
  );
};

export default HeroBanner;
