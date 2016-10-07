const should = require('chai').should();
const Hopper = require('../hopper');
const workouts = require('../workouts');

describe('Hopper Class', () => {

  describe('#spin',() => {
    let hopper = new Hopper();
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

  describe('#_getRandomNum',() => {
    let hopper = new Hopper();
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
    let hopper = new Hopper();
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
