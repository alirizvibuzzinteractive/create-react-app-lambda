import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
  const [value, setValue] = React.useState("people");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        TabIndicatorProps={{
          style: {
            backgroundColor: "#e95f4b",
          },
        }}
        value={value}
        onChange={handleChange}
        textColor="red"
        aria-label="people project tabs"
      >
        <Tab
          style={{
            color: `${value == "people" ? "#e95f4b" : "#929196"}`,
            fontWeight: "bold",
            textTransform:'capitalize'
          }}
          value="people"
          label="12 People"
        />
        <Tab
          style={{
            color: `${value == "projects" ? "#e95f4b" : "#929196"}`,
            fontWeight: "bold",
            textTransform:'capitalize'
          }}
          value="projects"
          label="45 Projects"
        />
      </Tabs>
    </Box>
  );
}
