// @flow
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import dateFns from 'date-fns';

const randomIdGenerator = () => ((Math.random() * 1000000).toFixed(0));

export const monthDays = (month) => {
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
        day: formattedDate,
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
