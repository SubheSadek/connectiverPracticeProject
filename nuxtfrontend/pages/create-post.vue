<template>
    <div>
        <div class="_2main_content">
            <!-- Left -->
            <div class="_list_left">
                <!-- <leftSidebar/> -->
            </div>
            <!-- Left -->

            <!-- Main content -->
            <div class="_create_content">
                <div class="_createCard _mar_b20">
                    <h2 class="_1title _createCard_title"><i class="fas fa-flag"></i> Create New Post</h2>

                    <div class="_createCard_form">
                        <div class="_1input_group">
                            <p class="_1label">Post name</p>
                            <Input placeholder="Post name" v-model="formData.pname"/>
                        </div>
                        <div class="_1input_group">
                            <p class="_1label">Post title</p>
                            <Input placeholder="Post title" v-model="formData.title"/>
                        </div>
                        <div class="_1input_group">
                            <p class="_1label">Post description</p>

                            <Input type="textarea" :rows="6" placeholder="Post description" v-model="formData.description"/>
                        </div>

                        <div class="_1input_button _text_center">
                            <button class="_1btn _btn_150" @click="create">Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Main content -->
        </div>
    </div>
</template>


<script>
  export default {
    data: () => ({
    //   valid: true,
      formData:{
        pname: '',
        title: '',
        description:''
        }
    }),
    methods: {
      async create () {
          
          if(this.formData.pname == '' ||this.formData.title == '' || this.formData.description == '' ){
                this.i("All fields are required.");
                return;
            }
        	// this.loading = true
        	const res = await this.callApi('post',`/create-post`, this.formData)
          if(res.status==201){
            this.s('Post created Successfully !')
            this.formData={}
            // this.$router.push('/login')
          }
         else if(res.status===401){
            for (let i of res.data) {
                this.w(i.message);
              }   
          }
          else{
            alert('error')
          }
        //   this.loading = false
      }
    },
  }
</script>