'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/login', 'UserController.user')
Route.get('/myuser', 'UserController.getUser')
Route.post('/post', 'UserController.getUser')
Route.get('/logout', 'UserController.logout')
Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')

Route.post('/uploads', 'UserController.upload')
// Route.post('/delete_image', 'UserController.deleteImage')

        //Post route
Route.group(() =>{
    Route.post('/create-post', 'UserController.createpost')
    Route.get('/get-post', 'UserController.getpost')
    Route.get('/edit-post/:id', 'UserController.editpost')
    Route.post('/update-post', 'UserController.updatepost')
    // Route.post('/delete-post/:id', 'UserController.deletepost') 
    Route.post('/delete-post', 'UserController.deletepost') 
    
    
        //comment-route
    Route.post('/create-comment', 'PublicController.createComment')
    Route.post('/update-comment', 'PublicController.updateComment')
    Route.get('/get-comment', 'PublicController.getComment')
    Route.post('/delete-comment', 'PublicController.deleteComment')
    
        //replies-route
    Route.post('/create-replies', 'PublicController.createReplies')
    Route.post('/update-replies', 'PublicController.updateReplies')
    Route.get('/get-replies', 'PublicController.getReply')
    
        //replies-route
    Route.post('/reaction', 'PublicController.reaction')
    Route.get('/count-reation', 'PublicController.countReaction')
    Route.post('/undo', 'PublicController.undo')
    
    
    
}).middleware('auth')