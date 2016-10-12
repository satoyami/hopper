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
    linksToMovement: ['http://wodwell.com/wod/amanda/'],
    categories: ['gymanastics','olympic-lifting','barbell','rings','couplet'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
  },
  {
    name: 'Alexander',
    description: '5 rounds 31 back-squat, 12 power-cleans',
    timeScheme: 'For Time',
    averageTime: '10 minutes',
    movements: ['back-squat','power-clean'],
    repScheme: [31,12],
    roundMultiplier: 5,
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/amanda/'],
    categories: ['gymanastics','olympic-lifting','barbell','rings','couplet'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
  }
];
