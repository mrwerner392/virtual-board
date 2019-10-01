class User < ApplicationRecord
    has_one :whiteboard, dependent: :destroy
end
