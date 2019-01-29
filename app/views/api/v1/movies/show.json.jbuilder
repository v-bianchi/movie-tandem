json.extract! @movie, :id, :list_id, :title, :year, :genre, :overview, :poster_path, :watched, :created_at
json.added_by do
  json.extract! @movie.user, :id, :first_name, :last_name
end