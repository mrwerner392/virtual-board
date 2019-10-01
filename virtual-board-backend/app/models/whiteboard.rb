class Whiteboard < ApplicationRecord
  belongs_to :user
  has_many :to_dos, dependent: :destroy
end
