import {
  randomIdGenerator,
} from 'web-utils';

export const initialNote = [
  {
    id: randomIdGenerator(),
    complete: false,
    event: 'Edit video',
    participans: 'Denys, Oleg',
    description: 'Cut video',
    date: new Date('2019-05-03T21:00:00.000Z'),
  },
  {
    id: randomIdGenerator(),
    complete: false,
    event: 'Call company',
    participans: 'Maria',
    description: 'Discuss about gadget',
    date: new Date('2019-04-29T21:00:00.000Z'),
  },
  {
    id: randomIdGenerator(),
    complete: true,
    event: 'Refactor topic',
    participans: 'Sasha',
    description: 'Rewrite unit',
    date: new Date('2019-05-04T21:00:00.000Z'),
  },
  {
    id: randomIdGenerator(),
    complete: true,
    event: 'Music',
    participans: 'Igor, Denys',
    description: 'Update playlist',
    date: new Date('2019-05-04T21:00:00.000Z'),
  },
  {
    id: randomIdGenerator(),
    complete: true,
    event: 'Gym',
    participans: 'Denys',
    description: 'Go to gym',
    date: new Date('2019-05-08T21:00:00.000Z'),
  },
];
