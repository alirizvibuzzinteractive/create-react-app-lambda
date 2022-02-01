import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import colors from "../assets/css/main_style.scss";
import schedule_layouts from "../assets/image/schedule_layouts.svg";
import compact from "../assets/image/compact.svg";
import comfortable from "../assets/image/comfortable.svg";
import spacious from "../assets/image/spacious.svg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Box, FormControl, Input } from "@mui/material";

export default function Search() {
  const [scheduleLayout, setScheduleLayout] = React.useState(null);
  const [scheduleLayoutValue, setScheduleLayoutValue] =
    React.useState("Compact");

  const [exportPrint, setExportPrint] = React.useState(null);
  const [exportPrintValue, setExportPrintValue] = React.useState(null);

  const [schedule, setSchedule] = React.useState(null);
  const [scheduleValue, setScheduleValue] = React.useState("Schedule Task");

  const openScheduleLayout = Boolean(scheduleLayout);
  const openExportPrint = Boolean(exportPrint);
  const openSchedule = Boolean(schedule);

  const handleClickNameFilter = (event, type) => {
    switch (type) {
      case "layout":
        setScheduleLayout(event.currentTarget);
        break;
      case "export":
        setExportPrint(event.currentTarget);
        break;
      case "schedule":
        setSchedule(event.currentTarget);
        break;

      default:
        break;
    }
  };
  const handleCloseNameFilter = (type) => {
    switch (type) {
      case "layout":
        setScheduleLayout(null);
        break;
      case "export":
        setExportPrint(null);
        break;
      case "schedule":
        setSchedule(null);
        break;

      default:
        break;
    }
  };

  return (
    <div className="centerY">
      <ButtonGroup
        size="small"
        variant="text"
        style={{
          boxShadow: "none",
        }}
      >
        <Button
          style={{
            textTransform: "capitalize",
            borderColor: colors.white,
            color: colors.darkGray,
          }}
          id="scheduleLayout"
          aria-controls="scheduleLayout_menu"
          aria-haspopup="true"
          aria-expanded={openScheduleLayout ? "true" : undefined}
          onClick={(event, type) => handleClickNameFilter(event, "layout")}
        >
          <SearchRoundedIcon />
          Search
        </Button>
      </ButtonGroup>

      <Menu
        id="scheduleLayout_menu"
        anchorEl={scheduleLayout}
        open={openScheduleLayout}
        onClose={(type) => handleCloseNameFilter("layout")}
      >
        <MenuList dense sx={{ width: 400 }}>
          <MenuItem>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <Input
                fullWidth
                size="small"
                id="standard-adornment-amount"
                placeholder="Search"
                value=""
                focused
                
              />
            </FormControl>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
