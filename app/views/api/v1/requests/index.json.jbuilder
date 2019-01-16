json.array! @requests do |request|
  json.extract! request, :id, :sender_id, :receiver_id
end