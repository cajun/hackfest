class Challenge < ActiveRecord::Base
  validates_presence_of :name, :message, :points, :start

  belongs_to :winner, :class_name => 'Team'
end
