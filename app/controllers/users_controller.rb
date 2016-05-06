class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @buy_things = @user.schedules
  end

  def edit
  end

  def update
    unless current_user.update(update_params)
      render :edit
    end
  end

  # def destroy
  #   @user = User.find(params[:id])
  #   if user.user_id == current_user.id
  #     tweet.destroy
  #   end
  # end

  private
  def update_params
    params.require(:user).permit(:nickname, :email, :password, :password_confirmation,:phone_number)
  end
end
