const _ = require('lodash');
const moment = require('moment');
const warmups = require('./data/warmups');

const props = {
  name: 'name',
  description: 'description',
  timeScheme: 'timeScheme',
  averageTime: 'averageTime',
  movements: 'movements',
  repScheme: 'repScheme',
  weights: 'weights',
  linksToMovement: 'linksToMovement',
  categories: 'categories',
  warmUps: 'warmUps',
  date: 'date'
};

class Workout {
  get TYPE() { return 'Workout'; }
  get PropNames() { return Object.keys(props); }

  /**
   * @constructor
   * @param {Object} params
   */
  constructor(params) {
    params = params || {};
    Object.keys(props).forEach((prop) => {
      if (params.hasOwnProperty(props[prop])) this[prop] = params[props[prop]];
    });

    this.name            = params.name;
    this.description     = params.description;
    this.timeScheme      = params.timeScheme || 'For time';
    this.timeCap         = params.timeCap || false; // boolean
    this.averageTime     = params.averageTime || '5min';
    this.movements       = params.movements || [];
    //TODO breakdown timecapped workouts - (timecap / (time per movement * movements))
    this.repScheme       = params.repScheme || []; // rep per round breakdown; separate distance
    this.distance        = params.distance || 0; // distance per round
    this.roundMultiplier = params.roundMultiplier || 0;
    this.weights         = params.weights || {};
    this.linksToMovement = params.linksToMovement || [];
    this.categories      = params.categories || [];
    this.modality        = params.modality || [];
    this.warmUps         = this.populateWarmUps(this.movements) || [];
    this.date            = params.date || moment().format('YYYY-MM-DD_HH:MM:ss_dddd');
  }
  populateWarmUps(movements) {
    let warmupMovements = [];
    _.forEach(movements, (mvmt) => {
      _.forEach(warmups, (warmup) => {
        if(_.includes(warmup.forMovements, mvmt)) {
          warmupMovements.push(warmup.name);
        }
      });
    });
    return warmupMovements;
  }
  /**
   * get total reps of all movements
   *
   * @returns {number}
   */
  getReps() {
    const calcReps = _.reduce(this.repScheme, (sum, n) => {
      return sum + n;
    }, 0);
    const totalDist = (this.roundMultiplier !== 0) ? this.distance * this.roundMultiplier : this.distance;
    const totalReps = (this.roundMultiplier !== 0) ? calcReps * this.roundMultiplier : calcReps;
    return `Total Reps: ${totalReps}, Total Distance: ${totalDist} meters`;
  }
}

module.exports = Workout;
