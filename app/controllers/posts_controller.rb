class PostsController < ApplicationController
    def show 
       post = Post.find(params:id)
       if post.valid?
        render json: post
       else
        render json: post.errors, status: 422
       end 
    end 

    end

end
