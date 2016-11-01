/*
 * workout storage
 * to be replaced by db service
 */
const moment = require('moment');

module.exports = [
  {
    name: '21 Guns',
    description: '21 min 400m run, 21 push-ups, 21 box-jumps, 15 burpees, 9 pull-ups',
    timeScheme: 'AMRAP',
    averageTime: '21 minutes',
    timeCap: true,
    movements: ['run','push-ups','box-jumps','burpees','pull-ups'],
    repScheme: [21,21,15,9],
    distance: 400,
    // roundMultiplier: ,
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/21-guns/'],
    categories: ['gymanastics','olympic-lifting','barbell','rings','couplet'],
  },
  {
    name: 'Alexander',
    description: '5 rounds 31 back-squat, 12 power-cleans',
    timeScheme: 'For Time',
    averageTime: '10 minutes',
    movements: ['back-squat','power-clean'],
    repScheme: [31,12],
    roundMultiplier: 5,
    weights: {'back-squat': '135/95','power-clean':'185/135'},
    categories: ['gymanastics','olympic-lifting','barbell','rings','couplet'],
  },
  {
    name: 'DT',
    description: '5 rounds 12 deadlifts, 9 hang-power-cleans, 6 push-jerks',
    timeScheme: 'For Time',
    averageTime: '6 minutes',
    timeCap: false,
    movements: ['deadlifts','hang-power-cleans','push-jerks'],
    repScheme: [12,9,6],
    distance: 0,
    roundMultiplier: 5,
    weights: {barbell: '155/105'},
    categories: ['olympic-lifting','barbell'],
  },
];
