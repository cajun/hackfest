class Event < ActiveRecord::Base
  validates_presence_of :message

  belongs_to :team
end
