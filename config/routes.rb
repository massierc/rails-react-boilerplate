Rails.application.routes.draw do
  root to: 'pages#landing'

  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout'
             }

  resources :properties, only: %i[index show], to: 'pages#react'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :properties, only: %i[index show create]
    end
  end
end
