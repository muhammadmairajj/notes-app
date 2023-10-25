import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const PORT = env.PORT;

mongoose
  .connect(env.MONGODB_URI)
  .then(() => console.log("Mongoose Successfully Connected"))
  .catch(console.error);

app.listen(PORT, () => {
  console.log("server running on PORT: " + PORT);
});
