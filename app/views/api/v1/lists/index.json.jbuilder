json.array! @lists do |list|
  json.extract! list, :id
  json.user_1 do
    json.id list.user_1.id
    json.name list.user_1.name
    json.photo list.user_1.photo
  end
  json.user_2 do
    json.id list.user_2.id
    json.name list.user_2.name
    json.photo list.user_2.photo
  end
end
