class Request < ApplicationRecord
  belongs_to :sender, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  validates :receiver_id, :uniqueness: { scope: :sender_id, message: "You already sent an invitation to this user!" }
end
