class PostsController < ApplicationController


    def index
        posts = Post.all.order('created_at DESC')
        render json: posts
    end 
    
    def show 
        post = Post.find(params[:id])
        render json: post
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
        post = Post.find(params[:id])
        post.update(post_params)
        if post.valid? 
            render json: post
        else
            render json: post.errors, status: 422
        end
    end
    
    def destroy
        post = Post.find(params[:id])
        post.destroy
        render json: {destroy: true}
    end

    private
    def post_params
        params.require(:post).permit(:post_type, :image, :unit, :topic, :author, :content, :date, :cohort, :link, :user_id)
    end

end
