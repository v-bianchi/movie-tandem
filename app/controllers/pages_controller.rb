class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  def home
    @user_data = {
      id: current_user.id,
      email: current_user.email,
      token: current_user.authentication_token
    } if user_signed_in?
  end
end
