const { Posts } = require('../models');

class PostsRepository{

    getAllPost = async() => {
     const getAllPost = await Posts.findAll();
     return getAllPost
    }

    getfindById = async(postId) => {
        const postOne = await Posts.findByPk(postId)
        return postOne
    };
    
    //조회수 증가
    lookup = async(postId)=>{
        await Posts.increment({lookup : 1},{where : {postId}})
     
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
        const update = await Posts.update(
            {title : title, content: content} ,
            {where: {userId : userId, postId: postId}},
        )
        return update
    };

    deletePost = async({userId,postId}) => {
        await Posts.destroy({where: {userId,postId}});
      
    };
}

module.exports = PostsRepository;