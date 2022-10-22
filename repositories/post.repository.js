const { Posts } = require('../models');

class PostsRepository{

    getAllPost = async(userId) => {
        return await Posts.find();
    }

    getfindById = async(userId) => {
        return await Posts.find({where : {postId: postId}});
    };
    
    //조회수 증가
    lookup = async(postId)=>{
        return await Posts.increment({lookup : 1},{where : {postId}})
    }

    createPost = async(userId, imageUrl, title,content) => {
        return await Posts.create({
            userId,
            title,
            content,
            imageUrl,
            lookup:0,
            // likesNum: Math.round(Math.random()*10),
            // commentsNum: Math.round(Math.random()*10)
        });
        
    };

    updatePost = async(postId, title, content, userId) => {
        return  await Posts.update(
            {title : title, content: content} ,
            {where: {userId : userId, postId: postId}},
        )
        
    };

    deletePost = async(userId,postId) => {
        return   await Posts.destroy({where: {userId,postId}});
      
    };
}

module.exports = PostsRepository;