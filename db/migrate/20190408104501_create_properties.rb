class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :name, null: false
      t.text :description
      t.string :city, null: false
      t.string :street_name, null: false
      t.string :building_number, null: false
      t.string :zip_code, null: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
