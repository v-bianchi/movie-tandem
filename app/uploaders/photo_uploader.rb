class PhotoUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process eager: true  # Force version generation at upload time.

  process convert: 'jpg'

  version :avatar do
    eager
    cloudinary_transformation width: 300, height: 300, crop: :thumb, gravity: :face
  end
end
