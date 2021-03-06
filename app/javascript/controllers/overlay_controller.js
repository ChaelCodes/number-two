// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="comfy">
//   <h1 data-target="comfy.output"></h1>
// </div>

import { Controller } from "stimulus"
import { buildCurrentAskChannel } from "../channels/current_ask_channel"
import { buildCurrentTodoChannel } from "../channels/current_todo_channel"
import { buildChatOverlayMessagesChannel } from "../channels/chat_overlay_messages_channel"

export default class extends Controller {
  connect() {
    let channel = this.data.get('channel');

    buildCurrentAskChannel(channel);
    buildCurrentTodoChannel(channel);
    buildChatOverlayMessagesChannel(channel);
  }
}
