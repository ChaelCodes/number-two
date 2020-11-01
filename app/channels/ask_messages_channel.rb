class AskMessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "ask_messages_#{params['twitch_channel']}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
