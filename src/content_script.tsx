import { csHandleActiveComments } from './listeners/content_script/csHandleActiveComments'
import { messageTypes } from './utils/messageTypes'

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.type === messageTypes.alert) {
    alert(msg.message)
  }

  if (msg.type === messageTypes.handleActiveComments) {
    csHandleActiveComments()
  }
})
