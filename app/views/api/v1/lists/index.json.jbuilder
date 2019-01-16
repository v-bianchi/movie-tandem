json.array! @lists do |list|
  json.extract! list, :id, :user_1_id
  json.user_2 do
    json.id list.user_2.id
    json.first_name list.user_2.first_name
    json.last_name list.user_2.last_name
  end
end
