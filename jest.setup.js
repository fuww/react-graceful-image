// Ensure the tests will fail
// if there is any error or warn
const throwError = message => {
  throw new Error(message);
};

global.console.error = throwError;
global.console.warn = throwError;

// In Node v7 unhandled promise rejections will terminate the process
if (!process.env.CRASH_ON_UNHANDLED_REJECTION) {
  // Makes the script crash on unhandled rejections instead of silently
  // ignoring them. In the future, promise rejections that are not handled will
  // terminate the Node.js process with a non-zero exit code.
  process.on("unhandledRejection", throwError);
}
