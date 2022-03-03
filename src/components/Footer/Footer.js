import React from "react";
import { GitHubCalendar } from "react-github-calender";

// function Footer() {
//   return (
//     <div className="Footer">
//       <GitHubCalendar />
//     </div>
//   );
// }
const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

function Footer() {
  return (
    <div className="footer">
      <GitHubCalendar
        username="durbanpoison"
        transformData={selectLastHalfYear}
        hideTotalCount
        hideColorLegend
      />
    </div>
  );
}

export default Footer;
