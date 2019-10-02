class User < ApplicationRecord
    has_one :whiteboard, dependent: :destroy
    has_many :to_dos, through: :whiteboard
    has_many :quotes, through: :whiteboard
end
