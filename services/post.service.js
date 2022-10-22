const PostsRepository = require('../repositories/post.repository');

class PostsService {
    postsRepository = new PostsRepository();

    // createPosts
    createPost = async (title,imageUrl,userId) => {
        try {
            // 게시글 생성
            return await this.postsRepository.createPost(userId, imageUrl, title);

            // 게시물 작성 성공 시 postId 반환
        } catch (error) {
            throw new Error(error);
        }
    
    }
    //모든 게시글 조회
    getAllPost = async () => {

        const result = await this.postsRepository.getAllPost()
        result.sort((a, b) => {
        b.createdAt - a.createdAt;
        })

        result.map((item) => {
            return {
            postId: item.postId,
            nickname: item.nickname,
            title: item.title,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            lookup: item.lookup
        
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

        return await this.postsRepository.updatePost(postId, title, content, userId)
             
        }
        //포스트 삭제
    deletePost = async (postId,userId) => {

        const findOnePost = await this.postsRepository.getfindById(postId)

        if(findOnePost.userId !== userId){
          throw new Error("작성자가 일치 하지 않습니다.")
        }

       return await this.postsRepository.deletePost(postId,userId)

    }
    
}

module.exports = PostsService;