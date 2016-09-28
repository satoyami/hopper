/*
 * workout storage
 * to be replaced by db service
*/
const _ = require('lodash');
const moment = require('moment');

module.exports = {
  amanda: {
    name: 'Amanda',
    description: '9, 7 and 5 reps of muscle-ups and snatches (135/95lbs)',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['muscle-up','snatch'],
    repScheme: [9,7,5],
    weights: {snatch: '135/95'},
    linksToMovement: ['http://wodwell.com/wod/amanda/'],
    categories: ['gymanastics','olympic-lifting','barbell','rings','couplet'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension']
  },
  angie: {
    name: 'Angie',
    description: '100 pull-ups, 100 push-ups, 100 sit-ups, 100 air squats',
    timeScheme: 'For Time',
    averageTime: '30 minutes',
    movements: ['pull-up','push-up','sit-ups','air-squats'],
    repScheme: [100,100,100,100],
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/angie/'],
    categories: ['gymanastics','pull-up'],
    warmUps: [],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd')
  },
  fran: {
    name: 'Fran',
    description: '21 thrusters, 21 pull-ups, 15 thrusters, 15 pull-ups, 9 thrusters, 9 pull-ups',
    timeScheme: 'For Time',
    averageTime: '3 minutes',
    movements: ['pull-up','thruster'],
    repScheme: [21,15,9],
    weights: {thruster: '95/65'},
    linksToMovement: ['http://wodwell.com/wod/fran/'],
    categories: ['gymanastics','pull-up'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd')
  },
  chelsea: {
    name: 'Chelsea',
    description: '5 pull-ups, 10 push-ups, 15 air-squats',
    timeScheme: 'EMOM',
    averageTime: '20 minutes',
    movements: ['pull-ups','push-ups','air-squats'],
    repScheme: [5,10,15],
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/chelsea/'],
    categories: ['pull-ups', 'push-ups', 'air-squats'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd')
  },
  taunia: {},
  alice: {},
  kelsey: {},
  grace: {
    name: 'Grace',
    description: '30 ground-to-overheads clean and jerk',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['ground-to-overhead','clean','jerk'],
    repScheme: [30],
    weights: {'clean-and-jerk': '135/95'},
    linksToMovement: ['http://wodwell.com/wod/grace/'],
    categories: ['barbell', 'clean-and-jerk'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd')
  },
  holly: {},
  isabel: {
    description: '30 ground-to-overheads snatch',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['ground-to-overhead','snatch'],
    repScheme: [30],
    weights: {snatch: '135/95'},
    linksToMovement: ['http://wodwell.com/wod/isabel/'],
    categories: ['barbell','snatch','power-snatch'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd')
  },
  jackie: {
    name: 'Jackie',
    description: '1000m row, 50 thrusters, 30 pull-ups',
    timeScheme: 'For Time',
    averageTime: '12 minutes',
    movements: ['row','thrusters','pull-ups'],
    repScheme: [1000,50,30],
    weights: {thruster: '45'},
    linksToMovement: ['http://wodwell.com/wod/jackie/'],
    categories: ['barbell','snatch'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd')
  },
  jill: {},
  bonny: {},
  cindy: {
    name: 'Cindy',
    description: '20 minutes of 5 pull-ups, 10 push-ups, 15 air-squats',
    timeScheme: 'AMRAP',
    averageTime: '20 minutes',
    movements: ['pull-ups','push-ups','air-squats'],
    repScheme: [5,10,15],
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/cindy/'],
    categories: ['gymnastics','bodyweight','pull-ups','push-ups','air-squats'],
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd')
  },
  nancy: {},
  jenny: {},
  molly: {},
  tiffany: {},
  zoe: {}
  // workoutName: {
  //   name: '',
  //   description: '',
  //   timeScheme: '',
  //   movements: [],
  //   repScheme: [],
  //   weights: {},
  //   linksToMovement: [],
  //   categories: [],
  //   warmUps: [],
  //   date: //moment().format('YYYY-MM-DD_HH-MM_dddd')
  // }
};
