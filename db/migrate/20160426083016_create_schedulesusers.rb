class CreateSchedulesusers < ActiveRecord::Migration
  def change
    create_table :schedulesusers do |t|
      t.integer :schedule_id
      t.integer :user_id
      t.timestamps
    end
  end
end
