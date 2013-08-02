/**
 * This background file is necessary to access chrome.tabs, and for creating new tabs in browser
 * It can respond to messages from the content_scripts
 */

chrome.extension.onMessage.addListener(
  function(request, sendResponse) {

    /**
     * open_url_in_tab
     * Example Use from content_script (hn.js):
     * chrome.extension.sendMessage({
            open_url_in_tab: {
              url: 'http://google.com', 
              location: window.location.origin
            }
          });
     * @param url       URL can be full url such as http://google.com, or local like /item?id=123123
     * @param location  Must be value window.location.origin from the content_scripts.
     *
     * The reason for origin versus window.location.href, is so that links to comments & site submissions
     * will still work from other pages such as /newest and /jobs.
     */
    if (request.open_url_in_tab) {
      var url = request.open_url_in_tab.url;

      // Check to see if it is linking locally to a "item?id=123123" style url (comments, jobs, or site submission)
      // If so, prepend the window location to url
      if (url.substring(0,4) == "item") {
        url = request.open_url_in_tab.location + "/" + url;
      }
      
      var tab_options = {
          url: url,
          active: false // Open in background
      };

      chrome.tabs.create(tab_options);
    }
  }
);