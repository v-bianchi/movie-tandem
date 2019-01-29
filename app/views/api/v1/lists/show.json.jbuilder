json.extract! @list, :id
json.user_1 do
  json.id @list.user_1.id
  json.first_name @list.user_1.first_name
  json.last_name @list.user_1.last_name
end
json.user_2 do
  json.id @list.user_2.id
  json.first_name @list.user_2.first_name
  json.last_name @list.user_2.last_name
end
json.movies @list.movies.sort_by { |elt|  elt.created_at } do |movie|
  json.extract! movie, :id, :title, :year, :genre, :overview, :poster_path, :watched, :created_at
  json.added_by do
    json.extract! movie.user, :id, :first_name, :last_name
  end
end