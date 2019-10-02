class QuotesController < ApplicationController

  def create
    quote = Quote.new(whiteboard_id: params[:whiteboard_id], content: params[:content])
    if quote.save
      render json: quote
    end
  end

  def destroy
    quote = Quote.find(params[:id])
    quote.destroy
    render json: {}
  end

end
