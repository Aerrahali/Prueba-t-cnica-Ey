<template>
<div>
<div>
<h1>Image Gallery</h1>
</div>


<div class="row">
  <div class="col-lg-2 col-md-4 col-sm-6 col-6" v-for="(item,index) in list" :key="index">
      <b-img @click="removeImage(index)" :src="item.thumbnailUrl" :alt="item.title" fluid class="p-4 "></b-img>
      <p @click="removeImage(index)" class="text">{{item.title}}</p>
  </div >
</div>

<loading 
:active="isLoading"
:can-cancel="false"
:is-full-page="true"
color="#5d92ba"
background-color="#fff"
:opacity="1"
:heigh=60
:width=60
/>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


export default {
    name: "GalleryImage",
    components: {
            Loading
        },
    data(){
        return{
            list:undefined,
            isLoading: true,

        }
    },
    mounted(){

        function delay(time) {
             return new Promise(resolve => setTimeout(resolve, time));
        }

        Vue.axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((resp)=>{
            this.list=resp.data
        }).then(async()=>{
          await delay(1000)
            this.isLoading=false
        })  
    },
    methods: {
    removeImage:function(number) {
    this.list.splice(number, 1)
    this.list.push
    },
             
}

}

</script>

<style>

h1 {
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: #080808;
  padding-bottom: 30px;
}

.text {
  font-size:1vw;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .text {
    font-size:2vw;
  }
}

@media screen and (max-width: 600px) {
  .text {
    font-size:3vw;
  }
}

</style>