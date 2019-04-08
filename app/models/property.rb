class Property < ApplicationRecord
  belongs_to :user, inverse_of: :properties

  validates :name, presence: true
  validates :city, presence: true
  validates :street_name, presence: true
  validates :building_number, presence: true
  validates :zip_code, presence: true
end
