Rails.application.routes.draw do
  resources :posts
  resources :tags
  resources :categories
  root 'posts#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
