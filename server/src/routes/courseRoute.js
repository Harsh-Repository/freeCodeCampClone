const router = require("express").Router();
const CourseModel = require("../data/models/courseModel")

router.get("/courses", async(req,res) => {
    let allCourses = await CourseModel.find({})
    res.json(allCourses)
})

router.get("/course/:id", async(req, res) =>{
    let courseData = await CourseModel.findById(req.params.id).exec();
    res.json(courseData);
})

module.exports = router;