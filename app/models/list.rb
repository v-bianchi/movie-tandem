class List < ApplicationRecord
  belongs_to :user_1, class_name: 'User'
  belongs_to :user_2, class_name: 'User'
  has_many :movies

  validates :user_2_id, uniqueness: { scope: :user_1_id, message: "You already have a watchlist with this user!" }

end
