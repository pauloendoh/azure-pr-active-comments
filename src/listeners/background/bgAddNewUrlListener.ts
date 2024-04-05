export const bgAddNewUrlListener = async () => {
  let started = false

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    const currentUrl = tab.url

    if (!tabId || !currentUrl) return
  })
}
