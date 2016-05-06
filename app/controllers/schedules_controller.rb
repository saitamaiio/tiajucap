class SchedulesController < ApplicationController
  def index
    @schedules = Schedule.order('id ASC').limit(20)
  end

  def show
    @schedule = Schedule.find(params[:id])
  end

  def create
    scheduleuser = Schedulesuser.where(user_id: current_user.id, schedule_id:params.require("schedule")[:id] ).first_or_initialize
    scheduleuser.save
  end
end
