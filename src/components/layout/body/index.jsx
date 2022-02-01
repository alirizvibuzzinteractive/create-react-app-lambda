import React, { Component } from "react";
import { Box, Typography, Slide, Grid, Divider, Button } from "@mui/material";
import RightArrow from "../../../assets/image/double_right_arrow.svg";
import AddUser from "../../../assets/image/add_user.svg";
import Girl1 from "../../../assets/image/girl1.png";
import SingleSelect from "../../singleSelect";
import colors from "../../../assets/css/main_style.scss";
import SidebarBox from "../../sidebarBox";
import ScheduleBlock from "../../scheduleBlock";

const userTasks = [
  {
    _id: "61d5911de0953bdb2b84523d",
    name: "Ali",
    email: "alirizvi139@gmail.com",
    password: "password",
    gender: "Female",
    task: "61e17ebe2b4d0876b1d82272",
    user_task: [
      {
        _id: {
          date: "17/01/2022",
        },
        task: [
          {
            assign_To: "61d5911de0953bdb2b84523d",
            task_log_hours: "2",
            task_est_hours: "5",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr rjdf medmnm",
            project_Name:
              "jmsva prxcgmbpfd qncx meleebl sbogx fcfblmaakt mvje uvaxicw",
          },
          {
            assign_To: "61d5911de0953bdb2b84523d",
            task_log_hours: "8",
            task_est_hours: "2",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr wvhz chnpqg",
            project_Name:
              "whhzl ffkldaoyyv udfq lfypnym uwxhj axgkqdzwdi ugwa mfqtgnw",
          },
          {
            assign_To: "61d5911de0953bdb2b84523d",
            task_log_hours: "4",
            task_est_hours: "3",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr tsxd enczkf",
            project_Name:
              "vkfbr xsdgzvjnvf izne fxcgdtt rvsmo dwzecyoqyk irrm bhgioht",
          },
        ],
      },
    ],
  },
  {
    _id: "61e5359619f5a4a53520a827",
    name: "aun",
    email: "aunrizvi@gmail.com",
    password: "password",
    gender: "Female",
    task: "61e17ebe2b4d0876b1d82272",
    user_task: [
      {
        _id: {
          date: "17/01/2022",
        },
        task: [
          {
            assign_To: "61e5359619f5a4a53520a827",
            task_log_hours: "3",
            task_est_hours: "5",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr dnnc rdpgoe",
            project_Name:
              "admad altttaxuko fbjo pzjhtyn gvtmp vvnzegsnrc dgti shddqfg",
          },
          {
            assign_To: "61e5359619f5a4a53520a827",
            task_log_hours: "6",
            task_est_hours: "6",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr zivw hdjukk",
            project_Name:
              "xcwxi nbklghlbgf ygea sipvrri lwqmg iiacfqzasv fvua kbaqyxr",
          },
          {
            assign_To: "61e5359619f5a4a53520a827",
            task_log_hours: "8",
            task_est_hours: "6",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr pvqo wfmqar",
            project_Name:
              "ivlxd kwoheipaif wglp yrwfelq syimv ryjvulexag ihfd cbpazbo",
          },
        ],
      },
    ],
  },
  {
    _id: "61e550a16d05d95a67699968",
    name: "Hassan",
    email: "hassan@gmail.com",
    password: "password",
    gender: "Female",
    task: "61e17ebe2b4d0876b1d82272",
    user_task: [
      {
        _id: {
          date: "17/01/2022",
        },
        task: [
          {
            assign_To: "61e550a16d05d95a67699968",
            task_log_hours: "7",
            task_est_hours: "7",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr dojh ppxtmh",
            project_Name:
              "ijgdj ojlhnhuich oidz drqsbiz lhpnq lbfvqhoqcs flmi rvzmlud",
          },
          {
            assign_To: "61e550a16d05d95a67699968",
            task_log_hours: "8",
            task_est_hours: "3",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr wnbj bsackx",
            project_Name:
              "xbwwx ebokthbdkx sril wtqpgax ukqhg dbixwlpsqx rcwh kzwushq",
          },
          {
            assign_To: "61e550a16d05d95a67699968",
            task_log_hours: "8",
            task_est_hours: "6",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr lvlw dnjdoa",
            project_Name:
              "bsvyp zolusegqrx ktin gaopchc yuikj tozcplzidy papz ljwlijx",
          },
          {
            assign_To: "61e550a16d05d95a67699968",
            task_log_hours: "1",
            task_est_hours: "6",
            task_start_date: "17/01/2022",
            task_end_date: "17/01/2022",
            task_desc:
              "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
            task_name: "Mr ntpo jrgsac",
            project_Name:
              "mrhfs rrsrfthfuv divj fpxsbub gwxdk crhstmrjif cljr uznjale",
          },
        ],
      },
    ],
  },
];

