chrome.runtime.onInstalled.addListener(function() {
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the URL matches any of the pornographic websites in the blacklist
    //INTRODUCE A JSON FILE WITH THE LIST OF URLS TO BE BLOCKED
    if (details.url.match(/umeskiasoftwares\.com|instagram\.com/)) {
      // Block the request
      return {cancel: true};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
});