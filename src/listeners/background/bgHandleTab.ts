import { isValidAzurePrUrl } from '../../utils/azure/isValidAzurePRurl'
import { messageTypes } from '../../utils/messageTypes'

export const background_handleTab = async (
  tab: chrome.tabs.Tab,
  options?: {
    type: 'open'
  }
) => {
  if (!tab.url || !tab.id) return

  if (isValidAzurePrUrl(tab.url)) {
    chrome.tabs.sendMessage(tab.id, {
      type: messageTypes.handleActiveComments,
    })
  }
}
