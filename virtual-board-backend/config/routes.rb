Rails.application.routes.draw do


  resources :users do
    resources :whiteboards do
      resources :to_dos
      resources :quotes
      resources :thoughts
      resources :doodles do
        resources :doodle_dots
      end
    end
  end
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
