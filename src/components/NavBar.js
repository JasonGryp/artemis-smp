import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import VHLogo from "../resources/VHimages/logo.png";
import vaultPortalTexture from "../resources/VHimages/vault-portal.webp";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              position: "absolute",
              left: 25,
            }}
          >
            ArtemisSMP
          </Typography>
          <VHLogoBoxContainer
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <VHLogoBox component="img" alt="" src={VHLogo} />
          </VHLogoBoxContainer>
          <Box sx={{}} />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

const StyledAppBar = styled(AppBar)(() => ({
  background: `url(${vaultPortalTexture})`,
  backgroundSize: "5em",
  imageRendering: "crisp-edges",
  borderImageSlice: 16,
}));

const VHLogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: 40,
    width: 191,
  },
  [theme.breakpoints.up("md")]: {
    height: 60,
    width: 287,
  },
}));

const VHLogoBoxContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
}));

export default NavBar;
