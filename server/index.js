require("dotenv").config();
require("./app/database");
const { app } = require("./app");

function boostrap() {
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

boostrap();
