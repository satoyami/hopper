const _ = require('lodash');
const moment = require('moment');

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

    this.name = params.name;
    this.description = params.description;
    this.timeScheme = params.timeScheme || 'For time';
    this.averageTime = params.averageTime;
    this.movements = params.movements || [];
    this.repScheme = params.repScheme || [];
    this.weights = params.weights || {};
    this.linksToMovement = params.linksToMovement || [];
    this.categories = params.categories || [];
    this.warmUps = params.warmUps || [];
    this.date = params.date || moment().format('YYYY-MM-DD_HH:MM:ss_dddd');
  }

  /**
   * get total reps of all movements
   *
   * @returns {number}
   */
  getReps() {
    return _.reduce(this.repScheme, (sum, n) => {
      return sum + n;
    }, 0);
  }
}

module.exports = Workout;
