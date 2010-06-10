class CreateTeams < ActiveRecord::Migration
  def self.up
    create_table :teams do |t|
      t.string :name
      t.string :color
      t.integer :score
      t.boolean :is_registered

      t.timestamps
    end
  end

  def self.down
    drop_table :teams
  end
end
