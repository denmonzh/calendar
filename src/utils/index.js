// @flow
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import dateFns from 'date-fns';

const dateFormatCompare = 'D MMMM YYYY';

export const randomIdGenerator = () => ((Math.random() * 1000000).toFixed(0));

export const getNoticed = (note, id) => note.find(item => item.id === id);

export const compareDate = (date1, date2) => (
  dateFns.format(date1, dateFormatCompare) === dateFns.format(date2, dateFormatCompare)
);

const noteItem = (day, noticed) => {
  const note = [];
  if (noticed.length) {
    console.log('Here');
    noticed.forEach(item => (
      dateFns.format(day, dateFormatCompare) === dateFns.format(item.date, dateFormatCompare))
          && note.push({
            ...item,
          }));
  }
  return note;
};

export const monthDays = (month, selected, noticed) => {
  const monthStart = dateFns.startOfMonth(month);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);

  let formattedDate = '';
  let day = startDate;
  const days = [];
  const dateFormat = 'D';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      days.push({
        id: randomIdGenerator(),
        day: dateFns.addDays(day, 0),
        dayNow: dateFns.format(new Date(), dateFormatCompare)
        === dateFns.format(day, dateFormatCompare),
        selected: dateFns.format(selected, dateFormatCompare)
          === dateFns.format(day, dateFormatCompare),
        note: noteItem(day, noticed),
        dayNumber: formattedDate,
      });
      day = dateFns.addDays(day, 1);
    }
  }

  return days;
};


export const weekDays = (month) => {
  const dateFormat = 'dddd';
  const week = [];

  const startDate = dateFns.startOfWeek(month);

  for (let i = 0; i < 7; i++) {
    week.push({
      id: randomIdGenerator(),
      weekDay: dateFns.format(dateFns.addDays(startDate, i), dateFormat),
    });
  }

  return week;
};
