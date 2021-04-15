'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */


const Model = use('Model')

class Post extends Model {
    
    postLike() {
        return this.hasOne('App/Models/PostLike')
    }
    comment() {
        return this.hasOne('App/Models/Comment')
    }
    user() {
        return this.belongsTo('App/Models/User')
    }
    
}

module.exports = Post
