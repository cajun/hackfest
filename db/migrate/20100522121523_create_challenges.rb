class CreateChallenges < ActiveRecord::Migration
  def self.up
    create_table :challenges do |t|
      t.string :name
      t.integer :winner_id
      t.integer :points
      t.text :message
      t.datetime :start
      t.datetime :complete

      t.timestamps
    end
  end

  def self.down
    drop_table :challenges
  end
end
