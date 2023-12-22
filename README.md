# freeCodeCampClone ~ *Platform that helps you learn coding for free!!*
 
A website for learning coding and softer development for free. Users can login/signup and start learning to code.

 ## Features
 - User can create a new account.
 - User can log in/logout.
 - User can view the courses.
   ![image](https://github.com/Harsh-Repository/freeCodeCampClone/assets/98148017/ad97ed66-79e6-427e-8118-4981baf19dc2)
 - User can view the course details on clicking any courses they like. 
   ![image](https://github.com/Harsh-Repository/freeCodeCampClone/assets/98148017/763dee3e-8569-4dd6-9bb9-972f7813d4e0)
 - REST APIs built to handle the user requests for fetching course details.
  
 ## Technologies used
 - MongoDB for the database.
 - React for the front end.
 - Nodejs/Express for the backend.
 - JWT token-based authentication.

## API Endpoints 
- `/api/v1/auth/login` : for handling login functionality
- `/api/v1/auth/register` : for handling user registration
- `/api/v1/courseData/courses` : for listing all courses
- `/api/v1/courseData/course/${id}` : for viewing course details further

## Deployment details
***`Demo Link:`*** https://free-code-camp-clone-chi.vercel.app/

Front-end deployed using `vercel.com`.


## How to Deploy locally on your machine?
- Download the zip file of this repo.
- Unzip it and run `"npm install"` using the terminal inside the app & server folders to install all project dependencies.
- Create a `.env` file inside the src folder of the server. With the following details,
  - `MONGO_STRING="your_mongodb_url_with_credentials"`
  - `SECRET_KEY="keep_this_key_secret_and_lengthy"`
  - `PORT=3001`
- Replace the endpoints in axios calls of API inside the app folder with http://localhost:3001 URL (*provided backend is running on 3001 port*).
- Now run `"npm start"` in both the app & server folders.
