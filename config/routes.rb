Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :requests, only: [ :index, :create, :destroy ]
      post '/requests/:id/accept', to: 'requests#accept'

      resources :lists, only: [ :index, :show, :destroy ] do
        resources :movies, only: [ :create ]
      end

      put '/movies/:id/toggle_watched', to: 'movies#toggle_watched'
      resources :movies, only: [ :destroy ]
    end
  end
end
