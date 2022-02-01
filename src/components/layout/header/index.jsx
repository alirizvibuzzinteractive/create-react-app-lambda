import React, { Component } from "react";
import "../../../assets/css/main_style.scss";
import { styled } from "@mui/material/styles";
import { Grid, Divider, Box } from "@mui/material";
import Tabs from "../../tabs";
import Switch from "../../switch";
import Search from "../../search";
import NameFilter from "../../nameFilter";
import ScheduleLayouts from "../../scheduleLayouts";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="headerBody centerY">
          <Box sx={{ flexGrow: 1, mx: 3 }}>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <div className="d-flex centerY">
                  <Tabs />
                  <Switch />
                </div>
              </Grid>
              <Grid item md={5} className="centerY">
                <Search />
              </Grid>
              <Grid
                item
                md={4}
                className="d-flex centerY"
                sx={{ justifyContent: "flex-end" }}
              >
                <div className="d-flex centerY">
                  <NameFilter />
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{ m: 1 }}
                  />
                  <ScheduleLayouts />
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default index;
