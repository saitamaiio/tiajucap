Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: "top#index"
  resources :schedules, only: [:show,:index,:create,:new]
  resources :users, only: [:show, :edit, :update,]
  delete '/users/:id/:schedule_id' => 'users#destroy'
  get 'contact' => 'top#contact'
  get 'member' => 'top#member'
  get 'links' => 'top#link'
  get 'photos' => 'top#photo'
end
