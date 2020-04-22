<template>
    <!-- 轮播图 --> 
    <div class="block">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in banners" :key="item.id">
            <img id="item" class="small" :src="item.image_hash | urlFormatter" />   
          </el-carousel-item>
        </el-carousel>

      <div class="page" @swipeleft="swipeHandle" @swiperight="swipeHandle"> 
            <div  class="cell" v-for='item in entries' :key="item.id">
                <img :src="item.image_hash | urlFormatter" alt="">
                <span>{{item.name}}</span>
            </div>
        
      </div>
              
       
           
        
      </div>
  </template>
  
   <script>
      import axios from 'axios' 
     export default {
        name:"KindCarousel",
        data(){
            return {
                entries:null,
                banners:null,
                // pageData:null
            }
        },
        mounted() {
            this.getKindsData()
            this.lunbotu()
        },

        methods: {
            lunbotu(){  
            axios.get('http://localhost:3000/restapi/shopping/v2/banners').then((res)=>{
                this.banners = res.data
            })
            .catch((error)=>{
                console.log(error,2);
            })
        },
        getKindsData(){  
            axios.get('http://localhost:3000/restapi/shopping/v2/entries').then((res)=>{
                console.log(res,3); 
                this.entries = res.data[0].entries;
            })
            .catch((error)=>{
                console.log(error,2);
            })
        },
        swipeHandle(event){
            console.log(event);
            if(event.type=="swipeleft"){
                // 左滑
                this.index += 1;
            }
             if(event.type=="swiperight"){
                // 右滑
                this.index -= 1;
             }
        },
        
        },
        filters:{
        // 7d8a867c870b22bc74c87c348b75528djpeg
        // https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/
        urlFormatter(oldValue){
            const first = "https://fuss10.elemecdn.com/";
            const second = oldValue.slice(0,1);
            const third = oldValue.slice(1,3);
            const forth = oldValue.slice(3);
            const fifth = ".jpeg?imageMogr/thumbnail/!90x90r/gravity/Center/crop/90x90/";
            return `${first}${second}/${third}/${forth}${fifth}`;
        }
    }
     }
        </script>
<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.kind{
    position:relative;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
#item {
      width: 100%;
height: 150px;
  }


  .page{
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    padding:10px;
    position:absolute;
    left:0;
    width:100%;
    z-index: -111;
}
.page .cell{
    width:5rem;
    text-align:center;
}
.page .cell img{
    width:5rem;
}
</style>