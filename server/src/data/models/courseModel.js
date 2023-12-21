const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName: {type: String, require: true},
    courseIcon: {type:String, require: true},
    courseDescription: {type:String, require: true},
});

module.exports = mongoose.model("CourseData", CourseSchema)
