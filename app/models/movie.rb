class Movie < ApplicationRecord
  belongs_to :list
  belongs_to :user

  validates :title, uniqueness: { scope: :list_id, message: "You have already added this movie to the watchlist!" }
end
