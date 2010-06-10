class Team < ActiveRecord::Base
  validates_presence_of :name, :color

  has_many :events
  has_many :challenges_won, :class_name => 'Challenge', :foreign_key => :winner_id
end
