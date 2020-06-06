let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let workoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    exercises: [
        {
        type: {type: String, required: true},
        name: {type: String, required: true},
        duration: {type: Number, required: true},
        weight: {type: Number, required: false},
        reps: {type: Number, required: false},
        sets: {type: Number, required: false},
        distance: {type: Number, required: false}
        }
    ]
});

let Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;