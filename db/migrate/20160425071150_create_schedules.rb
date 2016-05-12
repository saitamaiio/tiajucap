class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.string :place
      t.string :date
      t.string :content
      t.integer :people
      t.string :price
      t.timestamps
    end
  end
end
