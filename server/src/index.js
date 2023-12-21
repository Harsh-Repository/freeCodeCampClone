const path = require("path");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// dotenv.config();
dotenv.config({ path: path.resolve(__dirname, './.env') });
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./static")));

mongoose
  .connect(process.env.MONGODB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


//Routes of APIs
const authRoute = require("./routes/userRoute")
const courseRoute = require("./routes/courseRoute")

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/courseData", courseRoute)


//All other GET requests not handled before will return to react app
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./static","index.html"))
})

app.listen(PORT, () => {
  console.log(`SERVER running on PORT ${PORT}`);
});
