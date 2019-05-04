// @flow

const randomId = () => (
  (Math.random() * 1000000).toFixed(0)
);

export const Days = [
  {
    id: randomId(),
    name: 'Monday',
  },
  {
    id: randomId(),
    name: 'Tuesday',
  },
  {
    id: randomId(),
    name: 'Wednesday',
  },
  {
    id: randomId(),
    name: 'Thursday',
  },
  {
    id: randomId(),
    name: 'Friday',
  },
  {
    id: randomId(),
    name: 'Saturday',
  },
  {
    id: randomId(),
    name: 'Sunday',
  },
];
