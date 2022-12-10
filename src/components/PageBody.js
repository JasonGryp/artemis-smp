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

const FullPageBoxContainer = styled(Box)(({ theme }) => ({
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
                <Grid item sm={1}>
                  <Avatar
                    alt={creator.name}
                    src={creator.img}
                    sx={{ width: 70, height: 70 }}
                  />
                </Grid>
                <Grid item flex={1} sm={8}>
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
                <Grid item sm={3} alignItems="flex-end">
                  <Grid
                    container
                    direction={"column"}
                    sx={{
                      height: "100%;",
                      alignContent: "flex-end",
                      justifyContent: "center",
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
                  </Grid>
                </Grid>
              </Grid>
            </ContentColumn>
          );
        })}
    </FullPageBoxContainer>
  );
};

export default PageBody;
