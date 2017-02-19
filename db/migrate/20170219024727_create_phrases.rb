class CreatePhrases < ActiveRecord::Migration[5.0]
  def change
    create_table :phrases do |t|
      t.text :english, null: false
      t.text :pinyin, null: false
      t.text :simplified

      t.timestamps
    end
  end
end
