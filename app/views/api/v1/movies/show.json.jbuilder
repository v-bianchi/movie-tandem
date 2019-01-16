json.extract! @movie, :id, :list_id, :title, :year, :genre, :overview, :watched
json.added_by do
  json.extract! @movie.user, :id, :first_name, :last_name
end