const userTasks1 = [
  {
    user_id: 1,
    user_name: "Ali",
    tasks: [
      {
        taskDate: "04/01/2022",
        tasks: [
          {
            projectName: "RTN2",
            task_id: "1",
            task: "Fix android build issue",
            time: "5",
            color: "#69c28b",
          },
          {
            projectName: "Compass App",
            task_id: "2",
            task: "Deployed app on bluehost vps",
            time: "3",
            color: "#6d75c4",
          },
        ],
      },
      {
        taskDate: "05/01/2022",
        tasks: [
          {
            projectName: "Flo",
            task_id: "3",
            task: "Design flo layout and schedule page",
            time: "2",
            color: "#69c2b9",
          },
          {
            projectName: "RTN2",
            task_id: "4",
            task: "Server sends email repeatedly Fix",
            time: "6",
            color: "#69c28b",
          },
        ],
      },
    ],
  },
  {
    user_id: 2,
    user_name: "Aun",
    tasks: [
      {
        taskDate: "03/01/2022",
        tasks: [
          {
            projectName: "Compass App",
            task_id: "6",
            task: "Deployed",
            time: "7",
            color: "#6d75c4",
          },
        ],
      },
      {
        taskDate: "04/01/2022",
        tasks: [
          {
            projectName: "RTN2",
            task_id: "5",
            task: "Fix android build issue",
            time: "1",
            color: "#69c28b",
          },
        ],
      },
      {
        taskDate: "05/01/2022",
        tasks: [
          {
            projectName: "Flo",
            task_id: "7",
            task: "Design flo layout and schedule page",
            time: "3",
            color: "#69c2b9",
          },
          {
            projectName: "Flo",
            task_id: "8",
            task: "Design flo layout and schedule page",
            time: "5",
            color: "#69c2b9",
          },
          {
            projectName: "RTN2",
            task_id: "9",
            task: "Server sends email repeatedly Fix",
            time: "2",
            color: "#69c28b",
          },
        ],
      },
    ],
  },
  {
    user_id: 2,
    user_name: "Hassan",
    tasks: [
      {
        taskDate: "04/01/2022",
        tasks: [
          {
            projectName: "RTN2",
            task_id: "10",
            task: "Fix android build issue",
            time: "5",
            color: "#69c28b",
          },
          {
            projectName: "Compass App",
            task_id: "11",
            task: "Deployed app on bluehost vps",
            time: "3",
            color: "#6d75c4",
          },
        ],
      },
      {
        taskDate: "05/01/2022",
        tasks: [
          {
            projectName: "Flo",
            task_id: "12",
            task: "Design flo layout and schedule page",
            time: "2",
            color: "#69c2b9",
          },
          {
            projectName: "RTN2",
            task_id: "13",
            task: "Server sends email repeatedly Fix",
            time: "6",
            color: "#69c28b",
          },
        ],
      },
    ],
  },
];

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggel: true,
      data: [1, 2, 3, 1, 2, 3],
      bodyBlockColumn: [0, 1, 2],
      bodyBlockRow: ["a", "b", "c", "a", "b", "c"],
      userTasks: userTasks1,
    };
  }

  updateUserTask = (data) => {
    this.setState({ userTasks: userTasks });
  };

  render() {
    return (
      <div className="body">
        <div className="body_container">
          {/* <Box
            className="sidebar2_toggle_btn2"
            onClick={() => {
              this.setState({ sidebarToggel: !this.state.sidebarToggel });
            }}
          >
            <img src={RightArrow} style={{ transform: "rotate(180deg)" }} />
          </Box>
          <Slide
            direction="right"
            in={this.state.sidebarToggel}
            mountOnEnter
            unmountOnExit
          >
            <Box className="sidebar2">
              <Box
                className="sidebar2_toggle_btn"
                onClick={() => {
                  this.setState({ sidebarToggel: !this.state.sidebarToggel });
                }}
              >
                <img src={RightArrow} />
              </Box>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: colors.white,
                  boxShadow: "2px 0px 6px #00000012",
                }}
              >
                <Box
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  className="sidebarStaticPart"
                >
                  <Box style={{ display: "flex" }}>
                    <img src={AddUser} />
                    <Divider orientation="vertical" flexItem sx={{ mx: 1.5 }} />
                    <SingleSelect
                      options={[
                        { text: "Today", icon: null },
                        { text: "This Week", icon: null },
                        { text: "This Month", icon: null },
                        { text: "This Quater", icon: null },
                        { text: "Last Week", icon: null },
                        { text: "Last Month", icon: null },
                        { text: "Last Quater", icon: null },
                      ]}
                      ticColor={colors.primary}
                      textColor={colors.black}
                      bgColor={colors.gray}
                    />
                  </Box>
                  <Box
                    item
                    xs={5}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      size="small"
                      sx={{
                        backgroundColor: colors.lighGreen,
                        color: colors.secondary,
                        mr: 1,
                        textTransform: "lowercase",
                      }}
                    >
                      68.2h
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        backgroundColor: colors.lightGray,
                        color: colors.darkGray,
                        textTransform: "lowercase",
                      }}
                    >
                      68.2h
                    </Button>
                  </Box>
                </Box>
                <Divider orientation="horizontal" flexItem sx={{ my: 1.8 }} />
                <Box className="sidebarContainer">
                  {this.state.data.map((data) => (
                    <div>
                      <SidebarBox
                        image={Girl1}
                        name="Kim Ryan"
                        hours="15h"
                        designation="Designer"
                        subDesignation="Creative"
                        location="USA"
                      />
                      <Divider orientation="horizontal" sx={{ my: 1.8 }} />
                    </div>
                  ))}
                </Box>
              </Box>
            </Box>
          </Slide> */}
          <div className="bodyWidth">
            <ScheduleBlock
              userTask={this.state.userTasks}
              updateUserTask={(e) => this.updateUserTask(e)}
              scheduleSheetDays={365}
              width={48200}
              hoursContain={9}
              holidays={[
                { label: "Weekend Holiday", value: "Sa" },
                { label: "Weekend Holiday", value: "Su" },
                { label: "Christmas", value: "23/12" },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}
// "Sa", "Su","06/01"
export default index;
