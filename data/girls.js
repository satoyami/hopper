/*
 * workout storage
 * to be replaced by db service
*/
const moment = require('moment');

module.exports = [
  {
    name: 'Amanda',
    description: '9, 7 and 5 reps of muscle-ups and snatches (135/95lbs)',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['muscle-up','snatch'],
    repScheme: [9,7,5],
    roundMultiplier: 2,
    weights: {snatch: '135/95'},
    linksToMovement: ['http://wodwell.com/wod/amanda/'],
    categories: ['gymanastics','olympic-lifting','barbell','rings','couplet'],
    // // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    modality: ['couplet']
  },
  {
    name: 'Angie',
    description: '100 pull-ups, 100 push-ups, 100 sit-ups, 100 air squats',
    timeScheme: 'For Time',
    averageTime: '30 minutes',
    movements: ['pull-up','push-up','sit-up','air-squat'],
    repScheme: [100,100,100,100],
    roundMultiplier: 1,
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/angie/'],
    categories: ['gymanastics','pull-up'],
    // warmUps: [],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['quadlet']
  },
  {
    name: 'Barbara',
    description: '5 rounds for time 20 pull-ups, 30 push-ups, 40 sit-ups, 50 air-squats, 3 minutes rest',
    timeScheme: 'For Time',
    averageTime: '30 minutes',
    movements: ['pull-up','push-up','sit-up','air-squat'],
    repScheme: [20,30,40,50],
    roundMultiplier: 5,
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/barbara/'],
    categories: ['gymanastics','pull-up','push-ups','sit-ups','air-squats'],
    // warmUps: [],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['quadlet']
  },
  {
    name: 'Chelsea',
    description: '5 pull-ups, 10 push-ups, 15 air-squats',
    timeScheme: 'EMOM',
    averageTime: '20 minutes',
    timeCap: true,
    movements: ['pull-up','push-up','air-squat'],
    repScheme: [5,10,15],
    roundMultiplier: 1,
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/chelsea/'],
    categories: ['pull-ups', 'push-ups', 'air-squats','gymnastics'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Cindy',
    description: '20 minutes of 5 pull-ups, 10 push-ups, 15 air-squats',
    timeScheme: 'AMRAP',
    averageTime: '20 minutes',
    timeCap: true,
    movements: ['pull-up','push-up','air-squat'],
    repScheme: [5,10,15],
    roundMultiplier: 1,
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/cindy/'],
    categories: ['gymnastics','bodyweight','pull-ups','push-ups','air-squats','monostructural'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Diane',
    description: '21 deadlifts, 21 handstand push-ups, 15 deadlifts, 15 handstand push-ups, 9 deadlifts, 9 handstand push-ups',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['deadlift','handstand-push-up'],
    repScheme: [21,15,9],
    roundMultiplier: 2,
    weights: {deadlift: 225 },
    linksToMovement: ['http://wodwell.com/wod/diane/'],
    categories: ['deadlifts','handstand-push-ups','gymnastics'],
    // warmUps: ['KB deadlifts','kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['couplet']
  },
  {
    name: 'Elizabeth',
    description: '21 squat cleans, 21 ring-dips, 15 squat cleans, 15 ring-dips, 9 squat cleans, 9 ring-dips',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['squat-clean','ring-dip'],
    repScheme: [21,15,9],
    roundMultiplier: 2,
    weights: {'squat-cleans': '135/95' },
    linksToMovement: ['http://wodwell.com/wod/elizabeth/'],
    categories: ['squat cleans','ring-dips','gymanastics'],
    // warmUps: ['KB deadlifts','kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['couplet']
  },
  {
    name: 'Eva',
    description: '5 rounda Run 800 meters, 30 Kettlebell swings, 30 pullups',
    timeScheme: 'For Time',
    averageTime: '10 minutes',
    movements: ['run','kettlebell-swing','pull-up'],
    repScheme: [30,30],
    distance: 800,
    roundMultiplier: 5,
    weights: {'kettlebell': '70/53'},
    linksToMovement: ['http://wodwell.com/wod/eva/'],
    categories: ['run','kettlebell-swing','pull-up','monostructural','gymanastics'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Fran',
    description: '21 thrusters, 21 pull-ups, 15 thrusters, 15 pull-ups, 9 thrusters, 9 pull-ups',
    timeScheme: 'For Time',
    averageTime: '3 minutes',
    movements: ['pull-up','thruster'],
    repScheme: [21,15,9],
    roundMultiplier: 2,
    weights: {thruster: '95/65'},
    linksToMovement: ['http://wodwell.com/wod/fran/'],
    categories: ['gymanastics','pull-up','gymanastics'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['couplet']
  },
  {
    name: 'Grace',
    description: '30 ground-to-overheads clean and jerk',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['ground-to-overhead','clean-jerk'],
    repScheme: [30],
    roundMultiplier: 1,
    weights: {'clean-and-jerk': '135/95'},
    linksToMovement: ['http://wodwell.com/wod/grace/'],
    categories: ['barbell', 'clean-and-jerk'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['single']
  },
  {
    name: 'Gwen',
    description: '15-12-9 clean and jerk',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['ground-to-overhead','clean-jerk'],
    repScheme: [15,12,9],
    roundMultiplier: 1,
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/gwen/'],
    categories: ['barbell', 'clean-and-jerk'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['single']
  },
  {
    name: 'Helen',
    description: '3 rounds 400m run, 21 kettlebell swings, 12 pull-ups',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['run','kettlebell-swing','pull-up'],
    repScheme: [21,12],
    distance: 400,
    roundMultiplier: 3,
    weights: {'kettlebell': '53/35'},
    linksToMovement: ['http://wodwell.com/wod/helen/'],
    categories: ['run','kettlebell-swing','pull-up','monostructural','gymanastics'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Isabel',
    description: '30 ground-to-overheads snatch',
    timeScheme: 'For Time',
    averageTime: '5 minutes',
    movements: ['ground-to-overhead','snatch'],
    repScheme: [30],
    roundMultiplier: 1,
    weights: {snatch: '135/95'},
    linksToMovement: ['http://wodwell.com/wod/isabel/'],
    categories: ['barbell','snatch','power-snatch'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['single']
  },
  {
    name: 'Jackie',
    description: '1000m row, 50 thrusters, 30 pull-ups',
    timeScheme: 'For Time',
    averageTime: '12 minutes',
    movements: ['row','thruster','pull-up'],
    repScheme: [50,30],
    distance: 1000,
    weights: {thruster: '45'},
    linksToMovement: ['http://wodwell.com/wod/jackie/'],
    categories: ['barbell','snatch','monostructural'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Karen',
    description: '150 wallballs',
    timeScheme: 'For Time',
    averageTime: '10 minutes',
    movements: ['wallball'],
    repScheme: [20],
    roundMultiplier: 1,
    weights: {thruster: '45'},
    linksToMovement: ['http://wodwell.com/wod/jackie/'],
    categories: ['wallball'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['single']
  },
  {
    name: 'Kelly',
    description: '5 rounds Run 400 meters, 30 box jump, 24 inch box, 30 Wall ball shots, 20 pound ball',
    timeScheme: 'For Time',
    averageTime: '12 minutes',
    movements: ['run','box-jump','wallball'],
    repScheme: [30,30],
    distance: 400,
    roundMultiplier: 5,
    weights: {'wallball': '20/14'},
    linksToMovement: ['http://wodwell.com/wod/kelly/'],
    categories: ['run','box-jump','wallballs','monostructural'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Linda',
    description: '10,9,8,7,6,5,4,3,2,1 reps of Deadlift 1.5 BW, Bench BW, Clean 3/4 BW',
    timeScheme: 'For Time',
    averageTime: '10 minutes',
    movements: ['deadlift','bench','clean'],
    repScheme: [10,9,8,7,6,5,4,3,2,1],
    roundMultiplier: 3,
    weights: {deadlift: 'bodyweight',bench: 'bodyweight', clean: 'bodyweight'},
    linksToMovement: ['http://wodwell.com/wod/linda/'],
    categories: ['barbell','deadlift','bench','clean','3-bars-of-death'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Lynne',
    description: '5 rounds for max reps, Bench press BW, pull-ups',
    timeScheme: 'For Time',
    averageTime: '10 minutes',
    movements: ['bench','pull-up'],
    repScheme: [],
    roundMultiplier: 5,
    weights: {bench: 'bodyweight'},
    linksToMovement: ['http://wodwell.com/wod/lynne/'],
    categories: ['bench','pull-ups'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['couplet']
  },
  {
    name: 'Mary',
    description: '5 Handstand push-ups, 10 1-legged squats, 15 Pull-ups',
    timeScheme: 'AMRAP',
    averageTime: '20 minutes',
    timeCap: true,
    movements: ['handstand-push-up','pistol-squat','pull-up'],
    repScheme: [5,10,15],
    weights: {},
    linksToMovement: ['http://wodwell.com/wod/mary/'],
    categories: ['push-ups','pistol-squat','pull-up','gymanastics'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['triplet']
  },
  {
    name: 'Nancy',
    description: '5 rounds 400 meter run, Overhead squat',
    timeScheme: 'For Time',
    averageTime: '8 minutes',
    movements: ['run','overhead-squat'],
    repScheme: [15],
    distance: 400,
    roundMultiplier: 5,
    weights: {ohs: '95/65'},
    linksToMovement: ['http://wodwell.com/wod/nancy/'],
    categories: ['run','overhead-squat','monostructural'],
    // warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension'],
    date: moment().format('YYYY-MM-DD_HH:MM:ss_dddd'),
    modality: ['couplet']
  }
];
