class Api::V1::ListsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User
  before_action :set_list, only: [ :show, :destroy ]

  def index
    @lists = policy_scope(List)
  end

  def show; end

  def destroy
    @list.destroy
    head :no_content
  end

  private

  def set_list
    @list = List.find(params[:id])
    authorize @list # For Pundit
  end
end