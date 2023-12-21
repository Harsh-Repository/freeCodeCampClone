import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./courseDetails.css";

export default function CourseDetails() {
  const [courseDetails, setCourseDetails] = useState("");
  const { id } = useParams();
  // const [courseName, setCourseName] = useState("");
  // const [icon, setIcon] = useState("");
  // const [courseDescription, setCourseDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/courseData/course/${id}`)
      .then((res) => setCourseDetails(res.data));
  }, [id]);

  return (
    <>
      <div className="courseDetailsPage" key={courseDetails.id}>
        <h1 className="courseName">{courseDetails.courseName}</h1>
        <br />
        <p className="icon">{courseDetails.courseIcon}</p>
        <br />
        <div>
          <p className="description">
            {courseDetails.courseDescription}
          </p>
          <br />
        </div>
      </div>
    </>
  );
}
