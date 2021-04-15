<template>
    <div>
        <!-- Shimmer -->
        <template v-if="isHide">
            <div v-for="(item, index) in 2" :key="index" class="_card _mar_b20">
                <div class="_card_shimmer">
                    <div class="_card_shimmer_profilePic _shim_animate"></div>
                    <div class="_card_shimmer_details">
                    <div class="_card_shimmer_name _shim_animate"></div>
                    <div class="_card_shimmer_text _shim_animate"></div>
                    </div>
                </div>

                <div class="_card_shimmer_status">
                    <div class="_card_shimmer_status_text _shim_animate _shim_w90"></div>
                    <div class="_card_shimmer_status_text _shim_animate _shim_w60"></div>
                </div>

                <div class="_card_shimmer_bottom">
                    <div class="_card_shimmer_like like _shim_animate"></div>
                    <div class="_card_shimmer_like comment _shim_animate"></div>
                    <div class="_card_shimmer_like share _shim_animate"></div>
                </div>
            </div>
        </template>
        <!-- Shimmer -->
        
        
  

        
        
        
        
    <template v-if="isloaded" > 
            
        <span v-for="item in getPost" :key="item.id">
            <div class="_card _mar_b20" v-if="!item.isPostDelete">
            <!-- <div class="_card _mar_b20"> -->
                <!-- <input type="text" :value="item.id" > -->
                <div class="_card_top_all">
                    <div class="_card_top">
                        <a href="" class="_card_pic">
                            <!-- <img alt="" title="" class="_card_img" src="/img/placeholder.png"> -->
                        </a>
                        <div class="_card_details">
                            <div class="_card_name_all">
                                <span class="_card_name_main">
                                    <a href="" class="_card_name">{{item.user.name}}</a>

                                    <!-- Hover Profile info -->
                                    <!-- <div class="_pro_info">
                                        <div class="_pro_info_cover">
                                            <img class="_pro_info_cover_img" src="/img/image_1608226845923.jpeg" alt="" title="">
                                        </div>
                                        
                                        <div class="_pro_info_top">
                                            <div class="_pro_info_pro">
                                                <img class="_pro_info_pro_img" src="/img/pic.jpg" alt="" title="">
                                            </div>

                                            <div class="_pro_info_main">
                                                <p class="_1text_overflow">
                                                    <router-link  class="_pro_info_title" to="/profile">
                                                        Karen River
                                                    </router-link>
                                                </p>
                                                

                                                <ul class="_pro_info_list">
                                                    <li><i class="fas fa-users"></i> 1 mutual friends</li>
                                                    <li><i class="fas fa-briefcase"></i> Whiter at <strong> Home</strong></li>
                                                    <li><i class="fas fa-map-marker"></i> From <strong>Latche</strong></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <ul class="_pro_info_buttons">
                                            <li>
                                                <button class="_2btn _btn_pre _btn_sm"><i class="fas fa-check"></i> Friends</button>
                                            </li>
                                            <li>
                                                <button class="_3btn _btn_pre _btn_sm _pre_img">
                                                    <svg class="_btn_img" style="width:15px; height:auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 135.46666 135.46667" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg" id="layer1"><path id="rect1437" d="m11.698046 20.664689c-6.4813896 0-11.69804983 5.21762-11.69804983 11.69843v.3843l58.39118183 40.80741c2.589688 1.80889 5.967679 2.70969 9.347488 2.7095 3.37798 0 6.755961-.900219 9.34565-2.7095l58.382344-40.79838v-.39294c0-6.48091-5.21666-11.69844-11.69815-11.69844zm-11.69804983 21.85919v60.579661c0 6.48091 5.21666023 11.69843 11.69804983 11.69843h112.070464c6.48149 0 11.69815-5.21752 11.69815-11.69843v-60.570441l-58.382344 40.798279c-2.589689 1.808991-5.96767 2.709501-9.34565 2.709501-3.379809 0-6.7578-.900219-9.347488-2.709501z" paint-order="fill markers stroke" fill="#0392f8" data-original="#000000"></path></g></g></svg>
                                                    Message
                                                </button>
                                            </li>
                                        </ul>
                                    </div> -->
                                    
                                </span> 
                                <span class="_card_name_span">updated the profile picture</span>
                            </div>
                            <p class="_card_time">
                                {{item.created_at |formatDate}}
                                <span class="_card_time_public">
                                    <i class="fas fa-globe"></i>  
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="_card_top_more">
                        <Dropdown trigger="click" placement="bottom-end">
                            <a class="_more" href="javascript:void(0)">
                                <i class="fas fa-angle-down">...</i>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem><p class="_drop_text _drop_pre_icon"><i class="fas fa-bookmark"></i> Save Post</p></DropdownItem>
                                <DropdownItem><p class="_drop_text _drop_pre_icon"><i class="fas fa-flag"></i> Report Post</p></DropdownItem>
                                <DropdownItem divided><p class="_drop_text _drop_pre_icon"><i class="fas fa-thumbtack"></i> Pin Post</p></DropdownItem>
                                <DropdownItem v-if="authUser.id == item.user_id"><p @click="showPostInput(item)" class="_drop_text _drop_pre_icon"><i class="fas fa-pencil-alt"></i> Edit Post</p></DropdownItem>
                                <DropdownItem v-if="authUser.id == item.user_id"><p class="_drop_text _drop_pre_icon" @click="deletePost(item)"><i class="fas fa-trash-alt"></i> Delete Post</p></DropdownItem>
                                <DropdownItem v-if="authUser.id == item.user_id"><p class="_drop_text _drop_pre_icon"><i class="fas fa-eye-slash"></i> Turn off Commenting</p></DropdownItem>
                                <DropdownItem divided><p class="_drop_text _drop_pre_icon"><i class="fas fa-link"></i> Open post in new tab</p></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>

                <div class="_card_body">
                    <p class="_card_text">
                        <span v-if="!item.isPostInput">{{item.post}}</span>
                        <span v-if="item.isPostInput"><Input type="text" v-model="item.post"  @keyup.enter="updatePost(item)"></Input></span>
                        <span v-if="item.isPostInput" style="cursor:pointer;color:#0392f8;" @click="cancelEdit(item)">cancel </span>
                    </p>
                    
                    <div class="_card_status_pic_all" v-if="item.image">
                        <div @click="isModal = true" class="_card_status_pic">
                            <img alt="" title="" class="_card_status_img" :src="item.image" lazy="loaded">
                            </div>
                    </div>
                </div>
                
                <div class="_num_like_all">
                    <div class="_num_like_left">
                        <p class="_num_like_text _num_like_text_like" v-if="item.__meta__.postLike_count > 0">
                            <span v-if="item.postLike && item.postLike.likes !== 0"> 
                                
                            <div class="inline-emoji no_animation mr-2" v-if="item.postLike.likes ==1">
                                 <div class="emoji emoji--like">
                                    <div class="emoji__hand"> 
                                          <div class="emoji__thumb"></div> 
                                    </div> 
                                </div>
                            </div>
                            <div class="inline-emoji no_animation mr-2" v-if="item.postLike.likes ==2"> <div class="emoji emoji--love"><div class="emoji__heart"></div></div> </div> 
                            
                            <div class="inline-emoji no_animation mr-2" v-if="item.postLike.likes ==3">
                                <div class="emoji emoji--haha">
                                    <div class="emoji__face">
                                        <div class="emoji__eyes"></div>
                                        <div class="emoji__mouth"><div class="emoji__tongue"></div></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="inline-emoji no_animation mr-2" v-if="item.postLike.likes ==4">
                                <div class="emoji emoji--yay">
                                    <div class="emoji__face">
                                        <div class="emoji__eyebrows"></div>
                                        <div class="emoji__mouth"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-emoji no_animation mr-2" v-if="item.postLike.likes ==5">
                                <div class="emoji emoji--wow">
                                    <div class="emoji__face">
                                        <div class="emoji__eyebrows"></div>
                                        <div class="emoji__eyes"></div>
                                        <div class="emoji__mouth"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-emoji no_animation mr-2" v-if="item.postLike.likes ==6">
                                <div class="emoji emoji--sad">
                                    <div class="emoji__face">
                                        <div class="emoji__eyebrows"></div>
                                        <div class="emoji__eyes"></div>
                                        <div class="emoji__mouth"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-emoji no_animation mr-2" v-if="item.postLike.likes ==7">
                                <div class="emoji emoji--angry">
                                    <div class="emoji__face">
                                        <div class="emoji__eyebrows"></div>
                                        <div class="emoji__eyes"></div>
                                        <div class="emoji__mouth"></div>
                                    </div>
                                </div>
                            </div>
                            </span>
                            <span>
                               {{item.__meta__.postLike_count}} 
                            </span>
                                
                           
                        </p>
                        <p v-else>
                            <span>0 like</span>
                        </p>
                    </div> 
                    <div class="_num_like_right">
                        <!-- <p class="_num_like_text">1 Comment</p> -->
                    </div>
                </div>

                <div class="_1card_count">
                    <ul class="_1card_count_list">
                        <li class="" >
                            <!-- React -->
                            <div class="_all_react" >
                                <div class="reactions-container">
                                    <div class="reactions_item duration-1 js_react-post" @click="react(1,item)">
                                        <div class="emoji emoji--like">
                                            <div class="emoji__hand"><div class="emoji__thumb"></div></div>
                                        </div>
                                    </div>
                                    <div class="reactions_item duration-2 js_react-post" @click="react(2, item)">
                                        <div class="emoji emoji--love"><div class="emoji__heart"></div></div>
                                    </div>
                                    <div class="reactions_item duration-3 js_react-post" @click="react(3, item)">
                                        <div class="emoji emoji--haha">
                                            <div class="emoji__face">
                                                <div class="emoji__eyes"></div>
                                                <div class="emoji__mouth"><div class="emoji__tongue"></div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reactions_item duration-4 js_react-post" @click="react(4, item)">
                                        <div class="emoji emoji--yay">
                                            <div class="emoji__face">
                                                <div class="emoji__eyebrows"></div>
                                                <div class="emoji__mouth"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reactions_item duration-5 js_react-post" @click="react(5, item)">
                                        <div class="emoji emoji--wow">
                                            <div class="emoji__face">
                                                <div class="emoji__eyebrows"></div>
                                                <div class="emoji__eyes"></div>
                                                <div class="emoji__mouth"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reactions_item duration-6 js_react-post" @click="react(6, item)">
                                        <div class="emoji emoji--sad">
                                            <div class="emoji__face">
                                                <div class="emoji__eyebrows"></div>
                                                <div class="emoji__eyes"></div>
                                                <div class="emoji__mouth"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="reactions_item duration-7 js_react-post" @click="react(7, item)">
                                        <div class="emoji emoji--angry">
                                            <div class="emoji__face">
                                                <div class="emoji__eyebrows"></div>
                                                <div class="emoji__eyes"></div>
                                                <div class="emoji__mouth"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- React -->
                            
                            
                        <div class="_num_like_left" v-if="item.postLike">
                          <p v-if=" item.postLike.likes != 0 || authUser.id ==item.postLike.user_id" class="_num_like_text _num_like_text_like" @click="undo(item.id)">
                                <span style="display:inherit;" v-if="item.postLike.likes ==1"> 
                                    
                                <div class="inline-emoji no_animation mr-2"> <div class="emoji emoji--like"> <div class="emoji__hand"> <div class="emoji__thumb"></div> </div> </div> </div>
                                    
                                    like
                                </span>
                            
                                <span style="display:inherit;" v-if="item.postLike.likes ==2"> 
                                    
                                <div class="inline-emoji no_animation mr-2"> <div class="emoji emoji--love"><div class="emoji__heart"></div></div> </div>
                                    
                                    love
                                </span>
                            
                                <span style="display:inherit;" v-if="item.postLike.likes ==3"> 
                                    
                                <div class="inline-emoji no_animation mr-2">
                                    <div class="emoji emoji--haha">
                                        <div class="emoji__face">
                                            <div class="emoji__eyes"></div>
                                            <div class="emoji__mouth"><div class="emoji__tongue"></div></div>
                                        </div>
                                    </div>
                                </div>
                                    
                                    haha
                                </span>
                            
                                <span style="display:inherit;" v-if="item.postLike.likes ==4"> 
                                    
                                <div class="inline-emoji no_animation mr-2">
                                    <div class="emoji emoji--yay">
                                        <div class="emoji__face">
                                            <div class="emoji__eyebrows"></div>
                                            <div class="emoji__mouth"></div>
                                        </div>
                                    </div>
                                </div>
                                    
                                    yay
                                </span>
                            
                                <span style="display:inherit;" v-if="item.postLike.likes ==5"> 
                                    
                                <div class="inline-emoji no_animation mr-2">
                                    <div class="emoji emoji--wow">
                                        <div class="emoji__face">
                                            <div class="emoji__eyebrows"></div>
                                            <div class="emoji__eyes"></div>
                                            <div class="emoji__mouth"></div>
                                        </div>
                                    </div>
                                </div>
                                    
                                    wow
                                </span>
                            
                                <span style="display:inherit;" v-if="item.postLike.likes ==6"> 
                                    
                                <div class="inline-emoji no_animation mr-2">
                                    <div class="emoji emoji--sad">
                                        <div class="emoji__face">
                                            <div class="emoji__eyebrows"></div>
                                            <div class="emoji__eyes"></div>
                                            <div class="emoji__mouth"></div>
                                        </div>
                                    </div>
                                </div>
                                    
                                    sad
                                </span>
                            
                                <span style="display:inherit;" v-if="item.postLike.likes ==7"> 
                                    <div class="inline-emoji no_animation mr-2">
                                        <div class="emoji emoji--angry">
                                            <div class="emoji__face">
                                                <div class="emoji__eyebrows"></div>
                                                <div class="emoji__eyes"></div>
                                                <div class="emoji__mouth"></div>
                                            </div>
                                        </div>
                                    </div>
                                    angry
                                </span>
                            
                          </p>
                        </div> 
                       <div v-else style="display:inherit;">
                          <div class="_1card_count_pic">
                                <svg class="_1card_count_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 16 16" style="enable-background:new 0 0 512 512" xml:space="preserve"><g transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)">
                                <path xmlns="http://www.w3.org/2000/svg" fill="#65676b" d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z" data-original="#444444" style="" class=""/>
                                </g></svg>
                            
                           </div>
                            <span>Like</span>
                        </div> 
                        </li>
                        <li @click="showComment(item)">
                            <div class="_1card_count_pic">
                                <svg style="enable-background:new 0 0 512 512; margin-bottom: -5px;" class="_1card_count_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 477.867 477.867" xml:space="preserve"><g transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)">
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z" fill="#65676b" data-original="#000000" style="" class=""/>
                                        </g>
                                    </g>
                                    </g>
                                </svg>
                            </div>
                            Comment
                        </li>
                        <li>
                            <div class="_1card_count_pic">
                                <svg class="_1card_count_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m494.533 172.016-115.899-115.899c-9.563-9.563-19.263-14.412-28.829-14.412-13.134 0-28.472 9.99-28.472 38.145v39.458c-84.204 3.67-162.839 38.203-222.815 98.176-63.524 63.519-98.511 147.975-98.518 237.808-.001 6.454 4.128 12.186 10.25 14.229 1.562.521 3.163.773 4.748.773 4.627 0 9.106-2.147 11.995-5.991 70.817-94.265 177.438-149.973 294.34-154.372v38.849c0 28.154 15.337 38.145 28.471 38.146h.001c9.566 0 19.267-4.849 28.829-14.412l115.898-115.9c11.265-11.262 17.468-26.284 17.468-42.298 0-16.015-6.203-31.037-17.467-42.3zm-21.213 63.385-115.899 115.901c-2.223 2.223-4.064 3.627-5.422 4.48-.357-1.563-.666-3.858-.666-7.001v-54.131c0-8.284-6.716-15-15-15-66.647 0-130.332 15.27-189.283 45.384-42.32 21.619-81.006 50.721-113.767 85.379 21.794-147.697 149.396-261.431 303.05-261.431 8.284 0 15-6.716 15-15v-54.132c0-3.143.309-5.438.665-7 1.358.853 3.2 2.257 5.423 4.48l115.899 115.9c5.598 5.597 8.68 13.085 8.68 21.086 0 8-3.082 15.488-8.68 21.085z" fill="#65676b" data-original="#000000" style=""/></g></svg>
                            </div>
                            Share
                        </li>
                    </ul>
                </div>

                <div class="_1card_comment_box" v-if="item.isComment">
                    <div class="_1card_comment_box_pic _load_div">
                        <img class="_1card_comment_box_img" src="/img/male.jpg" alt="" title="">
                    </div>
                    <div class="_1card_comment_box_input_icon">
                        <div class="_1card_comment_box_input"><input type="text" v-model="commentdata"  @keyup.enter="createComment(item.id)" placeholder="Write a comment..."></div>
                    </div>
                </div>

                <!-- <div class="_comment_main" v-for="comment in gettodos" :key="comment.id" v-if="item.isComment"> -->
                <span v-for="comment in gettodos" :key="comment.id"> 
                <span v-if="comment.post_id == item.id && item.isComment">
                    <div class="_comment_main" v-if="!comment.isCommentDelelete">
                        <a href="" class="_comment_pic">
                            <img alt="" title="" class="_comment_img" src="/img/male.jpg" />
                        </a>
                        <div class="_comment_details">
                            <div class="_comment_details_top">
                                <div class="_comment_name">
                                    <a href="" class="_comment_name_text" v-if="comment.user">
                                        {{comment.user.name}}
                                    </a>
                                </div>

                                <div class="_comment_more" v-if="comment.user_id ==authUser.id">
                                    <Dropdown trigger="click" placement="bottom-end">
                                        <a class="_more" href="javascript:void(0)">
                                            <i class="fas fa-angle-down">...</i>
                                        </a>

                                        <DropdownMenu slot="list">
                                            <DropdownItem><p @click="showCommentEditInput(comment)" class="_drop_text">Edit</p></DropdownItem>
                                            <DropdownItem><p @click="deleteComment(comment)" class="_drop_text">Delete</p></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div class="_comment_status" v-if="!comment.isCommentEditInput">
                                
                                <p class="_comment_status_text">{{comment.comment}}</p>
                                
                            </div>
                            <div class="_1card_comment_box_input_icon" v-if="comment.isCommentEditInput">
                                <div class="_1card_comment_box_input"><input type="text" v-model="comment.comment" @keyup.enter="editComment(comment)"></div>
                                
                            </div>
                            <span v-if="comment.isCommentEditInput" @click="cancelCommentInput(comment)" style="cursor:pointer;color:#0392f8;margin-left:5px;">cancel</span>
                            
                            <div class="_comment_reply">
                                <div class="_comment_reply_num">
                                    <ul class="_comment_reply_list">
                                        <li class="">
                                            <svg  style="enable-background:new 0 0 512 512; margin-bottom: 0px;" class="_1card_count_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><g transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)">
                                                <path xmlns="http://www.w3.org/2000/svg" fill="#65676b" d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z" data-original="#444444" style="" class=""/>
                                                </g>
                                            </svg>
                                            Like
                                        </li>
                                        <li @click="showReplyInput(comment)">
                                            <svg style="enable-background:new 0 0 512 512; margin-bottom: -2px;" class="_1card_count_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 477.867 477.867" xml:space="preserve"><g transform="matrix(0.99,0,0,0.99,2.389335174560557,2.3893354907235675)">
                                                <g xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456    c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863    c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z M443.733,324.269  c0,9.426-7.641,17.067-17.067,17.067H233.25c-4.217,0.001-8.284,1.564-11.418,4.386l-80.452,72.414l6.434-57.839    c1.046-9.367-5.699-17.809-15.067-18.856c-0.63-0.07-1.263-0.106-1.897-0.105H51.2c-9.426,0-17.067-7.641-17.067-17.067V51.202    c0-9.426,7.641-17.067,17.067-17.067h375.467c9.426,0,17.067,7.641,17.067,17.067V324.269z" fill="#65676b" data-original="#000000" style="" class=""/>
                                                    </g>
                                                </g>
                                                </g>
                                            </svg>
                                            Reply
                                        </li>
                                    </ul>
                                </div>
                                <div class="_comment_reply_time">
                                    <p class="_comment_reply_time_text">
                                        2 days ago
                                    </p>
                                </div>
                            </div>
                            <!-- <div v-if="getReplies !== ''" class="ptb10 plr10 js_replies-toggle"> <span class="text-link"> <i class="far fa-comments" style="font-family: &quot;Font Awesome 5 Free&quot;, Bangla185, sans-serif;"></i>
                                1 Replies
                            </span> </div> -->
                            <div class="_reply" keys="rep0" v-if="comment.isReplyInput" >
                                <div class="_reply_main" v-for="reply in getReplies" :key="reply.id" @mouseover="showOption(reply)" @mouseleave="hideOption(reply)" v-if="reply.comment_id == comment.id">
                                    <a href="" class="_comment_pic">
                                        <img alt="" title="" class="_comment_img" src="/img/male.jpg"/>
                                    </a>
                                    <div class="_comment_details">
                                        <div class="_comment_details_top">
                                            <div class="_comment_name">
                                                <a href="" class="_comment_name_text">
                                                    Hussain shipu
                                                </a>
                                            </div>
                                            <div class="_comment_more" v-if="reply.active">
                                                <Dropdown trigger="click" placement="bottom-end">
                                                    <a class="_more" href="javascript:void(0)">
                                                        <i class="fas fa-angle-down">...</i>
                                                    </a>
                                                    
                                                    <DropdownMenu slot="list">
                                                        <DropdownItem><p @click="editReply(reply)">Edit</p></DropdownItem>
                                                        <DropdownItem><p>Delete</p></DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div class="_comment_status">
                                            <p class="_comment_status_text" v-if="!reply.showReplyEdit">
                                                {{reply.reply}}
                                            </p>
                                            <p class="_comment_status_text" v-if="reply.showReplyEdit">
                                                <input type="text" v-model="reply.reply" @keyup.enter="editInputReply(reply)"/>
                                                <span @click="cancelEditReply(reply)" style="cursor:pointer;color:#0392f8;">Cancel</span>
                                            </p>
                                        </div>
                                        <div class="_comment_reply">
                                            <!-- <div class="_comment_reply_num">
                                                <ul class="_comment_reply_list">
                                                    <li class="">
                                                        <svg  style="enable-background:new 0 0 512 512; margin-bottom: 0px;" class="_1card_count_img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 16 16" xml:space="preserve"><g transform="matrix(0.9799999999999999,0,0,0.9799999999999999,0.16000000000000103,0.16100000381469837)">
                                                            <path xmlns="http://www.w3.org/2000/svg" fill="#65676b" d="M16 7.1c0-1.5-1.4-2.1-2.2-2.1h-2.2c0.4-1 0.7-2.2 0.5-3.1-0.5-1.8-2-1.9-2.5-1.9h-0.1c-0.4 0-0.6 0.2-0.8 0.5l-1 2.8-2.7 2.7h-5v9h5v-1c0.2 0 0.7 0.3 1.2 0.6 1.2 0.6 2.9 1.5 4.5 1.5 2.4 0 3.2-0.3 3.8-1.3 0.3-0.6 0.3-1.1 0.3-1.4 0.2-0.2 0.5-0.5 0.6-1s0.1-0.8 0-1.1c0.2-0.3 0.4-0.7 0.5-1.3 0-0.5-0.1-0.9-0.2-1.2 0.1-0.4 0.3-0.9 0.3-1.7zM2.5 13.5c-0.6 0-1-0.4-1-1s0.4-1 1-1 1 0.4 1 1c0 0.6-0.4 1-1 1zM14.7 9.1c0 0 0.2 0.2 0.2 0.7 0 0.6-0.4 0.9-0.4 0.9l-0.3 0.3 0.2 0.3c0 0 0.2 0.3 0 0.7-0.1 0.4-0.5 0.7-0.5 0.7l-0.3 0.3 0.2 0.4c0 0 0.2 0.4-0.1 0.9-0.2 0.4-0.4 0.7-2.9 0.7-1.4 0-3-0.8-4.1-1.4-0.8-0.4-1.3-0.6-1.7-0.6v0-6h0.1c0.2 0 0.4-0.1 0.6-0.2l2.8-2.8c0.1-0.1 0.1-0.2 0.2-0.3l1-2.7c0.5 0 1.2 0.2 1.4 1.1 0.1 0.6-0.1 1.6-0.6 2.8-0.1 0.3-0.1 0.5 0.1 0.8 0.1 0.2 0.4 0.3 0.7 0.3h2.5c0.1 0 1.2 0.2 1.2 1.1 0 0.8-0.3 1.2-0.3 1.2l-0.3 0.4 0.3 0.4z" data-original="#444444" style="" class=""/>
                                                            </g>
                                                        </svg>

                                                        Like
                                                    </li>
                                                </ul>
                                            </div> -->
                                            <!-- <div class="_comment_reply_time">
                                                <p class="_comment_reply_time_text">
                                                    a few seconds ago
                                                </p>
                                            </div> -->
                                        </div>
                                    </div>
                                </div> 
                                <div class="_1card_comment_box">
                                    <div class="_1card_comment_box_pic _load_div">
                                        <img alt="" title="" class="_1card_comment_box_img" src="/img/male.jpg"/>
                                    </div>
                                    <div class="_1card_comment_box_input_icon">
                                        <div class="_1card_comment_box_input"><input type="text" v-model="replydata"  @keyup.enter="createReply(comment.id)" placeholder="Write a reply..." /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </span>
            </span>
            </div>
        </span>    
    </template>
        
        

    </div>
    
