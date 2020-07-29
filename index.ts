import fnSum from "./routes/routeSum";
import fnIndex from "./routes/routeIndex";
import fnUppercase from "./routes/routeUppercase";
import sum from "./business/sum";
const express = require("express");

const app = express();
const port = 3000;

sum(2, 1);

// Routes
app.get("/", fnIndex);
app.get("/api/sum", fnSum);
app.get("/api/uppercase", fnUppercase);

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
