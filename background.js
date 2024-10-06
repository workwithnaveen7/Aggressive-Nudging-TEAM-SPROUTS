chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the tab's URL has changed and is a Google search result page
    if (changeInfo.status === 'complete' && tab.url.includes('https://www.google.com/search')) {
      
      // Inject the content script into the Google search results page
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']  // This will run the content script on the page
      });
    }
  });
  