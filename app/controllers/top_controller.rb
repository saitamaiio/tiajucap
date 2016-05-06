class TopController < ApplicationController
  def index
    @schedules = Schedule.order('id ASC').limit(20)
  end

  def contact
  end

  def member
  end
end
