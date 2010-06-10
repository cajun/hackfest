class Announcement < ActiveRecord::Base
  validates_presence_of :message, :start
end
