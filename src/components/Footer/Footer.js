import {
  Box,
  Divider,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useStyles from "./styles";

function Footer() {
  const { t } = useTranslation();
  const classes = useStyles();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const redirectHandler = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleButtonClick = () => {  
    try {  
      window.scrollTo({ top: 0, behavior: 'smooth' });  
    } catch (error) {  
      console.error("Smooth scroll failed", error);  
      // Fallback to instant scroll  
      window.scrollTo(0, 0);  
    }  
  };  


  return (
    <Grid container alignItems="center">
      <Grid
        item
        xs={12}
        md={2.5}
        align="center"
        style={{ padding: small ? "3rem" : 0 }}
      >
      </Grid>
      <Grid item xs={12} md={6.5} align="center">
        <Box style={{ margin: small ? "2rem 0rem 4rem 0rem" : 0 }}>

          <Divider
            style={{
              width: "70%",
              marginTop: 30,
              display: small ? "none" : "block",
            }}
          /> </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        align="center"
        style={{ margin: small ? "0rem 0rem 4rem 0rem" : 0 }}
      >
        <Divider
          style={{
            width: "70%",
            marginTop: 30,
            display: small ? "block" : "none",
          }}
        />

      </Grid>
    </Grid>
  );
}

export default Footer;
