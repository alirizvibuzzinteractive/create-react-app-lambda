import * as React from "react";
import MenuList from "@mui/material/MenuList";
import colors from "../assets/css/main_style.scss";
import DownArrow from "../assets/image/down_arrow.svg";
import moment from "moment";
import Selector from "./selector";
import $ from "jquery";

export default function SingleSelect(props) {
  const [selectorValue, setSelectorValue] = React.useState(null);

  React.useEffect(() => {
    setScroll("Today");
  }, []);

  const setScroll = (e) => {
    switch (e) {
      case "Today":
        /**
        |--------------------------------------------------
        | TODAY FILTER
        |--------------------------------------------------
        */
        $(".dateBar_").removeClass("datebarSingle");
        $(".dateBar_").removeClass("datebarStart");
        $(".dateBar_").removeClass("datebarMid");
        $(".dateBar_").removeClass("datebarEnd");
        var fulldate = moment().format("DD/MM/YYYY");
        var fulldateClass = moment().format("DD_MM_YYYY");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        $(`.dateBar_${fulldateClass}`).addClass("datebarSingle");
        break;
      case "This Week":
        /**
        |--------------------------------------------------
        | THIS WEEK FILTER
        |--------------------------------------------------
        */
        $(".dateBar_").removeClass("datebarSingle");
        $(".dateBar_").removeClass("datebarStart");
        $(".dateBar_").removeClass("datebarMid");
        $(".dateBar_").removeClass("datebarEnd");
        var fulldate = moment().clone().startOf("isoWeek").format("DD/MM/YYYY");
        
        var day = moment().endOf("isoWeek").format("DD");
        var year = moment().endOf("isoWeek").format("YYYY");
        var currentYear = moment().format("YYYY");
        var startOfReverse = moment().clone().startOf("isoWeek").format("MM/DD/YYYY");
        var startOfDate = moment().clone().startOf("isoWeek").format("DD_MM_YYYY");
        var endOfDate = moment().clone().endOf("isoWeek").format("DD_MM_YYYY");
        for (let index = 1; index < (year==currentYear?day:8) - 1; index++) {
          var fulldateClass = moment(startOfReverse)
            .add(index, "days")
            .format("DD_MM_YYYY");
          $(`.dateBar_${fulldateClass}`).addClass("datebarMid");
        }
        $(`.dateBar_${startOfDate}`).addClass("datebarStart");
        $(`.dateBar_${endOfDate}`).addClass("datebarEnd");

        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "This Month":
        /**
        |--------------------------------------------------
        | THIS MONTH FILTER
        |--------------------------------------------------
        */
        $(".dateBar_").removeClass("datebarSingle");
        $(".dateBar_").removeClass("datebarStart");
        $(".dateBar_").removeClass("datebarMid");
        $(".dateBar_").removeClass("datebarEnd");

        var fulldate = moment().startOf("month").format("DD/MM/YYYY");
        var day = moment().endOf("month").format("DD");
        var startOfReverse = moment().startOf("month").format("MM/DD/YYYY");
        var startOfDate = moment().startOf("month").format("DD_MM_YYYY");
        var endOfDate = moment().endOf("month").format("DD_MM_YYYY");
        for (let index = 1; index < day - 1; index++) {
          var fulldateClass = moment(startOfReverse)
            .add(index, "days")
            .format("DD_MM_YYYY");
          $(`.dateBar_${fulldateClass}`).addClass("datebarMid");
        }
        $(`.dateBar_${startOfDate}`).addClass("datebarStart");
        $(`.dateBar_${endOfDate}`).addClass("datebarEnd");
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "This Quater":
        /**
        |--------------------------------------------------
        | THIS QUATER FILTER
        |--------------------------------------------------
        */
        $(".dateBar_").removeClass("datebarSingle");
        $(".dateBar_").removeClass("datebarStart");
        $(".dateBar_").removeClass("datebarMid");
        $(".dateBar_").removeClass("datebarEnd");

        var fulldate = moment()
          .quarter(moment().quarter()).startOf("quarter")
          .format("DD/MM/YYYY");

        var day = moment().quarter(moment().quarter()).endOf("quarter").format("DD/MM");
        var year = moment().quarter(moment().quarter()).endOf("quarter").format("YYYY");
        var currentYear = moment().format("YYYY");
        var startOfReverse = moment().quarter(moment().quarter()).startOf("quarter").format("MM/DD/YYYY");
        var startOfDate = moment().quarter(moment().quarter()).startOf("quarter").format("DD_MM_YYYY");
        var endOfDate = moment().quarter(moment().quarter()).endOf("quarter").format("DD_MM_YYYY");
        var i=0;
        var fulldateClass = moment(startOfReverse).format("DD_MM_YYYY");
        while (fulldateClass!=endOfDate) {
          fulldateClass = moment(startOfReverse).add(i, "days").format("DD_MM_YYYY");
          $(`.dateBar_${fulldateClass}`).addClass("datebarMid");
          i++;
        }

        $(`.dateBar_${startOfDate}`).addClass("datebarStart");
        $(`.dateBar_${endOfDate}`).addClass("datebarEnd");

        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "Last Week":
        /**
        |--------------------------------------------------
        | LAST WEEK FILTER
        |--------------------------------------------------
        */
        $(".dateBar_").removeClass("datebarSingle");
        $(".dateBar_").removeClass("datebarStart");
        $(".dateBar_").removeClass("datebarMid");
        $(".dateBar_").removeClass("datebarEnd");

        var fulldate = moment().subtract(1, "weeks").startOf("isoWeek")
          .format("DD/MM/YYYY");

        var day = moment().subtract(1, "weeks").endOf("isoWeek").format("DD/MM");
        var year = moment().subtract(1, "weeks").endOf("isoWeek").format("YYYY");
        var currentYear = moment().format("YYYY");
        var startOfReverse = moment().subtract(1, "weeks").startOf("isoWeek").format("MM/DD/YYYY");
        var startOfDate = moment().subtract(1, "weeks").startOf("isoWeek").format("DD_MM_YYYY");
        var endOfDate = moment().subtract(1, "weeks").endOf("isoWeek").format("DD_MM_YYYY");
        var i=0;
        var fulldateClass = moment(startOfReverse).format("DD_MM_YYYY");
        while (fulldateClass!=endOfDate) {
          fulldateClass = moment(startOfReverse).add(i, "days").format("DD_MM_YYYY");
          $(`.dateBar_${fulldateClass}`).addClass("datebarMid");
          i++;
        }

        $(`.dateBar_${startOfDate}`).addClass("datebarStart");
        $(`.dateBar_${endOfDate}`).addClass("datebarEnd");

        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "Last Month":
        /**
        |--------------------------------------------------
        | LAST MONTH FILTER
        |--------------------------------------------------
        */
        $(".dateBar_").removeClass("datebarSingle");
        $(".dateBar_").removeClass("datebarStart");
        $(".dateBar_").removeClass("datebarMid");
        $(".dateBar_").removeClass("datebarEnd");

        var fulldate = moment().subtract(1, "month").startOf("month").format("DD/MM/YYYY");

        var day = moment().subtract(1, "month").endOf("month").format("DD/MM");
        var year = moment().subtract(1, "month").endOf("month").format("YYYY");
        var currentYear = moment().format("YYYY");
        var startOfReverse = moment().subtract(1, "month").startOf("month").format("MM/DD/YYYY");
        var startOfDate = moment().subtract(1, "month").startOf("month").format("DD_MM_YYYY");
        var endOfDate = moment().subtract(1, "month").endOf("month").format("DD_MM_YYYY");
        var i=0;
        var fulldateClass = moment(startOfReverse).format("DD_MM_YYYY");
        while (fulldateClass!=endOfDate) {
          fulldateClass = moment(startOfReverse).add(i, "days").format("DD_MM_YYYY");
          $(`.dateBar_${fulldateClass}`).addClass("datebarMid");
          i++;
        }

        $(`.dateBar_${startOfDate}`).addClass("datebarStart");
        $(`.dateBar_${endOfDate}`).addClass("datebarEnd");
        
        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "Last Quater":
        /**
        |--------------------------------------------------
        | LAST QUATER FILTER
        |--------------------------------------------------
        */
       $(".dateBar_").removeClass("datebarSingle");
        $(".dateBar_").removeClass("datebarStart");
        $(".dateBar_").removeClass("datebarMid");
        $(".dateBar_").removeClass("datebarEnd");

        var fulldate = moment().subtract(1, "quarter").startOf("quarter").format("DD/MM/YYYY");

        var day = moment().subtract(1, "quarter").endOf("quarter").format("DD/MM");
        var year = moment().subtract(1, "quarter").endOf("quarter").format("YYYY");
        var currentYear = moment().format("YYYY");
        var startOfReverse = moment().subtract(1, "quarter").startOf("quarter").format("MM/DD/YYYY");
        var startOfDate = moment().subtract(1, "quarter").startOf("quarter").format("DD_MM_YYYY");
        var endOfDate = moment().subtract(1, "quarter").endOf("quarter").format("DD_MM_YYYY");
        var i=0;
        var fulldateClass = moment(startOfReverse).format("DD_MM_YYYY");
        while (fulldateClass!=endOfDate) {
          fulldateClass = moment(startOfReverse).add(i, "days").format("DD_MM_YYYY");
          $(`.dateBar_${fulldateClass}`).addClass("datebarMid");
          i++;
        }

        $(`.dateBar_${startOfDate}`).addClass("datebarStart");
        $(`.dateBar_${endOfDate}`).addClass("datebarEnd");

        document.getElementById(`bodyBlock_${fulldate}`).scrollIntoView({
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  };
  return (
    <Selector
      options={props.options}
      ticColor={props.ticColor}
      textColor={props.textColor}
      bgColor={props.bgColor}
      SelectedVal={(e) => {
        setSelectorValue(e);
        setScroll(e);
      }}
    >
      {selectorValue ? selectorValue : props.options[0].text}{" "}
      <img src={DownArrow} />
    </Selector>
  );
}
