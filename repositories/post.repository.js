const { Posts } = require('../models');

class PostsRepository{
    findAllPosts = async(userId) => {
        return await Posts.find();
    }
    findOneByUserId = async(userId) => {
        return await Posts.find({where : {postId: postId}});
    };
    createPost = async(userId, imageUrl, title) => {
        return await Posts.create({
            userId,
            title,
            imageUrl,
            likesNum:0,
            // likesNum: Math.round(Math.random()*10),
            // commentsNum: Math.round(Math.random()*10)
        });
        
    };
    updatePost = async(userId, postId, title, imageUrl) => {
        await Posts.update(
            {title : title, imageUrl: imageUrl} ,
            {where: {userId : userId, postId: postId}},
        )
        return {msg: "Post updated"};
    };
    deletePost = async(postId) => {
        await Posts.destroy({where: {postId: postId}});
        return {msg: "Post deleted"};
    };
}

module.exports = PostsRepository;