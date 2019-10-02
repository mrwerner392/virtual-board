class Whiteboard < ApplicationRecord
  belongs_to :user
  has_many :to_dos, dependent: :destroy
  has_many :quotes, dependent: :destroy
  has_many :thoughts, dependent: :destroy
end
