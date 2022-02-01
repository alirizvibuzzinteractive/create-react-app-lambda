import React, { Component } from "react";
import { Box, Typography, Slide, Grid, Divider, Button } from "@mui/material";
import Girl1 from "../assets/image/girl1.png";
import colors from "../assets/css/main_style.scss";

export default function SidebarBox(props) {
  return (
    <Box className="sliderBox">
      <Grid container>
        <Grid item xs="2">
          <Box className="profileImage">
            <img src={props.image} />
          </Box>
        </Grid>
        <Grid
          item
          xs="10"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Box className="profileName">{props.name}</Box>
            <Box className="profileDesignation">{props.subDesignation}</Box>
            <Box className="profileDesignation">{props.designation}</Box>
          </Box>

          <Box
            item
            xs={5}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: "27px",
            }}
          >
            <Box
              className="rounded"
              size="small"
              sx={{
                backgroundColor: colors.lighGreen,
                color: colors.secondary,
                mr: 1,
                px: 1,
                pt: 0.5,
                textTransform: "lowercase",
              }}
            >
              {props.hours}
            </Box>
            <Box
              className="rounded"
              size="small"
              sx={{
                backgroundColor: colors.lightGray,
                color: colors.darkGray,
                textTransform: "lowercase",
                px: 1,
                pt: 0.5,
              }}
            >
              {props.hours}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        item
        xs={5}
        sx={{
          display: "flex",
          height: "27px",
          mt: 4,
        }}
      >
        <Box
          className="rounded"
          size="small"
          sx={{
            backgroundColor: colors.lighGreen,
            color: colors.secondary,
            mr: 1,
            px: 1,
            pt: 0.7,
            fontSize: 12,
            textTransform: "capitalize",
          }}
        >
          {props.hours}
        </Box>
        <Box
          className="rounded"
          size="small"
          sx={{
            backgroundColor: colors.lightGray,
            color: colors.darkGray,
            textTransform: "capitalize",
            px: 1,
            pt: 0.7,
            fontSize: 12,
          }}
        >
          {props.designation}
        </Box>
      </Box>
    </Box>
  );
}
