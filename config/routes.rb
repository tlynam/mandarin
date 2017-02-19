Rails.application.routes.draw do
  root 'phrases#index'

  resources :phrases
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
