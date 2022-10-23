const CommentsRepository = require('../repositories/comment.repository');

class CommentsService {
    commentsRepository = new CommentsRepository();

    // createComments
    createComment = async(userId, postId, comment) => {
        return await this.commentsRepository.createComment(userId, postId, comment);
    };

    // deleteComments
    deleteComment = async(commentId) => {
        return await this.commentsRepository.deleteComment(commentId);
    };
    // updateComments
    updateComment = async(commentId, comment) => {
        return await this.commentsRepository.updateComment(commentId, comment);
    };


    getAllComment = async({postId})=>{
        console.log(postId,"서비스ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ")
        const comment = await this.commentsRepository.getAllComment({postId})
            comment.sort((a,b)=>b.createdAt-a.createdAt)
        return comment.map((comment)=>{
            return {
            userId : comment.userId,
            comment : comment.comment,
            nickname : comment.nickname,
            editCheck : comment.editCheck,
            createdAt : comment.createdAt,
            updatedAt : comment.updatedAt 
            }
        })
        
        }
    }



module.exports = CommentsService;