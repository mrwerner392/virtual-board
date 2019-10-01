class CreateWhiteboards < ActiveRecord::Migration[6.0]
  def change
    create_table :whiteboards do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
