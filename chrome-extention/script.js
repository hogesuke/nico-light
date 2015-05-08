window.onload = function () {
  var marquee  = document.getElementsByClassName('textMarqueeOuter').item(0);
  var playlist = document.getElementById('playlist');

  marquee.removeChild(marquee.childNodes.item(0));
  playlist.parentNode.removeChild(playlist);
};
