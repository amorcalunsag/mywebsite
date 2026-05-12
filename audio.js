
/**
 * Stops other gallery audio when one starts (optional UX).
 */
(function () {
  document.querySelectorAll("audio[data-gallery-group]").forEach(function (audio) {
    audio.addEventListener("play", function () {
      document.querySelectorAll("audio[data-gallery-group]").forEach(function (other) {
        if (other !== audio) {
          other.pause();
        }
      });
    });
  });
})();
