json.extract! @request, :id
json.sender do
  json.id @request.sender.id
  json.first_name @request.sender.first_name
  json.last_name @request.sender.last_name
end
json.receiver do
  json.id @request.receiver.id
  json.first_name @request.receiver.first_name
  json.last_name @request.receiver.last_name
end