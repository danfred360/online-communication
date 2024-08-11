function monitorContent() {
    const bodyContent = document.body.innerText || "";
    console.log("Page content:", bodyContent);
  
    // you can send this content back to the background or popup if needed
    chrome.runtime.sendMessage({ content: bodyContent });
  }
  
  // monitor the content when the script is loaded
  monitorContent();
  
  // optionally, set up a MutationObserver to monitor changes
  const observer = new MutationObserver(monitorContent);
  observer.observe(document.body, { childList: true, subtree: true });
  