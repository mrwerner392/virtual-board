class WhiteboardsController < ApplicationController

  def update
    whiteboard = Whiteboard.find(params[:id])
    if whiteboard.update(title: params[:title])
      render json: whiteboard
    end
  end

end
