class Api::V1::RequestsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User
  before_action :set_request, only: [ :accept, :destroy ]

  def index
    @requests = policy_scope(Request)
  end

  def create
    @request = Request.new(request_params)
    @request.sender = current_user
    authorize @request
    if @request.save
      render :show, status: :created
    else
      render_error(@request)
    end
  end

  def accept
    @list = List.new(user_1: @request.sender, user_2: @request.receiver)
    if @list.save
      @request.destroy
      render 'api/v1/lists/show', status: :created
    else
      render_error(@list)
    end
  end


  def destroy
    @request.destroy
    head :no_content
  end

  private

  def set_request
    @request = Request.find(params[:id])
    authorize @request  # For Pundit
  end

  def request_params
    params.require(:request).permit(:receiver_id)
  end

  def render_error(entity)
    render json: { errors: entity.errors.full_messages },
      status: :unprocessable_entity
  end
end