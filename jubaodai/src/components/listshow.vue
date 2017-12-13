<template>
<div>	
	<div id="container">
		<ul
		 	v-infinite-scroll="loadMore"
		  infinite-scroll-disabled="loading"
		  infinite-scroll-distance="10"
		>
		  <li v-for="item in list">
		  	<router-link :to="'/detail/'+item.goodsID" tag="div">
				  <div class="imgBox">
					   <img v-lazy.container="item.goodsListImg" />
						<div class="img_text">	
							<span>{{item.goodsName}}</span>
						</div>
				  </div>
		   </router-link>
		  </li>
		</ul>
	</div>
</div>	
</template>
<style lang="less" type="text/less">
*{margin:0;padding:0;}
	li{
		list-style: none;
		float: left;
		width:46%;
		padding: 5% 2%;
		.imgBox{
			border: 1px solid #999;
			img{
			width: 100%;
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
				classID:1,
				goodsID:1,
				pageCode:5
			}

		},
		created(){
			this.getList();
		},
		methods:{
			getList:function(){
				let url='http://datainfo.duapp.com/shopdata/getGoods.php';
				this.$http.jsonp(url,{
					params:{
						classId:this.classID
					}
				})
					.then(res=>{
						this.list = res.data
						console.log( res.data)
					})
					.catch(err=>console.log(err))
			},
			loadMore() {
			  this.loading = true;
			  setTimeout(() => {
			    let last = this.list[this.list.length - 1];
			    for (let i = 1; i <= 10; i++) {
			      this.list.push(last + i);
			    }
			    this.loading = false;
			  }, 2500);
			}		
		}

	}
</script>
