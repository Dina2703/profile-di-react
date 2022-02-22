import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, IconButton, Link } from "@material-ui/core";

const socialItems = [
  { icon: GitHubIcon, id: 1, url: "https://github.com/Dina2703" },
  {
    icon: InstagramIcon,
    id: 2,
    url: "https://www.instagram.com/dinara.idrissova.1",
  },
  {
    icon: FacebookIcon,
    id: 3,
    url: "https://www.facebook.com/dinara.idrissova.1",
  },
  { icon: LinkedInIcon, id: 4, url: "/" },
];

function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={2}>
      {socialItems.map((item) => (
        <Grid item key={item.id}>
          <Link href={item.url} rel="noopener noreferrer" target="_blank">
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default Social;
