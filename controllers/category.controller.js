const CategoryService = require('../services/category.service');

class CategoryController {
    categoryService = new CategoryService();

    // createTodo
    createcategory = async(req, res, next) => {
        try {
            console.log(userId)
            console.log(postId)
            console.log(todo)
            await this.catego
            ryService.createcategory(userId, postId, todo);
            res.status(200).json({msg: 'TotoList가 등록되었습니다.'});
        } catch (error) {
            res.status(400).send(error);
        }
    }
    // clearTodo
    clearcategory = async(req, res, next) => {
        try {
            const { todoId } = req.params;
            await this.categoryService.clearcategory(todoId);
            res.status(200).json({msg: 'Done is updated'});
        } catch (error) {
            res.status(400).send(error);
        }
    }
    // deleteTodo
    deletecategory = async(req, res, next) => {
        try {
            const { todoId } = req.params;
            await this.categoryService.deletecategory(todoId);
            res.status(200).json({msg: 'Todo is deleted'});
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = CategoryController;