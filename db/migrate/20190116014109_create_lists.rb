class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.references :user_1, foreign_key: { to_table: :users}
      t.references :user_2, foreign_key: { to_table: :users}

      t.timestamps
    end
  end
end
