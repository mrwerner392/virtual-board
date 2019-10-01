class User < ApplicationRecord
    has_one :whiteboard, dependent: :destroy
    has_many :to_dos, through: :whiteboard
end
