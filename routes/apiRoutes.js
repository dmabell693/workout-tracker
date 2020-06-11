const db = require("../models");

module.exports = function(app) {
    // api route to get all workouts
    app.get("/api/workouts", function(req, res) {
        // return all indexes in the "workouts" collection
        db.Workout.find({}).then(function(dbWorkouts) {
            // filter through each workout
            dbWorkouts.forEach(workout => {
                let totalDuration = 0;
                // filter through each exercise in each workout to find each exercise duration
                workout.exercises.forEach(exercise => {
                  //return total duration for each workout
                  totalDuration += exercise.duration;
                  workout.totalDuration = totalDuration;
                });
              });
            // send workouts with updated (but not saved) totalDuration times to server
            res.json(dbWorkouts);
        });
    });

    app.get("/api/workouts/range", function(req, res) {
        // get all workouts
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });

    app.put("/api/workouts/:id", function(req, res) {
        // find and update index using param id
        db.Workout.updateOne(
            { _id: req.params.id }, 
            // update exercises array in the identified index
            { $push: { exercises: req.body } }
            ).then(function(dbWorkouts) {
          res.json(dbWorkouts);
        });
      });

    app.post("/api/workouts", function(req, res) {
        // create new index (workout) in the collection (workouts)
        db.Workout.create(req.body, function(error, data) {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
                console.log(data);
            }
        });
    });
}