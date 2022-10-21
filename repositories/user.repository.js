const { Users,sequelize,Sequelize } = require('../models');

class UsersRepository{
    constructor(){
        this.Users = Users;
        this.sequelize = sequelize;
        this.Sequelize = sequelize;
    };

    // findOneById
    findOneById = async (userId) => {
        return await this.Users.findOne({where : {userId: userId}});
    }
    
    // createUser
    signup = async(nickname, encrpytedPassword) => {

        await this.Users.create({
            nickname,
            password:encrpytedPassword
        });
        return {msg: "new User created"};
    }

    // findUser
    findUser = async (nickname) => {

        const Query = `
            SELECT * 
            FROM Users
            WHERE nickname='${nickname}'
        `;

        try{
            const result = await this.sequelize.query(Query,{type:Sequelize.QueryTypes.SELECT,})
            return result
        }catch(e){
            return 'USER SELECT ERROR !'
        }
    }

    updateRefreshToken = async (userId,refreshToken) => {

        const Query = `
            UPDATE Users
            SET refreshToken = '${refreshToken}'
            WHERE userId = ${userId} 
        `;

        const result = await this.sequelize.query(Query,{type:Sequelize.QueryTypes.UPDATE,})
        return result
    }
}

module.exports = UsersRepository;