const _ = require('lodash');
const mocha = require('mocha');
const sinon = require('sinon');
const should = require('chai').should();
const Hopper = require('../../models/hopper');
const WorkoutModel = require('../../models/workoutModel');
const workouts = require('../../data/workouts');

describe('Hopper Class', () => {
  const sandbox = sinon.sandbox.create();
  const expected_workout_result = {"id": "1", "name": "amanda", "description": "9, 7 and 5 reps of muscle-ups and snatches (135/95lbs)", "timeScheme": "For Time", "averageTime": "5 minutes", "movements": ["muscle-up","snatch"], "repScheme": [9,7,5], "roundMultiplier": 2, "weights": {"snatch": "135/95"}, "categories": ["gymnastics","olympic-lifting","barbell","rings","couplet"], "date": ""}
  
  describe('#spin', () => {
    const hopper = new Hopper();
    let response;

    before(() => {
      sandbox.stub(hopper, '_getRandomNum')
        .returns(Promise.resolve(1));
      return hopper.spin().then(
        (result) => {
          response = result;
          return response;
        }
      );
    });
    
    after(() => {
      sandbox.restore();
    });

    it('returns response object', () => {
      response.should.be.instanceOf(Object);
    });
  
    it('returns mongodb _id', () => {
      should.exist(response._id);
    });
    
    it('returns response with name', () => {
      response.name.should.eql('amanda');
    });
  });

  describe('#selectByName', () => {
    const hopper = new Hopper();
    let namedWorkout;
    let selectedWorkoutResult;
    let selectedWorkoutError;

    context('valid name', () => {
      before(() => {
        namedWorkout = 'fran';
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
            selectedWorkoutError = result;
            return selectedWorkoutError;
          }
        );
      });

      it('returns error', () => {
        selectedWorkoutError.should.eql('no workout found by name: WinniePooh');
      });
    });

  });

  describe('#selectByMovement', () => {
    const hopper = new Hopper();
    const movement = 'push-up';
    let selectedWorkoutResult;

    before(() => {
       return hopper.selectByMovement(movement).then(
         (result) => {
           selectedWorkoutResult = result;
           return selectedWorkoutResult;
         }
       )
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

  describe('#_getRandomNum', () => {
    const hopper = new Hopper();
    let response;

    before(() => {
      return hopper._getRandomNum().then(
        (result) => {
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
});
