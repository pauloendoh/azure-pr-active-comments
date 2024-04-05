import { isValidAzurePrUrl } from '../../utils/azure/isValidAzurePrUrl'
import { messageTypes } from '../../utils/messageTypes'

export const background_handleTab = async (tab: chrome.tabs.Tab) => {
  if (!tab.url || !tab.id) return

  if (isValidAzurePrUrl(tab.url)) {
    chrome.tabs.sendMessage(tab.id, {
      type: messageTypes.handleActiveComments,
    })
  }
}
