// @flow
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import dateFns from 'date-fns';

const dateFormatCompare = 'D MMMM YYYY';

export const randomIdGenerator = () => ((Math.random() * 1000000).toFixed(0));

export const getNoticed = (note: Array, id: string) => note.find(item => item.id === id);

export const convertToFormatDate = (date: Date) => (dateFns.format(date, 'DD MMMM YYYY'));

export const resultSearch = (result: Array, item: Object, value: Array) => (
  value.forEach(val => (val.some(val.id === result.id) ? result : result.push(val)))
);


export const compareDate = (date1: Date, date2: Date) => (
  dateFns.format(date1, dateFormatCompare) === dateFns.format(date2, dateFormatCompare)
);

const noteItem = (day: Date, noticed: Array) => {
  const note = [];
  if (noticed.length) {
    noticed.forEach(item => (
      dateFns.format(day, dateFormatCompare) === dateFns.format(item.date, dateFormatCompare))
          && note.push({
            ...item,
          }));
  }
  return note;
};

export const monthDays = (month: Date, selected: Date, noticed: Array) => {
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


export const weekDays = (month: Date) => {
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

export const searchNotice = (noticed: Array, searchTerm: string) => {
  const result = [];
  const event = noticed.filter(item => item.event.indexOf(searchTerm) !== -1);
  const people = noticed.filter(item => item.participans.indexOf(searchTerm) !== -1);
  const date = noticed.filter(item => convertToFormatDate(item.date).indexOf(searchTerm) !== -1);
  const description = noticed.filter(
    item => item.description.indexOf(searchTerm)
          !== -1,
  );

  if (event.length) {
    event.map(item => result.push(item));
  }

  if (description.length) {
    description.map(item => result.push(item));
  }

  if (people.length) {
    people.map(item => result.push(item));
  }

  if (date.length) {
    date.map(item => result.push(item));
  }


  return [...new Set(result)];
};
