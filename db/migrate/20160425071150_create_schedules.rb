class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.string :place
      t.text :date
      t.text :content
      t.integer :people
      t.text :kikan
      t.timestamps
    end
  end
end
