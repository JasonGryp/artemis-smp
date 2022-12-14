import {
  Avatar,
  Box,
  Grid,
  Link,
  Paper,
  SvgIcon,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ReactComponent as Tiktok } from "../resources/logos/tiktok.svg";
import { ReactComponent as Discord } from "../resources/logos/discord.svg";
import { ReactComponent as Linktree } from "../resources/logos/linktree.svg";
import { ReactComponent as Donation } from "../resources/logos/donation.svg";
import React from "react";
import { styled } from "@mui/material/styles";
import creatorConfig from "../config.json";

const IconMap = {
  Intagram: <InstagramIcon />,
  Youtube: <YouTubeIcon />,
  Tiktok: (
    <SvgIcon>
      <Tiktok />
    </SvgIcon>
  ),
  Linktree: (
    <SvgIcon>
      <Linktree />
    </SvgIcon>
  ),
  Donations: (
    <SvgIcon>
      <Donation />
    </SvgIcon>
  ),
  Discord: (
    <SvgIcon>
      <Discord />
    </SvgIcon>
  ),
  Twitter: <TwitterIcon />,
};

const FullPageBoxContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "100%",
  alignItems: "center",
  justifyContent: "space-evenly",
}));

const ContentColumn = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "70%",
  backgroundColor: theme.palette.grey[700],
  borderRadius: "5px",
  padding: "10px 20px ",
  marginTop: "20px",
  "&:last-child": { marginBottom: "20px" },
}));

const NameColumn = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: "20px;",
  textDecoration: "none",
  whiteSpace: "nowrap",
}));

const LinkCard = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
  whiteSpace: "nowrap",
  display: "flex",
  margin: "5px 0px",
}));

const ResponsiveAvatar = styled(Avatar)(({ theme }) => ({
  width: 70,
  height: 70,
}));
const ResponsiveAvatarContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    paddingBottom: "10px",
  },
}));
const ResponsiveLinksContainer = styled(Grid)(({ theme }) => ({
  alignItems: "flex-end",
  [theme.breakpoints.down("md")]: {
    borderTop: "1px solid white",
    marginTop: "20px",
    paddingTop: "10px",
    alignItems: "flex-start",
  },
}));

const PageBody = () => {
  return (
    <FullPageBoxContainer>
      {Object.values(creatorConfig.creators)
        .sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )
        .map((creator) => {
          return (
            <ContentColumn elevation={4} key={creator.name}>
              <Grid container>
                <ResponsiveAvatarContainer item xs={12} md={2}>
                  <ResponsiveAvatar alt={creator.name} src={creator.img} />
                </ResponsiveAvatarContainer>
                <Grid item flex={1} xs={12} md={8}>
                  <NameColumn href={creator.channel} target="_blank">
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ fontWeight: "bold", marginRight: "5px" }}
                    >
                      {creator.name}
                    </Typography>
                    <LaunchIcon />
                  </NameColumn>
                  <Typography
                    sx={{ color: "#aaaa", marginLeft: "5px" }}
                    variant="body1"
                    component="span"
                  >{`(${creator.pronouns})`}</Typography>
                  <Typography
                    sx={{
                      color: "white",
                      marginLeft: "5px",
                      marginTop: "10px",
                      fontSize: "14px",
                    }}
                    variant="body1"
                  >
                    {creator.about}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={2} alignItems="flex-end">
                  <ResponsiveLinksContainer
                    container
                    direction={"column"}
                    sx={{
                      height: "100%;",
                    }}
                  >
                    {creator.links.map((link, index) => {
                      return (
                        <Grid item key={index}>
                          <LinkCard href={link.url} target="_blank">
                            {IconMap[link.name]}
                            <Typography
                              sx={{ marginLeft: "5px" }}
                              variant="body1"
                              component="span"
                            >
                              {link.name}
                            </Typography>
                          </LinkCard>
                        </Grid>
                      );
                    })}
                  </ResponsiveLinksContainer>
                </Grid>
              </Grid>
            </ContentColumn>
          );
        })}
    </FullPageBoxContainer>
  );
};

export default PageBody;
