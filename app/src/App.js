import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./authContext/AuthContext";
import CourseDetails from "./courseDetails/courseDetails";
import Courses from "./coursesMenu/courses";
import HomPage from "./homePage/home";
import Navbar from "./navbar/nav";
import SignIn from "./signIn/signIn";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<HomPage />} />
            <Route path="*" element={<SignIn />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomPage />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/menu" element={<Courses />} />
            <Route exact path="/course/:id" element={<CourseDetails />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
