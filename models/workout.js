let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// create schema to be exported
let workoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    // setting exercises type to "Array" worked better than manually creating each possibility for exercises
    exercises: {type: Array, required: false},
    // set totalDuration to default value of 0 so it can be manipulated in apiRoutes
    totalDuration: {type: Number, required: false, default: 0}
});

let Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;