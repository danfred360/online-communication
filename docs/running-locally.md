# running locally

to [load an unpacked extension](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked) in chrome:

1. navigate to [chrome://extensions](chrome://extensions)
2. toggle developer mode on
3. click `load unpacked` button and select the directory containing the unpacked extension source  

### changes to these require the extension to be reloaded

- manifest
- service worker
- content scripts and the host page

### don't need to reload for

- js component? (the popup)
- options page
- changes to html