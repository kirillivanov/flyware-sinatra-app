class App < Sinatra::Base
  get '/' do
    haml :index
  end

  get '/private' do

  end
end
