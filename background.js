chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the URL matches any of the pornographic websites in the blacklist
    if (details.url.match(/umeskiasoftwares\.com|instagram\.com/)) {
      // Block the request
      return {cancel: true};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
git