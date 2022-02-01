import React, { useState, useEffect, useRef } from "react";
import { Box, Tooltip, LinearProgress } from "@mui/material";
import colors from "../assets/css/main_style.scss";
import moment from "moment";
import holiday from "../assets/image/holiday.jpeg";
import ScheduleTask from "./ScheduleTask";
import $ from "jquery";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import schedule_loader_bg from "../assets/image/schedule_loader_bg.png";

const initDate = "01/01/2022";

const styles = {
  holiday: {
    backgroundSize: 250,
    backgroundImage: `url(${holiday})`,
    borderColor: colors.gray,
    cursor: "not-allowed",
  },
};

const reorder = (list, startIndex, endIndex) => {
  const result = list;
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};


const move = (source, destination, droppableSource, droppableDestination) => {
  const [removed] = source.splice(droppableSource.index, 1);

  destination.splice(droppableDestination.index, 0, removed);

  const result = [];
  result.push(source);
  result.push(destination);
  result[droppableSource.droppableId] = source;
  result[droppableDestination.droppableId] = destination;
  return result;
};

export default function ScheduleBlock(props) {
  const [overTask, setOverTask] = useState(0);
  const [userTask, setUserTask] = useState([]);
  const [holiday, setHoliday] = useState();

  useEffect(() => {
    fetch("http://localhost:1234/seeding/tasks/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserTask(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function onDragEnd(result) {
    const { source, destination } = result;
    // console.log("On Drop:", result);
    SetOrder(result);
    // dropped outside the list
    if (!destination) {
      return;
    }
    var sInd = source.droppableId;
    var dInd = destination.droppableId;
    var sIndOrg = sInd;
    var dIndOrg = dInd;
    var sIndSplit = sInd.split("_");
    var dIndSplit = dInd.split("_");
    sInd = sInd.split("_");
    sInd = sInd[0];
    dInd = dInd.split("_");
    dInd = dInd[0];
    if (sIndOrg === dIndOrg) {
      // var list = userTask.filter(function (e) {
      //   if (e.user_task[sInd].task[source.index] != undefined) {
      //     if (e.user_task[sInd].task[source.index]._id == result.draggableId) {
      //       return e;
      //     }
      //   }
      // });
      // if (list.length > 0) {
      var listObj = userTask[sIndSplit[1]].user_task[sInd].task;
      const items = reorder(listObj, source.index, destination.index);

      
      setUserTask(userTask);

      // } else {
      //   alert("filter error");
      // }
    } else {
      // var list = userTask.filter(function (e) {
      //   console.warn(e.user_task[sInd].task);
      //   if (e.user_task[sInd].task[source.index] != undefined) {
      //     if (e.user_task[sInd].task[source.index]._id == result.draggableId) {
      //       return e;
      //     }
      //   }
      // });
      // if (list.length > 0) {
      var listSInd = userTask[sIndSplit[1]].user_task[sInd].task;
      var listDInd = userTask[dIndSplit[1]].user_task[dInd].task;
      console.warn(
        userTask[sIndSplit[1]],
        userTask[sIndSplit[1]].user_task[sInd]
      );
      console.warn(
        userTask[dIndSplit[1]],
        userTask[dIndSplit[1]].user_task[dInd]
      );
      const result = move(listSInd, listDInd, source, destination);
      // }
      // const newState = [...state];
      // newState[sInd] = result[sInd];
      // newState[dInd] = result[dInd];
      // setState(newState.filter((group) => group.length));
    }
  }

  const SetOrder=(e)=>{
    console.info(e.source.droppableId.split('_'));
  }

  const UserTask = (user_task, userTaskKey) => {
    let ItemList = [];
    ItemList.push(
      <div style={{ display: "flex" }}>
        {user_task.map((el, ind) => (
          <ScheduleTask
            user_task={user_task}
            userTaskKey={userTaskKey}
            ind={`${ind}`}
            el={el}
            hoursContain={props.hoursContain}
          />
        ))}
      </div>
    );

    return ItemList;
  };
  const GetMonthName = (day, monthName, week) => {
    var name = "";
    switch (monthName) {
      case "01":
        name = "Jan";
        break;
      case "02":
        name = "Fab";
        break;
      case "03":
        name = "Mar";
        break;
      case "04":
        name = "Apr";
        break;
      case "05":
        name = "May";
        break;
      case "06":
        name = "Jun";
        break;
      case "07":
        name = "Jul";
        break;
      case "08":
        name = "Agu";
        break;
      case "09":
        name = "Sep";
        break;
      case "10":
        name = "Oct";
        break;
      case "11":
        name = "Nov";
        break;
      case "12":
        name = "Dec";
        break;

      default:
        break;
    }
    return day == "Th" ? (
      <Box className="monthName">{name}</Box>
    ) : day == "Mo" ? (
      <Box className="monthWeek">{parseInt(week)}</Box>
    ) : (
      ""
    );
  };
  const SetDate = () => {
    let dateHead = [];
    for (let dateKey = 0; dateKey < props.scheduleSheetDays; dateKey++) {
      var week = moment(initDate).add(dateKey, "days").format("W");
      var date = moment(initDate).add(dateKey, "days").format("DD");
      var day = moment(initDate).add(dateKey, "days").format("dd");
      var monthName = moment(initDate).add(dateKey, "days").format("MM");

      var fulldate = moment(initDate).add(dateKey, "days").format("DD/MM/YYYY");
      var fulldateClass = moment(initDate)
        .add(dateKey, "days")
        .format("DD_MM_YYYY");
      var monthdate = moment(initDate).add(dateKey, "days").format("DD/MM");

      var result = props.holidays.filter(function (params) {
        return (
          params.value == day ||
          params.value == fulldate ||
          params.value == monthdate
        );
      });
      dateHead.push(
        <Box className="bodyScheduleDateLine">
          {GetMonthName(day, monthName, week)}
          <Box
            className={`bodyScheduleDateLineBox dateBar_ dateBar_${fulldateClass}`}
            sx={{ justifyContent: "space-between", display: "flex" }}
          >
            <Box sx={{ paddingLeft: 1 }}>
              {day}

              <span style={{ padding: "0px 4px" }}>{date}</span>
            </Box>
            {result.length > 0 ? (
              <Tooltip title={result[0].label} arrow>
                <Box className="holidayDot"></Box>
              </Tooltip>
            ) : null}
          </Box>
        </Box>
      );
    }
    return dateHead;
  };

  return (
    <Box
      style={{
        marginTop: 0,
        width: (props.width / 365) * (props.scheduleSheetDays + 1) + "px",
        marginLeft: 20,
      }}
    >
      <Box className="stickyElement" sx={{ backgroundColor: "white" }}>
        {SetDate()}
      </Box>

      {userTask.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          {userTask.map((tasks, i) => (
            <Box className="bodyBlockHeight" sx={{ display: "flex" }}>
              {UserTask(tasks.user_task, i)}
            </Box>
          ))}
        </DragDropContext>
      ) : (
        <Box
          sx={{
            backgroundImage: `url(${schedule_loader_bg})`,
            width: "100%",
            height: "80vh",
            backgroundSize: "contain",
          }}
        >
          <Box sx={{ width: "1230px" }}>
            <LinearProgress color="secondary" />
          </Box>
        </Box>
      )}
    </Box>
  );
}
