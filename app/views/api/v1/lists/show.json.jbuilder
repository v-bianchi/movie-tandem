json.extract! @list, :id, :user_1_id, :user_2_id
json.movies @list.movies do |movie|
  json.extract! movie, :id, :title, :year, :genre, :overview, :watched
  json.added_by do
    json.extract! movie.user, :id, :first_name, :last_name
  end
end