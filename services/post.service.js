const PostsRepository = require('../repositories/post.repository');
const CommentsRepository = require('../repositories/comment.repository')
class PostsService {
    postsRepository = new PostsRepository();
    commentsRepository = new CommentsRepository()
    // createPosts
    createPost = async (title,imageUrl,userId) => {
        try {
            // 게시글 생성
            const createPost = await this.postsRepository.createPost(userId, imageUrl, title);
            return createPost

            // 게시물 작성 성공 시 postId 반환
        } catch (error) {
            throw new Error(error);
        }
    
    }

    //모든 게시글 조회
    getAllPost = async () => {

        const result = await this.postsRepository.getAllPost()
        console.log(result)
        result.sort((a, b) => {
        b.createdAt - a.createdAt;
        })
        return result.map((post) => {
            return {
            postId: post.postId,
            nickname: post.nickname,
            title: post.title,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            lookup: post.lookup
        
        };
        });
     
    };

   //상세페이지
    getDetailPost = async (postId) => {      
        const postOne = await this.postsRepository.getfindById(postId);
                        await this.postsRepository.lookup(postId)
            return {
            postId : postOne.postId,
            userId : postOne.userId,
            title : postOne.title,
            content : postOne.content,
            createdAt : postOne.createdAt,
            updatedAt : postOne.updatedAt 
        }       
    }

    // 포스트 수정
        updatePost = async (postId, title, content, userId) => {
        const findOnePost = await this.postsRepository.getfindById(postId)

        if(findOnePost.userId !== userId){
            throw new Error("작성자가 일치 하지 않습니다.")
        }
        await this.postsRepository.updatePost(postId, title, content, userId)
             
        }
        //포스트 삭제
        deletePost = async ({postId, userId}) => {
            const findOnePost = await this.postsRepository.getfindById(postId)
    
            if(findOnePost.userId !== userId){
                throw new Error("작성자가 일치 하지 않습니다.")
            }

            await this.postsRepository.deletePost({postId,userId})     
            }
    
}

module.exports = PostsService;