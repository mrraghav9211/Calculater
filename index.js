var dt = new Date();

dt.setDate(1);
var day = dt.getDay();
var newDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
var today = new Date();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
selectMon = urlParams.get("selectMon");
selectYr = urlParams.get("selectYear");
date = urlParams.get("input");
if (date != null) {
  today.setDate(date);
}
if (selectMon != null) {
  dt.setFullYear(selectYr, selectMon);
  today.setDate(1);
} else dt.setFullYear(dt.getFullYear(), dt.getMonth());

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];
var years = [2022, 2023, 2024, 2024, 2025, 2026, 2027, 2028];
document.querySelector("h1").innerHTML = months[dt.getMonth()];
document.getElementById("para").innerHTML = dt.toDateString();

var cells = "";
for (x = day; x > 0; x--) {
  cells += `<div> </div>`;
}
for (var i = 1; i <= newDate; i++) {
  if (i == today.getDate()) {
    cells += `<div class='today'>${i}</div>`;
  } else cells += `<div>${i}</div>`;
}
document.querySelector(".dates").innerHTML = cells;

var select = "";

for (var j = 0; j < months.length; j++) {
  select += `<option value='${j}' id='opt-val'>${months[j]}</option>`;
}

document.getElementById("select").innerHTML = select;

var selectYear = "";
for (var k = 0; k < years.length; k++) {
  selectYear += `<option>${years[k]}</option>`;
}
document.getElementById("selectYear").innerHTML = selectYear;
