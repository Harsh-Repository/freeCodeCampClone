import axios from "axios";
import React, { useEffect, useState } from "react";
import "./courses.css";

export default function Courses() {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/courseData/courses`)
      .then((res) => {
        setAllCourses(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  return (
    <>
      <div className="coursesPage">
        <h2>Welcome to freeCodeCamp.org</h2>
        <br />
        <p>"It is never too late to be what you might have been."</p>
        <p className="author">-- Mary Anne Evans</p>
        <br />
        <h4>
          Earn free verified certifications with freeCodeCamp's core curriculum:
        </h4>
        <br />
        <div>
          <ul>
            {allCourses &&
              allCourses.map((course) => (
                <><li key={course._id}>
                  <a href={`/course/${course._id}`} className="courses">
                    {course.courseIcon} ➡️ {course.courseName}
                  </a>
                </li>
                <br/></>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
