class User < ApplicationRecord
    has_one :whiteboard, dependent: :destroy
    has_many :to_dos, through: :whiteboard
    has_many :quotes, through: :whiteboard
    has_many :thoughts, through: :whiteboard
    has_one :doodle, through: :whiteboard
    has_many :doodle_dots, through: :doodle
end
