class DoodlesController < ApplicationController

  def destroy
    doodle = Doodle.find(params[:id])
    doodle.destroy
    user = User.find(params[:user_id])
    user.whiteboard.doodle = Doodle.create
    render json: user, include: '**'
  end

end
