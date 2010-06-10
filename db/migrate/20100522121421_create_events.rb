class CreateEvents < ActiveRecord::Migration
  def self.up
    create_table :events do |t|
      t.integer :team_id
      t.string :type
      t.integer :points
      t.text :message

      t.timestamps
    end
  end

  def self.down
    drop_table :events
  end
end
