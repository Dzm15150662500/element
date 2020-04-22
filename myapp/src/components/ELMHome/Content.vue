<template>
	<div>
		<section v-for="item in rests" :key="item.restaurant.id" >

		</section>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "Content",
		data() {
			return {
				rests: []
			}
		},
		components: {
		Cell
		},
		mounted() {
		this.getData()
		},
		methods: {
			getData() {
				axios.get("http://localhost:3000/restapi/shopping/v3/restaurants")
.then((res)=>{
	console.log(res);
	this.rests = res.data.items
})
			}
		},
		filters: {
			urlFormatter(oldValue) {
				const first = "https://fuss10.elemecdn.com/";
				const second = oldValue.slice(0, 1);
				const third = oldValue.slice(1, 3);
				const forth = oldValue.slice(3);
				const fifth = ".png?imageMogr/thumbnail/!130x130r/gravity/Center/crop/130x130/";
				return `${first}${second}/${third}/${forth}${fifth}`;
			}
		}
	}
</script>

<style scoped="scoped">

</style>
