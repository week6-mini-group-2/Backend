const { Comments } = require('../models');

class CommentsRepository{
    createComment = async(userId, postId, comment) => {
        const commentInfo = await Comments.create({
            userId,
            postId,
            comment,
            editCheck: false
        });
        console.log(commentInfo)
        return commentInfo.commentId;
    };
    updateComment = async(commentId, comment) => {
        const updateValue = await Comments.update(
            {comment : comment, editCheck: true} ,
            {where: {commentId : commentId}},
        );
        return updateValue;
    };
    deleteComment = async(commentId) => {
        const deleteValue = await Comments.destroy({where: {commentId: commentId}});
        return deleteValue;
    };

}


module.exports = CommentsRepository;