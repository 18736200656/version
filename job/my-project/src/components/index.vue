<template>
<div>	
	<div id="container">
		<ul>
		  <li v-for="item in list">
		  	<router-link :to="'/detail/'+item.id">
			  <div class="imgBox">
				   <img v-lazy.container="item.src" />
					<div class="img_text">	
						<span>{{item.desc}}</span>
					</div>
			  </div>
		   </router-link>
		  </li>
		</ul>
	</div>
</div>	
</template>
<style>
	li{
		float: left;
		width:50%;
		padding: 10px 5px;
	}
	li .imgBox{
		border: 1px solid #999;

	}
	li .imgBox img{
		width: 100%;
		border-radius: 3px;
	}
	.img_text{
		margin-top: 5px;
		
	}
	.img_text span{
		font: 16px/20px '';
		color: orange;
	}
	
</style>
<script type="text/ecmascript-6">
	/*import {Lazyload} from 'mint-ui'
	Vue.use(Lazyload);*/
	import {mapState} from 'vuex'
	export default {
		name:'Index',
		data(){
			return {
				list:[]
			}

		},
		created(){

		},
		methods:{

		},
		computed:{
			...mapState(['list'])
		}
	}
</script>
