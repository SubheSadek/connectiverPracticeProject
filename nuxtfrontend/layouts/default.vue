 <template>
  <div id="app">
    <div id="main-wrapper">
      <!-- Menu -->
      <div
        class="_menu"
      >
        <div class="_layout">
          <div class="_layout_row align-items-center">
            <div class="_layout_auto">
              <div class="_menu_left">
                <div class="_menu_logo">
                  <router-link to="/">
                    <h3 class="_menu_logo_text">
                      <span class="_menu_logo_symbol">C</span>
                      <span class="_menu_logo_text_main">CONNECTIVER</span>
                    </h3>
                  </router-link>
                </div>

                <!-- <p class="_menu_left_home"><i class="fas fa-home"></i> <i class="fal fa-house-day"></i></p> -->
              </div>
            </div>

            <!-- Mobile and Ipad Menu button -->
            <div class="_layout_col _only_sm_md _desk_hidden">
              <!-- <router-link to="/mobileMenu"
                ><button class="_2btn _btn_sm">Menu</button></router-link
              > -->
            </div>
            <!-- Mobile and Ipad Menu button -->

            <div class="_layout_col _only_desktop">
              <div class="_menu_search">
                <div class="_menu_search_main">
                  <div class="_menu_search_icon">
                    <i class=""></i>
                  </div>

                  <div class="_menu_search_input">
                    <input type="hidden" placeholder="Search" />
                  </div>
                </div>
              </div>
            </div>

            <div class="_layout_auto">
              
              
              <div class="" v-if="isLoggedIn">
                  <!-- Friend request -->
                  <li class="_menu_list_items _menu_list_fri">
                    <router-link to="/login">
                            <button class="_log_btn _2menu_long" type="button" @click="logout">Logout</button>
                        </router-link>
                  </li>
                  <!-- Friend request -->

                  <!-- Messages -->
                  <li class="_menu_list_items _menu_list_mess">
                   <router-link to="/register">
                            <button class="_log_btn _2menu_long" type="button">{{authUser.name}}</button>
                        </router-link>
                  </li>
                  <!-- Messages -->
              </div>
              <div class="" v-else>
                  <!-- Friend request -->
                  <li class="_menu_list_items _menu_list_fri">
                    <router-link to="/login">
                            <button class="_log_btn _2menu_long" type="button">Login</button>
                        </router-link>
                  </li>
                  <!-- Friend request -->

                  <!-- Messages -->
                  <li class="_menu_list_items _menu_list_mess">
                   <router-link to="/register">
                            <button class="_log_btn _2menu_long" type="button">Register</button>
                        </router-link>
                  </li>
                  <!-- Messages -->
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
      <!-- Menu -->

  

     



      <div class="_main_layout">
        <Nuxt />
      </div>

      <!-- Footer -->
      <div class="_log_footer">
        <!-- Shimmer -->
        <!-- <template>
          <div class="_footer_shimmer">
            <ul class="_footer_shimmer_ul">
              <li class="_2shim_animate"></li>
              <li class="_2shim_animate"></li>
              <li class="_2shim_animate"></li>
              <li class="_2shim_animate"></li>
              <li class="_2shim_animate"></li>
            </ul>
            <div class="_footer_shimmer_copy _2shim_animate"></div>
          </div>
        </template> -->
        <!-- Shimmer -->

        <!-- <template>
          <ul class="_log_footer_list">
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/support">Support</router-link>
            </li>
            <li>
              <router-link to="/donate">Donate</router-link>
            </li>
            <li>
              <router-link to="/terms">Terms</router-link>
            </li>
            <li>
              <router-link to="/privacy">Privacy</router-link>
            </li>
          </ul>

          <p class="_log_footer_copy">
            Connectiver©2021. Founded by Connectiver and developed by
            <a href="">AppilyLab</a>
          </p>
        </template> -->
      </div>
      <!-- Footer -->
    </div>
  </div>
</template>

<script>

export default {
	data(){
		return {
    

		}
	},

	methods : {

        async logout(){
        const res = await this.callApi('get','logout')
          if(res.status==200){
            window.location = '/login';
          }
          else{
              this.swr();
          }
        }
		
	}, 

	async created(){
    
	
	}, 
	
}
</script>