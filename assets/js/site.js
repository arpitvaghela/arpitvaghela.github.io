/* Open off-site links in a new tab, safely. */
(function () {
  'use strict';
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (a.hostname === window.location.hostname) return;
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
})();
