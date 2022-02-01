import React, { useState, useEffect, useRef } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import colors from "../assets/css/main_style.scss";
import moment from "moment";
import holiday from "../assets/image/holiday.jpeg";
import $ from "jquery";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  const [userTask, setUserTask] = useState(props.userTask);

 
  function onDragEnd(result) {
    const { source, destination } = result;
    console.log('On Drop:',result);
    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      // const items = reorder(state[sInd], source.index, destination.index);
      // const newState = [...state];
      // newState[sInd] = items;
      // setState(newState);
    } else {
      // const result = move(state[sInd], state[dInd], source, destination);
      // const newState = [...state];
      // newState[sInd] = result[sInd];
      // newState[dInd] = result[dInd];

      // setState(newState.filter((group) => group.length));
    }
  }

  const UserTask = (user_task, userTaskKey) => {
    let ItemList = [];
    for (let blockKey = 0; blockKey < props.scheduleSheetDays; blockKey++) {
      var day = moment(initDate).add(blockKey, "days").format("dd");
      var fulldate = moment(initDate)
        .add(blockKey, "days")
        .format("DD/MM/YYYY");
      var monthdate = moment(initDate).add(blockKey, "days").format("DD/MM");
      var result = props.holidays.filter(function (params) {
        return (
          params.value == day ||
          params.value == fulldate ||
          params.value == monthdate
        );
      });

      var ratio = 0;
      var taskHeight = 0;
      var totalRatio = 0;
      var sumHours = 0;

      user_task.tasks.map((val, key) =>
        val.taskDate == fulldate
          ? val.tasks.map(
              (taskDetails, index) =>
                (sumHours = parseFloat(sumHours) + parseFloat(taskDetails.time))
            )
          : null
      );
      var sumHoursPercentage = sumHours - props.hoursContain;
      sumHoursPercentage = props.hoursContain / sumHoursPercentage;
      sumHoursPercentage = 100 / sumHoursPercentage;
      sumHoursPercentage = sumHoursPercentage - 5;

      ItemList.push(
        <>
          <div
            id={`bodyBlock_${fulldate}`}
            className=" bodyBlock bodyBlockHeight"
            style={
              result.length > 0
                ? styles.holiday
                : {
                    background:
                      sumHoursPercentage > props.hoursContain
                        ? `linear-gradient(0deg, #FFC0CB ${sumHoursPercentage}%, #fff 0%)`
                        : null,
                  }
            }
          >
            {user_task.tasks.map((val, key) =>
              val.taskDate == fulldate
                ? val.tasks.map((taskDetails, index) => (
                    <>
                      {
                        (ratio = sumHours / taskDetails.time),
                        (taskHeight = 100 / ratio),
                        (taskHeight = parseFloat(taskHeight) - 5),
                        (taskHeight < 0 ? (taskHeight = 7) : null),
                        (totalRatio = taskHeight + totalRatio),
                        
                      }
                      <div
                        id={`${taskDetails.task_id}_${val.taskDate}`}
                        className="taskBlock"
                        style={{
                          backgroundColor: taskDetails.color,
                          height: `${taskHeight}%`,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 10,
                            color: colors.white,
                            fontWeight: "bold",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {taskDetails.projectName}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 10,
                            color: colors.white,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {taskDetails.task}
                        </Typography>
                      </div>
                    </>
                  ))
                : null
            )}
          </div>
          
        </>
      );
    }

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
    <Box style={{ marginTop: 0, width: "48200px", marginLeft: 20 }}>
      <Box className="stickyElement" sx={{ backgroundColor: "white" }}>
        {SetDate()}
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
        {userTask.map((tasks, i) => (
          <Box className="bodyBlockHeight" sx={{ display: "flex" }}>
            {UserTask(tasks, i)}
          </Box>
        ))}
      </DragDropContext>
    </Box>
  );
}
