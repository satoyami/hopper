[ ![Codeship Status for satoyami/hopper](https://app.codeship.com/projects/b6062ee0-da0f-0134-0795-3a4993b56c58/status?branch=master)](https://app.codeship.com/projects/203571)
# Hopper

## Description: 
### Problem:
As a part-time strength & conditioning coach, coming up with workouts 
can be an mental/time investment.My goal is to create an application 
to aid me in creating workouts with minimal effort on my part but with 
my criteria/taste respected.
### Solution:
Create application to randomly select crossfit/HIIT/functional workouts. 
### Purpose:
Primarily a sandbox for a handful of javascript frameworks and ES6
features as well as a POC of generating workouts, in a future release,
to later pass to machine learning API.

### Technologies:
- [ ] Hapi.js: API framework
    - [x] breakout routes
    - [ ] breakout handlers(controllers)
    - [ ] add logging(Good/components)
- [x] Node.js v6.6.0: js engine
    - [x] *n* Nodejs version manager 2.1.0 
- [x] Material Design Lite: Google's *bootstrap* library for 'look and feel'
- [x] Handlebars: HTML template engine
- [ ] Decouple front-end
    - [ ] React/Angular2
- [ ] Data Models
    - [x] Girls workouts
    - [x] Heroes workouts
    - [ ] Daily WODs (some type of feed)
    - [ ] other WOD generators
    - [ ] report metrics
- [ ] Database: Mongodb
    - [x] connect to DB
    - [x] upload data
    - [ ] create test
- [ ] User metrics reporting/tracking
    - [ ] body weight
    - [ ] diet (caloric intake)
    - [ ] sleep (duration/quality)
    - [ ] caloric expenditure
    - [ ] blood markers
    - [ ] hydration
    - [ ] supplements
- [ ] Caching: TBD (Redis)
- [x] Continuous Integration: [Codeship](http://www.codeship.com)
- [ ] Testing: 
    - [x] Mocha
    - [x] Chai
    - [x] Sinon
    - [ ] Lab (Hapi version of Mocha, includes binding for coverage report)