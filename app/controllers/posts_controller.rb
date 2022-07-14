class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end 

    def create
        post = Post.create(post_params)
        if post.valid? 
            render json: post
        else
            render json: post.errors, status: 422
        end
    end

    def update

    end
    
    def destroy

    end

    private
    def post_params
        params.require(:post).permit(:post_type, :image, :unit, :topic, :author, :content, :date, :cohort, :link, :user_id)
    end
end
