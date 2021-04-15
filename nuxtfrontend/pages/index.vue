<template>
    <div>
        <div class="_1main_content">
            <div class="_layout">
                <div class="_layout_row">
                    <!-- Sidebar -->
                    <div class="_layout_auto _layout_sidebar_left">
                        <div class="_sidebar_main">
                            <!-- <leftSidebar/> -->
                        </div>
                    </div>
                    <!-- Sidebar -->
                    
                    <!-- Feed and Status box -->
                    <div class="_layout_col">
                        <!-- Status box -->
                        <div class="_statusBox_layout">
                            <statusBox/>
                        </div>
                        <!-- Status box -->

                        <!-- Feed -->
                        <div class="_feed_main">
                            <Feed/>
                        </div>
                        <!-- Feed -->
                    </div>
                    <!-- Feed and Status box -->
                    
                    <!-- Right section -->
                    <div class="_layout_auto _layout_chatList_right">
                        <div class="_rightSec_main">
                            <!-- <rightSection/> -->
                        </div>
                    </div>
                    <!-- Right section -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Feed from '~/components/feed.vue'
import statusBox from '~/components/statusbox.vue'
export default {
	data(){
		return {
        postData:[]
		}
	},
  components: {
    Feed,
    statusBox
  },
  methods:{
    
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
    async mounted(){
        if(!this.authUser){
		return this.$router.push('/login')
	}
    }
  
  
  
}
</script>