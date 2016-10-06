const should = require('chai').should();
const Workout = require('../workoutModel');

describe('Workout model class', () => {
  const amanda = {
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
    warmUps: ['kitchen-sink-stretch','shoulder-pass-throughs','air-squat','banded-OH-extension']
  };

  describe('initialization',() => {
    let wm;

    before(() => {
      wm = new Workout(amanda);
    });

    it('has name property', () => {
      wm.name.should.eql('Amanda');
    });
    it('has description property', () => {
      should.exist(wm.description);
    });
    it('has timeScheme property', () => {
      should.exist(wm.timeScheme);
    });
    it('has averageTime property', () => {
      should.exist(wm.averageTime);
    });
    it('has averageTime property', () => {
      should.not.exist(wm.timeCap);
    });
    it('has movements property', () => {
      should.exist(wm.movements);
    });
    it('has repScheme property', () => {
      should.exist(wm.repScheme);
    });
    it('has roundMultiplier property', () => {
      should.exist(wm.roundMultiplier);
    });
    it('has weights property', () => {
      should.exist(wm.weights);
    });
    it('has linksToMovement property', () => {
      should.exist(wm.linksToMovement);
    });
    it('has categories property', () => {
      should.exist(wm.categories);
    });
    it('has warmUps property', () => {
      should.exist(wm.warmUps);
    });
    it('has date property', () => {
      should.exist(wm.date);
    });
  });
});
