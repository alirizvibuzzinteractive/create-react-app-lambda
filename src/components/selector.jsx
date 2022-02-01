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
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

export default function Selector(props) {
  const [scheduleLayout, setScheduleLayout] = React.useState(null);
  const [scheduleLayoutValue, setScheduleLayoutValue] =
    React.useState(props.options[0].text);

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
      <Button
        style={{
          textTransform: "capitalize",
          background: props.bgColor,
        }}
        id="scheduleLayout"
        aria-controls="scheduleLayout_menu"
        aria-haspopup="true"
        aria-expanded={openScheduleLayout ? "true" : undefined}
        onClick={(event, type) => handleClickNameFilter(event, "layout")}
      >
        <div style={{color:props.textColor,fontWeight:500}}>{props.children}</div>
      </Button>

      <Menu
        id="scheduleLayout_menu"
        anchorEl={scheduleLayout}
        open={openScheduleLayout}
        onClose={(type) => handleCloseNameFilter("layout")}
      >
        <MenuList dense sx={{ width: 180 }}>
          {props.options.map((data) => (

            <MenuItem onClick={() => {
                setScheduleLayoutValue(data.text);
                setTimeout(() => {
                    props.SelectedVal(data.text)
                }, 100);
                }}>
              {data.icon!=null?<img src={data.icon} style={{ marginRight: 5 }} />:null}
              <ListItemText>{data.text}</ListItemText>
              {scheduleLayoutValue == data.text ? (
                <ListItemIcon sx={{ marginLeft: 4, color: props.ticColor }}>
                  <Check />
                </ListItemIcon>
              ) : null}
            </MenuItem>

          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
