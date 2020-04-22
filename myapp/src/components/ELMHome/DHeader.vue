<template>
    <div class="header">
    <p v-if="address">
        <img src="../../assets/地址.png" alt="地址图标">
        {{address}}
        <mt-search
  cancel-text="取消"
  placeholder="半价尝鲜 减配送费">
</mt-search>

    </p>
  </div>
    </template>
   <script>
       import axios from 'axios'
     export default {
        name:"dheader",
        data() {
            return {
                address:true
            }
        },
        // mounted() {
        //     axios.get("http://localhost:3000/restapi/member/v2/users/14547420/location")
        //     .then((res)=>{
        //         console.log(res);
        //         this.address = res.data.address[0];
        // }).catch((error)=>{
        //     console.log(error);
        //     })
        // },
     }
        </script>
<style sec>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.fixed{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index : 100;
}
.header{
   width: 100%;
   height: 100px;
   /* border: 1px solid palegreen; */
    
}

p img {
    width: 1.5rem;
    height: 1.5rem;
}

.mint-searchbar{
  position: relative;
  top: 1rem;
}
.mintui{
  width: 20px;
}

</style>