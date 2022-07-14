class PostsController < ApplicationController
    def index
    end
    def create
        post = Post.create(post_params)
        if post.valid? 
            render json: post
        else
            render json: post.errors, status: 422
        end
    end

    private
    def post_params
        params.require(:post).permit(:post_type, :image, :unit, :topic, :author, :content, :date, :cohort, :link, :user_id)
    end
end
