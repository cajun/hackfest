# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_hackfest_session',
  :secret      => '7347d564c7a311188546369a419559bc11f86209dbd30d52c3b7b33d744ed5d941cf9bd025b8ca1cd70fe7d3b38bdbe9ae118a99d3d715281845889782a6bacc'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
