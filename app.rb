#!/usr/bin/env ruby

# coding: utf-8

require 'rubygems'
require 'sinatra/base'
require 'mongoid'
#require 'digest/sha1'
#require 'sinatra-authentication'

#require_relative 'config/mongoid'

Dir.glob("models/*.rb").each { |r| require_relative r }
Dir.glob("routes/*.rb").each { |r| require_relative r }

class App < Sinatra::Base

  #use Rack::Session::Cookie, :secret => 'mongoid and sinatra does the body good'
  Mongoid.configure do |config|
    name = 'flyware'
    host = 'localhost'
    config.master = Mongo::Connection.new.db(name)
  end

  set :static, true
  set :root, File.dirname(__FILE__)
  set :app_file, __FILE__

  set :haml, :format => :html5
  set :scss, :style => :expanded

  get '/style.css' do
    scss :style
  end

  get '/application.js' do
    coffee :application
  end

end


