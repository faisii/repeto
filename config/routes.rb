Rails.application.routes.draw do
  resources :posts do
    collection do
      get '/languages/:name', to: 'posts#language'
      get '/languages/:name/:tag', to: 'posts#language'
      get '/tags/:tag/', to: 'posts#tags'
    end
  end
  resources :tags
  resources :categories
  root 'posts#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
