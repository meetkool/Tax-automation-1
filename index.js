import express, { json, urlencoded } from "express";
import cors from "cors";

import routes from "./routes/index.js";
import { PORT } from "./utils/constants.js";

const app = express();

app.use(cors());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(
  json({
    inflate: false,
  })
);

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});