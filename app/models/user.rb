class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  attr_accessor :name,:phone
  has_many :schedulesusers
  has_many :schedules, through: :schedulesusers

  validates :phone_number, format: { with: /\d{3}-\d{4}-\d{4}/, message: "電話番号が正しくありません"}
  # current_user.errors.messages
end
