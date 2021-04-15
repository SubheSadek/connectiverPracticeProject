<template>
    <div>
        <br>
        <!-- Banner -->
        <div class="_4banner">
            <div class="_4banner_main">
                <h1 class="_4banner_title">Connectiver</h1>
                <p class="_4banner_text">Creating a conscious and safe community where human<br/> connection and new ideas can thrive</p>
            </div>
        </div>
        <!-- Banner -->

        <!-- Form -->
        <div class="_log_form_main">
            <h2 class="_log_form_title">Login</h2>

            <div class="_log_form">
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Email" type="text" v-model="formData.email">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Password" type="password" v-model="formData.password">
                </div>
                <div class="_log_button">
                    <button v-if="!loading" class="_log_btn _btn_long" @click="login">Login</button>
                    <button v-if="loading" class="_log_btn _btn_long">Pleae wait . . .</button>
                </div>

                <!-- <p class="_log_forget"><router-link to="/forgetPassword">Forgot password?</router-link></p> -->
            </div>
        </div>
        <!-- Form -->
    </div>
</template>

<script>
  export default {
    data: () => ({
    //   valid: true,
      formData:{
        email: '',
        password:''
      },
    //   emailRules: [
    //     v => !!v || 'E-mail is required'
    //   ],
    //   passwordRules: [
    //     v => !!v || 'Password is required',
    //   ],
    //   lazy: false,
      loading: false,
    //   showPassword: false,

    }),

    methods: {
      async login () {
        	this.loading = true
        	const res = await this.callApi('post',`login`,this.formData)
          if(res.status==200){
            this.s('Login successful!')
            this.formData={}
            this.$store.commit('loginUser',(res.data));
            this.$router.push('/')
          }
          else if(res.status===401){
            for (let i of res.data) {
                this.w(i.message);
              }   
          }
          else{
            this.swr();
          }
          this.loading = false
      }
    },
    async created(){
        console.log(this.authUser)
    }
  }
</script>