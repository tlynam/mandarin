class AddAttachmentAudioToPhrases < ActiveRecord::Migration
  def self.up
    change_table :phrases do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :phrases, :audio
  end
end
