import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="none"
      px="20px"
      alignItems="center"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      </Link>
      <Stack
        direction="row"
        px={20}
        gap="40px"
        fontSize="25px"
        alignItems="flex-end"
        justifyContent="space-aroud"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "3a1212",
            borderBottom: "2px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "3a1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
