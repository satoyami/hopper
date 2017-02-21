const _ = require('lodash');
const should = require('chai').should();
const Hopper = require('../hopper');
const WorkoutModel = require('../models/workoutModel');
const workouts = require('../data/girls');

describe('Hopper Class', () => {

  describe('#spin',() => {
    const hopper = new Hopper();
    let response;

    before(() => {
      return hopper.spin().then(
        (result) => {
          response = result;
          return response;
        }
      );
    });

    it('returns response', () => {
      should.exist(response);
    });

    it('returns response object', () => {
      response.should.be.instanceOf(Object);
    });

    it('returns response with name', () => {
      should.exist(response.name);
    });
  });

  describe('#selectByName', () => {
    const hopper = new Hopper();
    let namedWorkout;
    let selectedWorkoutResult;

    context('valid name', () => {
      before(() => {
        namedWorkout = 'Amanda';
        return hopper.selectByName(namedWorkout).then(
          (result) => {
            selectedWorkoutResult = result;
            return selectedWorkoutResult;
          }
        );
      });

      it('returns selected workout', () => {
        selectedWorkoutResult.name.should.eql(namedWorkout);
      });
    });

    context('invalid name', () => {
      before(() => {
        namedWorkout = 'WinniePooh';
        return hopper.selectByName(namedWorkout).catch(
          (result) => {
            selectedWorkoutResult = result;
            return selectedWorkoutResult;
          }
        );
      });

      it('returns error', () => {
        selectedWorkoutResult.error.should.eql('invalid name');
      });
    });

  });

  describe('#selectByMovement', () => {
    const hopper = new Hopper();
    const movement = 'push-up';
    let selectedWorkoutResult;

    before(() => {
      selectedWorkoutResult = hopper.selectByMovement(movement);
    });

    it(`returns ${movement} workouts`, () => {
      selectedWorkoutResult.length.should.eql(4);
    });

    it(`returns workouts with ${movement} in movements`, () => {
      _.each(selectedWorkoutResult, (selected) => {
        _.includes(selected.movements, movement).should.eql(true);
      });
    });
  });

  describe('#_getRandomNum',() => {
    const hopper = new Hopper();
    const list = [1,2,3];
    let response;

    before(() => {
      return hopper._getRandomNum(list).then(
        (result) => {
          // console.log(result);
          response = result;
          return response;
        }
      );
    });

    it('returns response', () => {
      should.exist(response);
    });

    it('returns number', () => {
      response.should.be.a('number');
    });
  });

  describe('#_trimPicks',() => {
    const hopper = new Hopper();
    let list;
    let response;

    context('when pick history is more than half total workouts',() => {
      const totalWorkouts = workouts.length;

      before(() => {
        list = { data: [1,2,3,4,5,6,7,8,9,10,11,12] };
        return hopper._trimPicks(list).then(
          (result) => {
            // console.log(result);
            response = result;
            return response;
          }
        );
      });

      it('returns response', () => {
        should.exist(response);
      });

      it('returns half totalWorkouts length', () => {
        response.length.should.eql(totalWorkouts/2);
      });
    });

    context('when pick history is less than half total workouts',() => {
      before(() => {
        list = { data: [1,2,3,4,5,6,7,8] };
        return hopper._trimPicks(list).then(
          (result) => {
            // console.log(result);
            response = result;
            return response;
          }
        );
      });

      it('returns response', () => {
        should.exist(response);
      });

      it('returns list length', () => {
        response.length.should.eql(list.data.length);
      });
    });
  });
});
