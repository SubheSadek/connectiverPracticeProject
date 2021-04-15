<template>
    <div>
        <!-- <div class="_2menu">
            <div class="_2menu_con">
                <div class="row align-items-center">
                    <div class="col">
                        <router-link to="/">
                            <h3 class="_menu_logo_text">
                                <span class="_menu_logo_symbol">C</span>
                                <span class="_menu_logo_text_main">CONNECTIVER</span>
                            </h3>
                        </router-link>
                    </div>

                    <div class="col-auto">
                        <router-link to="/logIn">
                            <button class="_log_btn _2menu_long" type="button">Login</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div> --> <br>
        <!-- Banner -->
        <!-- <form></form> -->
        <div class="_4banner">
            <div class="_4banner_main">
                <h1 class="_4banner_title">Connectiver</h1>
                <p class="_4banner_text">Creating a conscious and safe community where human<br/> connection and new ideas can thrive</p>
            </div>
        </div>
        <!-- Banner -->

        <!-- Form -->
        <div class="_log_form_main">
            <h2 class="_log_form_title">Sign Up</h2>

            <div class="_log_form">
                <div class="_log_input_group">
                    <input class="_log_input" required placeholder="Full name" type="text" v-model="formData.name">
                </div>
                <!-- <div class="_log_input_group">
                    <input class="_log_input" placeholder="Last name" type="text">
                </div> -->
                <div class="_log_input_group">
                    <input class="_log_input" required placeholder="Email address" type="text" v-model="formData.email">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" required placeholder="Password" type="password" v-model="formData.password">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" required placeholder="Confirm password" type="password" v-model="password_confirmation">
                </div>
               
               <!-- <input type="hidden" name="_token" :value="csrf"> -->
                <div class="_log_button">
                    <button v-if="!loading" class="_log_btn _btn_long" @click="register">Sign Up</button>
                    <button v-if="loading" class="_log_btn _btn_long">Please wait . . .</button>
                </div>
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
        name: '',
        email: '',
        password:''
        },
        password_confirmation:'',
    //   lazy: false,
      loading: false,
    }),
    methods: {
      async register () {
          
          if(this.formData.name == '' || this.formData.email == '' || this.formData.password == '' ){
                this.i("All fields are required .");
                return;
            }
          if(this.formData.password != this.password_confirmation){
                this.i("The password does not match.");
                return;
            }
        	this.loading = true
        	const res = await this.callApi('post',`/register`, this.formData)
          if(res.status==201){
            this.s('Registration successfully! Please login.')
            this.formData={}
            this.password_confirmation={}
            this.$router.push('/login')
          }
         else if(res.status===401){
            for (let i of res.data) {
                this.w(i.message);
              }   
          }
          else{
            alert('error')
          }
          this.loading = false
      }
    },
  }
</script>