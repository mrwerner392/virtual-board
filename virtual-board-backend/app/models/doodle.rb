class Doodle < ApplicationRecord
  belongs_to :whiteboard
  has_many :doodle_dots, dependent: :destroy
end
