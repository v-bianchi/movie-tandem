class ChangeNameUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    remove_column :users, :first_name
    remove_column :users, :last_name
  end
end
