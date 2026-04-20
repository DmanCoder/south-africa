/*!
 * Run a callback function after scrolling has stopped
 * @param  {Function} callback The function to run after scrolling
 */

const scrollStop = (callback) => {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  let isScrolling;

  // Listen for scroll events
  window.addEventListener(
    'wheel',
    (event) => {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(() => {
        // Run the callback
        callback(event);
      }, 400);
    },
    { passive: true }
  );
};

export default scrollStop;
