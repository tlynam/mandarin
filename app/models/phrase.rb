class Phrase < ApplicationRecord
  validates_presence_of :english, :pinyin

  attr_accessor :spam
end