</template>

<script>


export default {

  data(){
    return{
    //   active:false,
      isloaded: false,
      isHide: true,
      isModal: false,
    //   isEdit :false,
      postData:[],
      usercomment:[],
      commentdata:[],
      replydata:[],
     
      
    }
  },
  filters: {
    formatDate: (dateStr, string) =>
      Intl.DateTimeFormat("us-EN").format(new Date(dateStr)),
  },
  methods:{
    async undo(id){
        const res = await this.callApi('post', 'undo', {post_id: id})
          this.$store.commit("setPost", this.getPostInfo());
        if(res.status == 201){
            
        }else{
            // this.swr()
        }
          
    },
      
    deletePost (item) {
        this.$Modal.confirm({
            title: 'warning',
            content: '<h3>Are u sure to delete ?</h3>',
             onOk: async () => {
                 
                //  this.$set(item, 'isPostDelete', true)
                if(item.image){
                    var url = item.image;
                    var get_id =url.split("http://127.0.0.1:3333/uploads/");
                    var imgName = get_id[get_id.length-1]
                }
                	
                    
                    const res = await this.callApi('post', 'delete-post', {imageName: imgName, id:item.id})
                    
                
                if(res.status==200){
                    this.$set(item, 'isPostDelete', true)
                    this.s('Deleted successful!')
                    // this.$store.commit("setPost", this.getPostInfo());
                }
                else if(res.status===401){
                    for (let i of res.data) {
                        this.w(i.message);
                    }   
                }
                else{
                    this.swr();
                }
            },
            onCancel: () => {
                // this.$Message.info('Clicked cancel');
            }
        });
    },
    deleteComment (comment) {
        this.$Modal.confirm({
            title: 'warning',
            content: '<h3>Are u sure to delete ?</h3>',
             onOk: async () => {
                const res =await this.callApi('post','delete-comment', {id: comment.id})
                
                if(res.status==200){
                    this.s('Deleted successful!')
                    
                    this.$set(comment, 'isCommentDelelete', true)
                    // this.$store.commit("settodos", this.getCommentInfo());
                }
                else if(res.status===401){
                    for (let i of res.data) {
                        this.w(i.message);
                    }   
                }
                else{
                    // this.swr();
                }
            },
            onCancel: () => {
                // this.$Message.info('Clicked cancel');
            }
        });
    },
    async react(val, item){
        // alert(id)
    const res = await this.callApi('post', 'reaction', {post_id: item.id, likes: val})
          this.$store.commit("setPost", this.getPostInfo());
        // this.$set(item, 'postLike.likes', val)
        // item.postLike.likes==val
      if(res.status == 201){
          console.log(res.data)
          // this.getPost.push(res.data);
        // this.s('React Successfully !!')
      }else{
        // this.swr()
      }
    },
    async showComment(item){
        this.$set(item, 'isComment', true)
    },
    async showReplyInput(comment){
        this.$set(comment, 'isReplyInput', true)
    },
    async showPostInput(item){
        this.$set(item, 'isPostInput', true)
    },
    async showCommentEditInput(comment){
        this.$set(comment, 'isCommentEditInput', true)
    },
    async showOption(reply){
        this.$set(reply, 'active', true)
    },
    async hideOption(reply){
        this.$set(reply, 'active', false)
    },
    async editReply(reply){
        this.$set(reply, 'showReplyEdit', true)
    },
    async cancelEditReply(reply){
        this.$set(reply, 'showReplyEdit', false)
    },
    async cancelCommentInput(comment){
        this.$set(comment, 'isCommentEditInput', false)
        this.$store.commit("settodos", this.getCommentInfo());
    },
    async cancelEdit(item){
        this.$set(item, 'isPostInput', false)
        this.$store.commit("setPost", this.getPostInfo());
    },
    async createComment(id){
      if(this.commentdata == ""){
          return
      }
      const res = await this.callApi('post', 'create-comment', {post_id: id, comment: this.commentdata})
          this.$store.commit("settodos", this.getCommentInfo());
      if(res.status == 201){
          console.log(res.data)
        this.s('Comment Created Successfully !!')
        this.commentdata =''
        // this.$store.dispatch("gettodos");
        // this.$store.dispatch("gettodos", (res.data))
      }else{
        // this.swr()
      }
    },
    async editComment(comment){
        if(comment.comment == ""){
            return
        }
      comment.isCommentEditInput = false
      const res = await this.callApi('post', 'update-comment', {id: comment.id, comment: comment.comment})
      if(res.status == 200){
        this.s('Comment has been updated Successfully !!')
      }else{
        // this.swr()
      }
    },
    async editInputReply(reply){
        
        if(reply.reply == ""){
            return
        }
    //   reply.isCommentEditInput = false
      const res = await this.callApi('post', 'update-replies', {id: reply.id, reply: reply.reply})
      if(res.status == 201){
          this.$set(reply, 'showReplyEdit', false)
        this.s('Reply updated Successfully !!')
      }else{
        // this.swr()
      }
    },
    async updatePost(item){
        if(item.post == ""){
            return
        }
      item.isPostInput = false
      const res = await this.callApi('post', 'update-post', {id: item.id, post: item.post})
      if(res.status == 200){
        this.s('Post has been updated Successfully !!')
      }else{
        // this.swr()
      }
    },
    async createReply(id){
      if(this.replydata == ""){
          return
      }
      const res = await this.callApi('post', 'create-replies', {comment_id: id, reply: this.replydata})
          this.$store.commit("setReplies", this.getReplyInfo());
      if(res.status == 201){
          console.log(res.data)
        this.s('Reply Created Successfully !!')
        this.replydata =''
        // this.$store.dispatch("gettodos");
        // this.$store.dispatch("gettodos", (res.data))
      }else{
        // this.swr()
      }
    },
    async getCommentInfo(){
        const res = await this.callApi('get',`get-comment`)
        if(res.status === 200){
            this.$store.commit("settodos", res.data);
           
        }
        else{
            // this.swr();
        }
    },
    async getReplyInfo(){
        const res = await this.callApi('get',`get-replies`)
        if(res.status === 200){
            console.log(res.data)
            this.$store.commit("setReplies", res.data);
           
        }
        else{
            // this.swr();
        }
    },
    async getPostInfo(){
        const res = await this.callApi('get',`count-reation`)
        if(res.status === 200){
            console.log(res.data)
            this.$store.commit("setPost", res.data);
           
        }
        else{
            // this.swr();
        }
    },
  },
  
  async created() {
    var self = this;
      var self2 = this;
      setTimeout(function() {
        self.$nextTick(function() {
          self.isloaded = true;
        })
        self2.$nextTick(function() {
          self2.isHide = false;
        })
    }, 1500);
    
    
    // const res = await this.callApi('get',`get-post`)
	// if(res.status == 200) {
    // this.postData = res.data
	// }
	// else{
	// 	this.swr()
	// }
 
    
     
  },
  async mounted(){
        if(!this.authUser){
        return this.$router.push('/login')
	}
      this.getCommentInfo();
      this.getReplyInfo();
      this.getPostInfo();
    //   const res = await this.callApi('get',`get-comment`)
    //   this.$store.commit("settodos", res.data);
      	// if(res.status == 200) {
        // this.usercomment = res.data
        // }
        // else{
        //     this.swr()
        // }
	
},
  
  
}
</script>
