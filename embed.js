// http://stackoverflow.com/a/5073966/2803757
function getParameterByName(name, href) {
  name = name
    .replace(/[\[]/, '\\\[')
    .replace(/[\]]/, '\\\]');
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(href);
  if (results === null)
    return '';
  else
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Load ?videoId from URL param
var videoId = getParameterByName('v', document.documentURI);

if (!!videoId) {
  window.location.href = 'https://webful-ltd.github.io/backgroundfox-embedder/?videoId=' + videoId;
}
