import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import sort from "../assets/image/sort_arrow.svg";
import colors from "../assets/css/main_style.scss";

export default function NameFilter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [nameFilter, setNameFilter] = React.useState(null);
  const [filter, setFilter] = React.useState("name");
  const [alphaFilter, setAlphaFilter] = React.useState("A-Z");
  const open = Boolean(anchorEl);
  const openNameFilter = Boolean(nameFilter);

//THIS FOR NAMED FILTER MATHODS
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//THIS FOR ALPHABETIC FILTER MATHODS
  const handleClickNameFilter = (event) => {
    setNameFilter(event.currentTarget);
  };
  const handleCloseNameFilter = () => {
    setNameFilter(null);
  };

  return (
    <div>
      <ButtonGroup
        size="small"
        variant="contained"
        aria-label="outlined primary button group"
        style={{
          boxShadow: "none",
        }}
      >
        <Button
          style={{
            textTransform: "capitalize",
            backgroundColor: colors.gray,
            color: colors.darkGray,
            borderColor: colors.white,
          }}
          id="name_filter"
          aria-controls="name_filter_menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={sort} />
          {filter}
        </Button>
        <Button
          id="alphabets_filter"
          aria-controls="alphabets_filter_menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickNameFilter}
          style={{
            textTransform: "capitalize",
            backgroundColor: colors.gray,
            color: colors.darkGray,
            borderColor: colors.white,
          }}
        >
          {alphaFilter}
        </Button>
      </ButtonGroup>

      <Menu
        id="alphabets_filter_menu"
        anchorEl={nameFilter}
        open={openNameFilter}
        onClose={handleCloseNameFilter}
      >
        <MenuList dense sx={{ width: 180 }}>
          <MenuItem onClick={() => setAlphaFilter("A-Z")}>
            <ListItemText>A-Z</ListItemText>
            {alphaFilter == "A-Z" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
          <MenuItem onClick={() => setAlphaFilter("Z-A")}>
            <ListItemText>Z-A</ListItemText>
            {alphaFilter == "Z-A" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu
        id="name_filter_menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList dense sx={{ width: 180 }}>
          <MenuItem onClick={() => setFilter("name")}>
            <ListItemText>Name</ListItemText>
            {filter == "name" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
          <MenuItem onClick={() => setFilter("unschedule")}>
            <ListItemText>Unschedule</ListItemText>
            {filter == "unschedule" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
          <MenuItem onClick={() => setFilter("department")}>
            <ListItemText>Department</ListItemText>
            {filter == "department" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
          <MenuItem onClick={() => setFilter("job title")}>
            <ListItemText>Job Title</ListItemText>
            {filter == "job title" ? (
              <ListItemIcon sx={{ marginLeft: 4, color: colors.primary }}>
                <Check />
              </ListItemIcon>
            ) : null}
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
