
const errorHandler = (err, req, res, next) => {
    // Log the error stack only if it's available
    if (err instanceof Error && err.stack) {
      console.error(err.stack);
    } else {
      console.error(err);
    }
  
    // Respond with a generic error message
    res.status(500).json({
      message: 'Something went wrong!',
      error: err.message ? err.message : err
    });
  };
  
  module.exports = errorHandler;
  