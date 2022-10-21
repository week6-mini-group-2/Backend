const PostsRepository = require('../repositories/post.repository');

class PostsService {
    postsRepository = new PostsRepository();

    // createPosts
    createPost = async (title,img,userId,content) => {
        try {
            // 게시글 생성
            await this.postsRepository.createPost(userId, img, title,content);

            // 게시물 작성 성공 시 postId 반환

        } catch (error) {
            throw new Error(error);
        }
    }
    // updatePosts
    // deletePosts
    // showAllPosts
    // findOnePosts
}

module.exports = PostsService;