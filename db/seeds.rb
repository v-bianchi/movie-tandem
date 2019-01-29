# Destroy current data
Request.destroy_all
Movie.destroy_all
List.destroy_all
User.destroy_all
puts 'Cleaned db!'
puts '-----------------------------'

# Create users
kiv = User.create! email: 'kiv@gmail.com', password: '123456', name: 'Kiv'
puts "Created user #{kiv.name} - API token #{kiv.authentication_token} "
bob = User.create! email: 'bob@gmail.com', password: '123456', name: 'Bob'
puts "Created user #{bob.name} - API token #{bob.authentication_token} "
alice = User.create! email: 'alice@gmail.com', password: '123456', name: 'Alice'
puts "Created user #{alice.name} - API token #{alice.authentication_token} "
puts '-----------------------------'

# Create requests
Request.create! sender: kiv, receiver: alice
puts "Created request from kiv to alice"
puts '-----------------------------'

# Create lists with movies
lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus non est in viverra. Pellentesque sit amet leo nulla. Nunc rhoncus mattis porta. Etiam hendrerit blandit dui, et vestibulum justo cursus at. Nam dignissim suscipit mauris nec convallis. Fusce malesuada a enim at aliquet. Aenean euismod mauris justo, at viverra justo tincidunt eget. Nulla placerat sed arcu ac volutpat. Pellentesque nec enim consectetur, fringilla tellus in, egestas mauris. Aenean quis ex eu justo sodales dapibus. Etiam molestie mauris nec malesuada pulvinar. Etiam eget felis dapibus, laoreet ligula vitae, pretium enim. In pretium arcu id tellus commodo dapibus. Vestibulum non semper urna. Cras sed facilisis dolor, sit amet efficitur purus.'
kiv_bob_list = List.create! user_1: kiv, user_2: bob
puts "Created a watchlist for #{kiv_bob_list.user_1.name} and #{kiv_bob_list.user_2.name}"
Movie.create! user: kiv, list: kiv_bob_list, title: 'Batman', year: 1969, genre: 'Action', overview: lorem, watched: true
Movie.create! user: kiv, list: kiv_bob_list, title: 'The Turns Have Tabled', year: 1999, genre: 'Drama', overview: lorem, watched: false
Movie.create! user: bob, list: kiv_bob_list, title: 'Give It Away', year: 2002, genre: 'Action', overview: lorem, watched: false
puts 'Added 3 movies to that watchlist'
puts '-----------------------------'

puts 'Seeding done!'