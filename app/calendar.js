document.addEventListener("DOMContentLoaded", function () {
  const dateBlocks = document.querySelectorAll(".date__block-wrapper");
  const calendarContainers = document.querySelectorAll(".calendar-container");

  const calendars = Array.from(calendarContainers).map((container) => {
    return {
      element: container,
      yearList: container.querySelector(".year-selector ul"),
      monthList: container.querySelector(".month-selector ul"),
      calendarWrapper: container.querySelector("#calendarWrapper"),
      calendarMonths: container.querySelector("#calendarMonths"),
      selectedDate: {
        year: null,
        month: null,
        day: null,
        element: null,
      },
    };
  });

  let openCalendarIndex = null;

  function closeAllCalendars() {
    calendarContainers.forEach((calendar, index) => {
      calendar.style.display = "none";
      dateBlocks[index].classList.remove("active");
    });
    openCalendarIndex = null;
  }

  function openCalendar(index) {
    if (openCalendarIndex !== null) {
      closeAllCalendars();
    }
    const calendar = calendarContainers[index];
    calendar.style.display = "flex";
    dateBlocks[index].classList.add("active");
    openCalendarIndex = index;
  }

  dateBlocks.forEach((block, index) => {
    block.addEventListener("click", function () {
      if (openCalendarIndex === index) {
        closeAllCalendars();
      } else {
        openCalendar(index);
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (
      openCalendarIndex !== null &&
      !dateBlocks[openCalendarIndex].contains(e.target) &&
      !calendarContainers[openCalendarIndex].contains(e.target)
    ) {
      closeAllCalendars();
    }
  });

  calendars.forEach((calendar, calendarIndex) => {
    const { yearList, monthList } = calendar;

    for (let year = 1980; year <= new Date().getFullYear() + 1; year++) {
      let li = document.createElement("li");
      li.textContent = year;
      li.dataset.year = year;
      yearList.appendChild(li);
    }

    const months = [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ];

    const calendarMonthsArr = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    months.forEach((monthName, index) => {
      let li = document.createElement("li");
      li.textContent = monthName;
      li.dataset.month = index;
      monthList.appendChild(li);
    });

    yearList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        updateCalendar(
          calendar,
          e.target.dataset.year,
          getSelectedMonth(calendar)
        );
      }
    });

    monthList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        const monthIndex = e.target.dataset.month;
        updateCalendar(calendar, getSelectedYear(calendar), monthIndex);
        scrollToSelected(monthList, e.target);
        scrollToMonth(calendar, monthIndex);
      }
    });

    function getSelectedYear() {
      const selectedYear = yearList.querySelector(".selected");
      return selectedYear
        ? selectedYear.dataset.year
        : new Date().getFullYear();
    }

    function getSelectedMonth() {
      const selectedMonth = monthList.querySelector(".selected");
      return selectedMonth
        ? selectedMonth.dataset.month
        : new Date().getMonth();
    }

    function updateCalendar(calendar, year, month) {
      const { yearList, monthList, calendarMonths } = calendar;

      yearList
        .querySelectorAll("li")
        .forEach((li) => li.classList.remove("selected"));
      monthList
        .querySelectorAll("li")
        .forEach((li) => li.classList.remove("selected"));

      const yearElement = yearList.querySelector(`[data-year="${year}"]`);
      const monthElement = monthList.querySelector(`[data-month="${month}"]`);

      if (yearElement) {
        yearElement.classList.add("selected");
      }

      if (monthElement) {
        monthElement.classList.add("selected");
      }

      calendarMonths.innerHTML = "";
      const today = new Date();

      for (let i = 0; i < 12; i++) {
        const monthDiv = document.createElement("div");
        monthDiv.classList.add("month");
        monthDiv.id = `month-${i}`;

        const monthHeader = document.createElement("div");
        monthHeader.classList.add("month-header");
        monthHeader.textContent = `${calendarMonthsArr[i]} ${year}`;
        monthDiv.appendChild(monthHeader);

        const daysGrid = document.createElement("div");
        daysGrid.classList.add("days-grid");
        const daysInMonth = new Date(year, i + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
          const dayDiv = document.createElement("div");
          dayDiv.classList.add("day");
          dayDiv.textContent = day;

          if (
            year === today.getFullYear() &&
            i === today.getMonth() &&
            day === today.getDate()
          ) {
            dayDiv.classList.add("selected");
            calendar.selectedDate = {
              year: year,
              month: i,
              day: day,
              element: dayDiv,
            };
          }

          dayDiv.addEventListener("click", function () {
            if (calendar.selectedDate.element) {
              calendar.selectedDate.element.classList.remove("selected");
            }

            dayDiv.classList.add("selected");
            calendar.selectedDate = {
              year: year,
              month: i,
              day: day,
              element: dayDiv,
            };

            const dateText = `${day < 10 ? "0" : ""}${day}.${i < 9 ? "0" : ""}${
              i + 1
            }.${year % 100}`;
            dateBlocks[calendarIndex].querySelector(
              ".select-date"
            ).textContent = dateText;
          });

          daysGrid.appendChild(dayDiv);
        }

        monthDiv.appendChild(daysGrid);
        calendarMonths.appendChild(monthDiv);
      }

      scrollToMonth(calendar, month);
    }

    function scrollToMonth(calendar, month) {
      const monthElement = calendar.calendarMonths.querySelector(
        `#month-${month}`
      );
      if (monthElement) {
        const offsetTop = monthElement.offsetTop - 40;
        calendar.calendarWrapper.scrollTop = offsetTop;
      }
    }

    function scrollToSelected(list, selected) {
      list.scrollTop =
        selected.offsetTop - list.clientHeight / 2 + selected.clientHeight / 2;
    }

    const currentDate = new Date();
    updateCalendar(calendar, currentDate.getFullYear(), currentDate.getMonth());
    const initialYearElement = yearList.querySelector(
      `[data-year="${currentDate.getFullYear()}"]`
    );
    const initialMonthElement = monthList.querySelector(
      `[data-month="${currentDate.getMonth()}"]`
    );
    if (initialYearElement) {
      scrollToSelected(yearList, initialYearElement);
    }
    if (initialMonthElement) {
      scrollToSelected(monthList, initialMonthElement);
    }
    scrollToMonth(calendar, currentDate.getMonth());
  });
});
