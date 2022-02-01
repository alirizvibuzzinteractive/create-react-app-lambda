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
import exportPrintIcon from "../assets/image/export.svg";
import plus from "../assets/image/plus.svg";
import compact from "../assets/image/compact.svg";
import comfortable from "../assets/image/comfortable.svg";
import spacious from "../assets/image/spacious.svg";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

export default function ScheduleLayouts() {
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
    <div>
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
          }}
          id="scheduleLayout"
          aria-controls="scheduleLayout_menu"
          aria-haspopup="true"
          aria-expanded={openScheduleLayout ? "true" : undefined}
          onClick={(event, type) => handleClickNameFilter(event, "layout")}
        >
          <img src={schedule_layouts} />
        </Button>
        <Button
          style={{
            textTransform: "capitalize",
            borderColor: colors.white,
          }}
          id="export_button"
          aria-controls="export_menu"
          aria-haspopup="true"
          aria-expanded={openExportPrint ? "true" : undefined}
          onClick={(event, type) => handleClickNameFilter(event, "export")}
        >
          <img src={exportPrintIcon} />
        </Button>
        <Button
          style={{
            textTransform: "capitalize",
            borderColor: colors.white,
            background: colors.lighGreen,
            height: "30px",
            width: "30px",
            borderRadius: "5px"
          }}
          id="schedule_button"
          aria-controls="schedule_menu"
          aria-haspopup="true"
          aria-expanded={openSchedule ? "true" : undefined}
          onClick={(event, type) => handleClickNameFilter(event, "schedule")}
        >
          <img src={plus} />
        </Button>
      </ButtonGroup>

      <Menu
        id="scheduleLayout_menu"
        anchorEl={scheduleLayout}
        open={openScheduleLayout}
        onClose={(type) => handleCloseNameFilter("layout")}
      >
        <MenuList dense sx={{ width: 180 }}>
          <MenuItem onClick={() => setScheduleLayoutValue("Compact")}>
            <img src={compact} style={{ marginRight: 5 }} />
            <ListItemText>Compact</ListItemText>
            {scheduleLayoutValue == "Compact" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
          <MenuItem onClick={() => setScheduleLayoutValue("Comfortable")}>
            <img src={comfortable} style={{ marginRight: 5 }} />
            <ListItemText>Comfortable</ListItemText>
            {scheduleLayoutValue == "Comfortable" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
          <MenuItem onClick={() => setScheduleLayoutValue("Spacious")}>
            <img src={spacious} style={{ marginRight: 5 }} />
            <ListItemText>Spacious</ListItemText>
            {scheduleLayoutValue == "Spacious" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu
        id="export_menu"
        anchorEl={exportPrint}
        open={openExportPrint}
        onClose={(type) => handleCloseNameFilter("export")}
      >
        <MenuList dense sx={{ width: 180 }}>
          <MenuItem onClick={() => setExportPrintValue("Export (CSV)")}>
            <ListItemText>Export (CSV)</ListItemText>
            {exportPrintValue == "Export (CSV)" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
          <MenuItem onClick={() => setExportPrintValue("Print")}>
            <ListItemText>Print</ListItemText>
            {exportPrintValue == "Print" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu
        id="schedule_menu"
        anchorEl={schedule}
        open={openSchedule}
        onClose={(type) => handleCloseNameFilter("schedule")}
      >
        <MenuList dense sx={{ width: 200,mx:1 }}>
          <MenuItem style={{background: scheduleValue=="Schedule Task"?colors.lighGreen:colors.white}} onClick={() => setScheduleValue("Schedule Task")}>
            <GridViewRoundedIcon style={{ marginRight: 5 }} sx={{color: scheduleValue=="Schedule Task"?colors.secondary:colors.darkGray}}/>
            <ListItemText sx={{color: scheduleValue=="Schedule Task"?colors.secondary:colors.darkGray}}>Schedule Task</ListItemText>
            <ListItemIcon sx={{ marginLeft: 4, color: scheduleValue=="Schedule Task"?colors.secondary:colors.darkGray }}>T</ListItemIcon>
          </MenuItem>
          <MenuItem style={{background: scheduleValue=="Log Time"?colors.lighGreen:colors.white}} onClick={() => setScheduleValue("Log Time")}>
            <AccessAlarmsIcon style={{ marginRight: 5 }} sx={{color: scheduleValue=="Log Time"?colors.secondary:colors.darkGray}}/>
            <ListItemText sx={{color: scheduleValue=="Log Time"?colors.secondary:colors.darkGray}}>Log Time</ListItemText>
            <ListItemIcon sx={{ marginLeft: 4, color: scheduleValue=="Log Time"?colors.secondary:colors.darkGray }}>G</ListItemIcon>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
