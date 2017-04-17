class Phrase < ApplicationRecord
  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio.*\z/

  validates_presence_of :english, :pinyin

  attr_accessor :spam
end
