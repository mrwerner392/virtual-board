Rails.application.routes.draw do
  
  resources :users do
    resources :whiteboards do
      resources :to_dos
    end
  end
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
