const app = require('./app');
const database = require('./database/database');
const errorHandler = require('./middleware/errorHandler');
require("dotenv").config();

// database connection
database();



// Assign the port to server vailable


const server=app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));


process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    process.exit(1);
  });

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
// Error handler middleware

app.use(errorHandler);



