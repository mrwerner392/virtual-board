Rails.application.routes.draw do

  resources :quotes
  resources :users do
    resources :whiteboards do
      resources :to_dos
      resources :quotes
    end
  end
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
