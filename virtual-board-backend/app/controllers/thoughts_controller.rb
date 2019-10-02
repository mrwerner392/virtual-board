class ThoughtsController < ApplicationController

    def create
        thought = Thought.new(whiteboard_id: params[:whiteboard_id], content: params[:content])
        if thought.save
          render json: thought
        end
      end
    
      def destroy
        thought = Thought.find(params[:id])
        thought.destroy
        render json: {}
      end

end
