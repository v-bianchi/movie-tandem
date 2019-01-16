class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def requests_sent
    Request.where(sender: self)
  end

  def requests_received
    Request.where(receiver: self)
  end
end
