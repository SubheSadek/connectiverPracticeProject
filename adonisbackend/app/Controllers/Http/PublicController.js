'use strict'

const { validate, rule } = use('Validator')
const Comment = use('App/Models/Comment')
const Reply = use('App/Models/Reply')
const Like = use('App/Models/PostLike')
const Post = use('App/Models/Post')
const user = use('App/Models/User')

class PublicController {
  
      //Comment-functions
  
  async createComment({ request, response, auth }) {  
    
    let reqData = request.all()
    // return reqData
    const rules = {
          comment: 'required|string|max:255'
    }
    const messages = {
        'comment':'Comment is required'
    }
    const validation = await validate(reqData, rules, messages)

    if (validation.fails()) {
        return response.status(401).json(validation.messages())
    }
    
    
    
    const data = await Comment.create({
      user_id: auth.user.id,
      post_id: reqData.post_id,
      comment: reqData.comment,
    })

    return response.status(201).json(data) 
    // return data;
    
    
    
  }
  
  async updateComment({ request, response, auth }) {  
    
    let reqData = request.all()
    // return reqData
    const rules = {
          comment: 'required|string|max:255'
    }
    const messages = {
        'comment':'Comment is required'
    }
    const validation = await validate(reqData, rules, messages)

    if (validation.fails()) {
        return response.status(401).json(validation.messages())
    }
    
    // const data = await Like.query().where('id',check.id).update({
    //   likes: reqData.likes,
    // })
    const data = await Comment.query().where('id',reqData.id).where('user_id', auth.user.id).update({
      comment: reqData.comment,
    })

    return response.status(201).json(data) 
    // return data;
    
    
    
  }
  
  async getComment({request, response}){
    return await Comment.query().with('user').orderBy('id', 'desc').fetch();
  }
  
  async deleteComment ({ request, response, auth }) {
    let reqData = request.all()
    const res1= await Comment.query().where('id', reqData.id).where('user_id', auth.user.id).delete()
    const res2 = await Reply.query().where('comment_id', reqData.id).where('user_id', auth.user.id).delete()
        // const comment = yield Comment.findById(reqData.id)
        // const comment = yield Reply.where('comment_id',reqData.id).get()
        // yield comment.delete()
     return [res1,res2]
   }
    
    
  //Replies-functions
  async createReplies({ request, response, auth }) {  
    
    let reqData = request.all()
    const rules = {
          reply: 'required|string|max:255'
    }
    const messages = {
        'reply':'Comment is required'
    }
    const validation = await validate(reqData, rules, messages)

    if (validation.fails()) {
        return response.status(401).json(validation.messages())
    }
    const data = await Reply.create({
      user_id: auth.user.id,
      comment_id: reqData.comment_id,
      reply: reqData.reply,
    })

    return response.status(201).json(data) 
  } 
  
  async getReply({request, response}){
    return await Reply.query().orderBy('id', 'asc').fetch();
  }
  
  async updateReplies({ request, response, auth }) {  
    
    let reqData = request.all()
    // return reqData
    const rules = {
          reply: 'required|string|max:255'
    }
    const messages = {
        'reply':'Comment is required'
    }
    const validation = await validate(reqData, rules, messages)

    if (validation.fails()) {
        return response.status(401).json(validation.messages())
    }
    
    // const data = await Like.query().where('id',check.id).update({
    //   likes: reqData.likes,
    // })
    const data = await Reply.query().where('id',reqData.id).where('user_id', auth.user.id).update({
      reply: reqData.reply,
    })

    return response.status(201).json(data) 
    // return data;
    
    
    
  }
    
    
  //Replies-functions
  async reaction({ request, response, auth }) {  
    
    let reqData = request.all()
    const rules = {
          likes: 'required'
    }
    const messages = {
        'likes':'Reaction is required'
    }
    const validation = await validate(reqData, rules, messages)

    if (validation.fails()) {
        return response.status(401).json(validation.messages())
    }
    
    const check =await Like.query().where('post_id', reqData.post_id).where('user_id', auth.user.id).first()
    
    if(check){
      // return await Post.query().where('id',reqData.id).update(reqData)
      const data = await Like.query().where('id',check.id).update({
        likes: reqData.likes,
      })
      return response.status(201).json(data) 
    }else{
      const data = await Like.create({
        user_id: auth.user.id,
        post_id: reqData.post_id,
        likes: reqData.likes,
      })
      return response.status(201).json(data) 
    }
    
  } 

  async countReaction({request,response}){
    return await Post.query().with('postLike', (builder) => {
      builder.where('likes','!=', 0)
    }).with('user')
    .withCount('postLike', (builder) => {
      builder.where('likes','!=', 0)
    }).orderBy('id', 'desc').fetch()
    // return await Like.query().count().where('post_id', 2)
    // return response.status(200).json(data) 
    
    }
    
  async undo({ request, response, auth }) {  
    
    let reqData = request.all()

    const check =await Like.query().where('post_id', reqData.post_id).where('user_id', auth.user.id).first()
    
    if(check){
      // return await Post.query().where('id',reqData.id).update(reqData)
      const data = await Like.query().where('id',check.id).update({
        likes: 0,
      })
      return response.status(201).json(data) 
    }
    
  } 
  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}

module.exports = PublicController
