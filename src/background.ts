import { background_handleTab } from './listeners/background/bgHandleTab'
import { background_getCurrentTab } from './utils/background_getCurrentTab'

function polling() {
  setTimeout(polling, 1000 * 30)
}

polling()

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    background_handleTab(tab)
  })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  background_handleTab(tab, {
    type: 'open',
  })
})

// listen to focused windows tab
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // No window is focused. All Chrome windows are blurred.
    return
  }
  const tab = await background_getCurrentTab()
  background_handleTab(tab)
})
