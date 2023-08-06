const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const inventoryRouter = require("./routes/inventory");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://tienlehung1080:vippro123@tienlh.wnztkj9.mongodb.net/`
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/inventory", inventoryRouter);
const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
