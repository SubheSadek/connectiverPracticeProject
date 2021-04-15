<template>
  <div class="container">
    <!-- <logo/>
    <h2 class="text-center text-primary text-capitalize">i am testing</h2> -->
    <br>
    <div class="container" style="margin-top:90px !important;">
    <h4><nuxt-link to="/create-post" class="btn btn-success">+ create new</nuxt-link></h4>
      <h2 class="text-uppercase text-center mb-3">Post List</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Sl.</th>
              <th scope="col">Post Name</th>
              <th scope="col">Post Title</th>
              <th scope="col">Post Description</th>
              <th scope="col" style="width:20%">Action</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in postData" :key="index">
            <tr>
              <th scope="row">{{index+1}}</th>
              <td>{{item.pname}}</td>
              <td>{{item.title}}</td>
              <td>{{item.description}}</td>
              <td>
                <nuxt-link :to="`/edit-post/${item.id}`" class="btn btn-sm btn-primary mr-2"> Edit </nuxt-link>
                <a @click="deleteTo(item.id)" class="btn btn-sm btn-danger"> Delete </a>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
// import comment from '~/components/comment.vue'
export default {
	data(){
		return {
        postData:[]
		}
	},

  methods:{
    async deleteTo(id){
        if(confirm("Do u want to delete ?")){
          const res = await this.callApi('post',`/delete-post/${id}`)
          
          if(res.status==204){
            this.s('Deleted successful!')
            location.reload()
            // this.formData={}
            // this.$store.commit('loginUser',(res.data));
            // this.$router.push('/')
          }
          else if(res.status===401){
            for (let i of res.data) {
                this.w(i.message);
              }   
          }
          else{
            this.swr();
          }
          
        }
    }
  },
  async created(){
  
	const res = await this.callApi('get',`get-post`)
	if(res.status == 200) {
    this.postData = res.data
	}
	else{
		this.swr()
	}
	
	}, 
  
  
  
}
</script>

