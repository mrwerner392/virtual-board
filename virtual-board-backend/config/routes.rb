Rails.application.routes.draw do
  resources :to_dos
  resources :users do
    resources :whiteboards  
  end
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
