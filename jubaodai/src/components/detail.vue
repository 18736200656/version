<template>

	<div id="container">
	
	  <div class="imgBox">
	   	<img v-lazy.container="list.goodsListImg" />
		<div class="img_text">	
			<span>{{list.goodsName}}</span>
		</div>
	  </div>		
	</div>

</template>
<style lang="less" type="text/less">
*{margin:0;padding:0;}

		.imgBox{
			border: 1px solid #999;
			img{
				width: 96%;
				padding:2%;
				border-radius: 3px;
			}
		}
		.img_text{
			margin-top: 5px;
			span{
				font: 16px/20px '';
				color: #666;
			}
		}
		

	
</style>
<script type="text/ecmascript-6">
	/*import {Lazyload} from 'mint-ui'
	Vue.use(Lazyload);*/
	import {mapState} from 'vuex'
	
	export default {
		name:'Listshow',
		data(){
			return {
				list:[],
				classID:3,
				goodsID:1,
				pageCode:5
			}

		},
		props:['id'],
		created(){
			this.getList();
		},
		methods:{
			getList:function(){
				let url='http://datainfo.duapp.com/shopdata/getGoods.php';
				this.$http.jsonp(url,{
					params:{
						goodsID:this.$route.params.id
					}
				})
					.then(res=>{
						this.list = res.data[0]
						console.log( res.data[0])
					})
					.catch(err=>console.log(err))
			}		
		}

	}
</script>
