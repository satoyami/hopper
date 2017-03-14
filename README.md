[ ![Codeship Status for satoyami/hopper](https://app.codeship.com/projects/b6062ee0-da0f-0134-0795-3a4993b56c58/status?branch=master)](https://app.codeship.com/projects/203571)
# Hopper

## Description: 
### Problem:
As a part-time strength & conditioning coach, coming up with workouts 
can be an mental/time investment.My goal is to create an application 
to aid me in creating workouts with minimal effort on my part but with 
my criteria/taste respected.
### Solution:
Create application to randomly select crossfit/functional workouts. 
### Purpose:
Primarily a sandbox for a handful of javascript frameworks and ES6
features as well as a POC of generating workouts, in a future release,
to later pass to machine learning API.

### Technologies:
- [ ] Hapi.js: API framework
    - [ ] breakout routes
    - [ ] breakout handlers(controllers)
    - [ ] breakout DAO
    - [ ] add logging(Good/components)
- [x] Node.js v6.6.0: js engine
- [x] Material Design Lite: Google's *bootstrap* library for 'look and feel'
- [x] Handlebars: HTML template engine
- [ ] Data Models
    - [x] Girls workouts
    - [ ] Heroes workouts
    - [ ] Daily WODs (some type of feed)
    - [ ] other WOD generators
    - [ ] report metrics
- [ ] Database/DAO: TBD (Mongodb/Couchdb/RethinkDB)
    - [ ] connect to DB
    - [ ] upload data
- [ ] Metrics reporting/tracking
    - [ ] body weight
    - [ ] diet (caloric intake)
    - [ ] sleep (duration/quality)
    - [ ] caloric expenditure
    - [ ] blood markers
    - [ ] hydration
    - [ ] supplements
- [ ] Caching: TBD (Redis)
- [x] Continuous Integration: [Codeship](http://www.codeship.com)
- [x] Testing: Mocha, Chai, Sinon