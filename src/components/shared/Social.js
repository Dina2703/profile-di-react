import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Grid, IconButton, Link } from "@material-ui/core";

const socialItems = [
  { icon: GitHubIcon, url: "https://github.com/Dina2703" },
  { icon: InstagramIcon, url: "https://www.instagram.com/dinara.idrissova.1" },
  { icon: FacebookIcon, url: "https://www.facebook.com/dinara.idrissova.1" },
  { icon: LinkedInIcon, url: "/" },
];

function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={2}>
      {socialItems.map((item) => (
        <Grid item key={item.icon}>
          <Link href={item.url}>
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
