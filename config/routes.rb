ActionController::Routing::Routes.draw do |map|
  map.resources :teams
  map.root :controller => 'home'
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
