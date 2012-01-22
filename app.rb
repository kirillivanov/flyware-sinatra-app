# coding: utf-8

require 'rubygems'
require 'sinatra'

set :static, true
set :root, File.dirname(__FILE__)
set :app_file, __FILE__

set :haml, :format => :html5
set :scss, :style => :expanded

get '/' do
  haml :index
end

get '/application.js' do
  coffee :application
end

get '/style.css' do
  scss :style
end