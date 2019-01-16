class AddWatchedToMovies < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :watched, :boolean
    add_reference :movies, :user
  end
end
