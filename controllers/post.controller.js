const PostsService = require('../services/post.service');

class PostsController {
    postsService = new PostsService();
    categoryService = new CategoryService();

    // createPosts
    createPost = async (req,res,next)=>{

        try {
            const {title,img,content} = req.body;
            const {userId} = res.locals.user;
            // post 작성 -> 작성 성공 시 postId 반환
            await this.PostsService.createPost(title,img,userId,content);
            
            res.status(200).json({"message" :"게시글 작성에 성공하였습니다"}); 
            
        } catch (error) {
            next(error);
        }
    }
    
    
    getAllPost = async (req,res,next)=>{
        
        const result = await this.PostsService.getAllPost()
        res.status(200).json({ result: result})
    }

     // findOneByPostId
    // findAllPosts
    // deletePosts
    // updatePosts
    getDetailPost = async (req,res,next)=>{
        const postId = req.params.postId; 
        const postOne = await this.PostsService.getDetailPost(postId);
        
        res.status(200).json({ result: postOne})
    }

    updatePost = async (req,res,next)=>{
        const { title, content} = req.body;
        const { postId } = req.params;
        const { userId } = res.locals.user;
       await this.PostsService.updatePost(postId, title, content, userId)
       res.status(200).json({"message" :"게시글 작성에 성공하였습니다"});
    }

    deletePost = async (req,res,next)=>{
        const { title, content} = req.body;
        const { postId } = req.params
        const {userId} = res.locals.user
        
        await this.PostsService.updatePost(postId,title, content,userId)
        res.status(200).json({"message" :"게시글 작성에 성공하였습니다"});
    }




}

module.exports = PostsController;