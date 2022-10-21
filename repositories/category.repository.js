const { Categories } = require('../models');

class CategoryRepository{
    // findAllById
    findAllById = async(userId) => {
        return await Categories.find({where : {userId: userId}});
    }
    // findOneByPostId
    findOneByPostId = async(postId) => {
        return await Categories.find({where : {postId: postId}});
    };
    // createTodo
    createcategory = async(postId,userId, content) => {
        return await Categories.create({
            userId,
            postId,
            content,
            done: false
        });
    };
    // clearTodo
    clearcategory = async(todoId) => {
        const todoInfo = await Categories.find({where : {todoId : todoId}});
        const isDone = todoInfo.done;
        return await Categories.update(
            {where: {todoId : todoId}},
            {done : !isDone} 
        )
    };
    // deleteTodo
    deletecategory = async(todoId) => {
        return await Categories.delete({where: {todoId: todoId}});
    };
}

module.exports = CategoryRepository;