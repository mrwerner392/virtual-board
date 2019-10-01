class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(name: params[:name], age: params[:age], bio: params[:bio] )
    if user.save
      render json: user
    end
  end
  
end
