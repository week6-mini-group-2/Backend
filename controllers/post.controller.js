const PostsService = require('../services/post.service');

class PostsController {
    postsService = new PostsService();

    // createPosts
    createPost = async (req, res, next) => {
        try {
            const { title, imageUrl, content } = req.body;
            const { userId } = res.locals.user;
            // post 작성 -> 작성 성공 시 postId 반환
            await this.postsService.createPost(title, imageUrl, userId, content);

            res.status(201).json({ "message": "게시글 작성에 성공하였습니다" });
        } catch (error) {
            next(error);
        }
    }


    //모든 게시물 조회
    getAllPost = async (req, res, next) => {

        const result = await this.postsService.getAllPost()
        res.status(200).json({ result: result })
    }

    //상세페이지
    getDetailPost = async (req, res, next) => {
        const {postId} = req.params;
        console.log(postId,res.locals.user,"111111111111" )
        const postOne = await this.postsService.getDetailPost(postId);
//코멘트를 어떻게 불러올꺼냐
        res.status(200).json({ result: postOne })
    }

    //게시글 수정
    updatePost = async (req, res, next) => {
        const { title, content } = req.body;
        const { postId } = req.params;
        const { userId } = res.locals.user;
        await this.postsService.updatePost(postId, title, content, userId)
        res.status(201).json({ "message": "게시글 수정에 성공하였습니다" });

    }
    //게시글 삭제 async ({ })
    deletePost = async (req, res, next) => {
        const { postId } = req.params
        const { userId } = res.locals.user
        await this.postsService.deletePost({postId, userId})
        res.status(201).json({ "message": "게시글 삭제에 성공하였습니다" });
    }

}
module.exports = PostsController;
