import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import holiday from "../assets/image/holiday.jpeg";
import colors from "../assets/css/main_style.scss";
import { Resizable } from "re-resizable";

const styles = {
  holiday: {
    backgroundSize: 250,
    backgroundImage: `url(${holiday})`,
    borderColor: colors.gray,
    // cursor: "not-allowed",
  },
};
const grid = 0;

const getItemStyle = (isDragging, draggableStyle, hours, hoursContain) => ({
  height: (hours * 100) / hoursContain,
  // some basic styles to make the items look a bit nicer
  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#dfeded" : "",
  width: "100%",
  overflowY: "clip",
});

var total = 0;
function ScheduleTask(props) {
  const [holiday, setHoliday] = useState();
  const [resizeStyle, setResizeStyle] = useState();
  // var [totalLen, setTotalLen] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setResizeStyle({});
    }, 20000);
  }, []);

  var tot = 0;

  const CalculateLen = (task_log_hours) => {
    var len = (parseInt(task_log_hours) * 100) / 8;
    return len + "%";
  };

  return (
    <div
      id={`bodyBlock_`}
      className="bodyBlock bodyBlockHeight"
      style={holiday}
      style={
        props.el._id.holiday
          ? styles.holiday
          : {
              display: "flex",
              background: true
                ? `linear-gradient(0deg, #FFC0CB ${
                    (props.el.total * 100) / props.hoursContain - 100
                  }%, #fff 0%)`
                : null,
            }
      }
    >
      <Droppable
        key={props.ind}
        droppableId={`${props.ind}_${props.userTaskKey}_${props.el._id.date}_${props.el.id}`}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {props.el.task.map((item, index) => (
                <>
                  <Draggable
                    key={item._id}
                    draggableId={item._id}
                    index={index}
                  >
                    {(provided, snapshot) =>
                      item.task_name != " " ? (
                        // <Resizable
                        //   className="resizeable"
                        //   onResizeStop={(e, direction, ref, d) => {
                        //     console.warn(d);
                        //   }}
                        //   style={resizeStyle}
                        // >
                        <div
                          className="taskBlock"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                            item.task_log_hours,
                            props.hoursContain
                          )}
                        >
                          <div>
                            {item.task_name} {item.task_log_hours} {item.id}
                          </div>
                          <div>{item.task_start_date}</div>
                        </div>
                      ) : (
                        // </Resizable>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style,
                            item.task_log_hours,
                            props.hoursContain
                          )}
                        ></div>
                      )
                    }
                  </Draggable>
                </>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default ScheduleTask;
