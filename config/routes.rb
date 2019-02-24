Rails.application.routes.draw do
  root to: "pages#root"
  devise_for :users,
    path: '',
    path_names: {
      sign_in: 'login',
      sign_out: 'logout'
    }
end
