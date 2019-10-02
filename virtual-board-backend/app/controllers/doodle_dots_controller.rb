class DoodleDotsController < ApplicationController

  def create
    doodle_dot = DoodleDot.new(whiteboard_id: params[:whiteboard_id], x_coord: params[:x_coord], y_coord: params[:y_coord])
    if doodle_dot.save
      render json: doodle_dot
    end
  end

  def destroy
    doodle_dot = DoodleDot.find(params[:id])
    doodle_dot.destroy
    render json: {}
  end

end
