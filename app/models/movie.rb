class Movie < ApplicationRecord
  belongs_to :list

  validates :title, :uniqueness: { scope: :list_id, message: "You have already added this movie to the watchlist!" }
end
