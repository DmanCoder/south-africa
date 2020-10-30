/*!
 * Run a callback function after scrolling has stopped
 * @param  {Function} callback The function to run after scrolling
 */

import { isFirefox } from '../utils/checkBrowser';

const scrollStop = (callback) => {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  var isScrolling;

  // Event type
  const eventType = !isFirefox ? 'mousewheel' : 'DOMMouseScroll';

  // Listen for scroll events
  window.addEventListener(
    eventType,
    (event) => {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(() => {
        // Run the callback
        callback(event);
      }, 500);
    },
    false
  );
};

export default scrollStop;
