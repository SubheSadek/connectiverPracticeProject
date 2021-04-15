'use strict'
const { validate, rule } = use('Validator')
const User = use('App/Models/User')
const Post = use('App/Models/Post')
const Helpers = use('Helpers')
const Env = use('Env')
const fs = require('fs')

class UserController {
  
   async user({request, response, params, auth}){
       try {
          const user = await auth.loginViaId(34)

       } catch (error) {
          return error
       }

   }

  async getUser({request, response, params, auth}){
      try {
        const user = await auth.getUser()
        // console.log('cookie is.. haha', request.headers())
        return user
      } catch (error) {
          console.log('error is', error)
          // return 'not logged in ... '
      }

  }
  
  async register({ request, response }) {  
    
    let reqData = request.all()
    const rules = {
          name: 'required|string|max:255',
          email: 'required|string|max:255|email|unique:users',
        //   phone: [
        //     rule('regex', /^(?:\+?88)?01[15-9]\d{8}$/i)
        //   ],
          password:'required|string|min:6'
    }
    const messages = {
        'name':'Name is required',
        'email.unique':'Email already exist',
        // 'phone.regex':'Phone number should be BD standard',
    }
    const validation = await validate(reqData, rules, messages)

    if (validation.fails()) {
        return response.status(401).json(validation.messages())
    }
    const data = await User.create(reqData)

    return response.status(201).json(data) 
  }
  
  async login({ request, response, auth }){
    const { email, password } = request.all()
    // let user = await auth.attempt(email, password)
    return auth.attempt(email, password)
    // return;
  }

  async logout({request, response, params, auth}){
      await auth.logout()
      return 'logged out'
  }
  
  
  //Post-functions
  
  async createpost({ request, response, auth }) {  
    
    const post = new Post()
    post.user_id=auth.user.id
    post.image=request.input('image')
    post.post=request.input('post')
    
    // const upload_image =request.file('image',{
    //   types:[image],
    //   size:'5mb',
    //   extname: ['jpg', 'png', 'jpeg']
    // })
    
    // post.image = new Date().getTime()+'.'+upload_image.subtype
    
    // await upload_image.move(Helpers.publicPath('uploads/image'),{
    //    name:post.image
    // })
    
    await post.save()

    return response.status(201).json(post) 
  }
  
  async upload({request,response}){
    // console.log('hello world')
    const photo = request.file('file')
    // console.log(photo,"my-photo")
    const name = new Date().getTime() +'.'+photo.subtype
    // const name = new Date().getTime()+'habijabi'
    await photo.move(Helpers.publicPath('uploads'), {
        name:name,
        overwrite: true
    
      })
      let siteUrl = Env.get('APP_URL')
      let upFile = `${siteUrl}/uploads/${name}`
      return upFile
  }
  
  
  
  
  async getpost({request, response}){
    return await Post.all()
  }
  
  async editpost({request, response, params}){
    // return await Post.where('id', params.id).first()
    const data =await Post.query().where('id', params.id).first()
    return data
  }
  
  async updatepost ({ request,response}) {   
    const reqData = request.all()
    return await Post.query().where('id',reqData.id).update(reqData)
}

async deletepost ({ request, response, auth }) {
  
  let fileName = request.input('imageName');
  let id = request.input('id'); 
  if(fileName){
    try {
      fs.unlink("./public/uploads/"+fileName, (err) => {
          if (err) {
              console.log("failed to delete local image:"+err);
          } else {
              console.log('successfully deleted local image');                    
          }
        });
       
      } catch(err) {
        // return response.status(204).json()
      }
  }
// return response.status(200).json() 
  return await Post.query().where('id',id).where('user_id', auth.user.id).delete()
  // return [fileName,id]
  
}

// async deletepost ({ request, response, params, auth }) {
  
//  return await Post.query().where('id',params.id).where('user_id', auth.user.id).delete()
  
// }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

}

module.exports = UserController
