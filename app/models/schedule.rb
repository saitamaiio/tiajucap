class Schedule < ActiveRecord::Base
  has_many :schedulesusers
  has_many :users, through: :schedulesusers
end
