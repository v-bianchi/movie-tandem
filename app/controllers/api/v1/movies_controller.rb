class Api::V1::MoviesController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User
  before_action :set_movie, only: [ :destroy, :toggle_watched ]

  def create
    @movie = Movie.new(movie_params)
    @movie.user = current_user
    @movie.list = List.find(params[:list_id])
    @movie.watched = false
    authorize @movie
    if @movie.save
      render :show, status: :created
    else
      render_error(@movie)
    end
  end


  def destroy
    @movie.destroy
    head :no_content
  end

  def toggle_watched
    @movie.watched = !@movie.watched
    if @movie.save
      render :show, status: :ok
    else
      render_error(@movie)
    end
  end

  private

  def set_movie
    @movie = Movie.find(params[:id])
    authorize @movie # For Pundit
  end

  def movie_params
    params.require(:movie).permit(:title, :year, :genre, :overview)
  end

  def render_error(entity)
    render json: { errors: entity.errors.full_messages },
           status: :unprocessable_entity
  end
end