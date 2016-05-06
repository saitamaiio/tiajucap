Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: "top#index"
  resources :schedules, only: [:show,:index,:create,:new]
  resources :users, only: [:show, :edit, :update, :destroy]
  get 'contact' => 'top#contact'
  get 'member' => 'top#member'
end
