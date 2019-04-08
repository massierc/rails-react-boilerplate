# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  email: 'admin@admin.com',
  password: 'adminadmin',
  admin: true,
  first_name: 'Admin',
  last_name: 'User'
)

normal_user = User.create(
  email: 'test@test.com',
  password: 'testtest',
  first_name: 'Normal',
  last_name: 'User'
)

20.times do
  Property.create(
    name: Faker::Hipster.sentence,
    description: Faker::Lorem.paragraph,
    city: Faker::Address.city,
    street_name: Faker::Address.street_name,
    building_number: Faker::Address.building_number,
    zip_code: Faker::Address.zip_code,
    user: normal_user
  )
end
