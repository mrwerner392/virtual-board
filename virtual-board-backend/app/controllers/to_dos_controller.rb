class ToDosController < ApplicationController

  def create
    to_do = ToDo.new(whiteboard_id: params[:whiteboard_id], content: params[:content])
    if to_do.save
      render json: to_do
    end
  end

  def destroy
    to_do = ToDo.find(params[:id])
    to_do.destroy
    render json: {}
  end

end
