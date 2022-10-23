const PostsService = require('../services/post.service');

class PostsController {
    postsService = new PostsService();

    // createPosts
    createPost = async (req, res, next) => {
        try {
            const { categoryId, imageUrl, title, content } = req.body;
            const { userId } = res.locals.user;
            // post 작성 -> 작성 성공 시 postId 반환
            await this.postsService.createPost(userId, categoryId, imageUrl, title, content);

            res.status(201).json({ "message": "게시글 작성에 성공하였습니다." });
        } catch (error) {
            res.status(400).json({ "message": "게시글 작성에 실패하였습니다." , "error": error});
        }
    }


    //모든 게시물 조회
    getAllPosts = async (req, res, next) => {
        const result = await this.postsService.getAllPosts();
        res.status(200).json({ result: result });
    }

    //상세페이지
    getDetailPost = async (req, res, next) => {
        const {postId} = req.params;
        const postOne = await this.postsService.getDetailPost(postId);

        res.status(200).json({ result: postOne });
    }

    getPostsByCategory = async (req, res, next) => {
        const { categoryId } = req.params;
        const postsByCategory = await this.postsService.getPostsByCategory(categoryId);
        res.status(200).json({ result: postsByCategory });
    }


    //게시글 수정
    updatePost = async (req, res, next) => {
        const { title, content, imageUrl } = req.body;
        const { postId } = req.params;
        const { userId } = res.locals.user;
        await this.postsService.updatePost(userId, postId, title, content, imageUrl)
        res.status(201).json({ "message": "게시글 수정에 성공하였습니다" });

    }
    //게시글 삭제
    deletePost = async (req, res, next) => {
        const { postId } = req.params
        const { userId } = res.locals.user

        await this.postsService.deletePost(postId, userId)
        res.status(201).json({ "message": "게시글 삭제에 성공하였습니다" });
    }

}
module.exports = PostsController;
