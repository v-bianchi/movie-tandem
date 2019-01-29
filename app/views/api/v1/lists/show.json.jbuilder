json.extract! @list, :id
json.user_1 do
  json.id @list.user_1.id
  json.name @list.user_1.name
end
json.user_2 do
  json.id @list.user_2.id
  json.name @list.user_2.name
end
json.movies @list.movies.sort_by { |elt|  elt.created_at } do |movie|
  json.extract! movie, :id, :title, :year, :genre, :overview, :poster_path, :watched, :created_at
  json.added_by do
    json.extract! movie.user, :id, :name
  end
end