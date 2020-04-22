<template>
  <div class="home"  ref="home">
        <DHeader ref="header" ></DHeader>
        <KindCarousel ref = 'carousel'></KindCarousel>
		
     </div> 
</template>

<script>
    import DHeader from '../components/ELMHome/DHeader'
    import KindCarousel from '../components/ELMHome/KindCarousel2'

export default {
    name:"Home",
    components:{
    DHeader,
    KindCarousel,
	
},

}
</script>

<style lang="" scoped>
    
</style>