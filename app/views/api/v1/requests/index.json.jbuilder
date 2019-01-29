json.array! @requests do |request|
  json.extract! request, :id
  json.sender do
    json.id request.sender.id
    json.name request.sender.name
    json.photo request.sender.photo
  end
  json.receiver do
    json.id request.receiver.id
    json.name request.receiver.name
    json.photo request.receiver.photo
  end
end