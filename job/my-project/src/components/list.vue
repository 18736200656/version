<template>	
	<div id="container">
		<vue-waterfall-easy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
			<a :href="v.link" class="img_box" v-for="(v,i) in imgsArr" :style="{padding:gap/2+'px',width:isMobile ? '' :colWidth+'px'}">
				<a href="" class="img_inner_box">
					<div class="img_wraper" :style="{imgWidth +'px',height:v.height ? v.height +'px':''}">  
						<img :src="v.src" alt="" class="img_info">
						<slot :index="i" :value='v'></slot>
					</div>
				</a>
			</a>
		</vue-waterfall-easy>
	</div>	
</template>
<style lang="less" type="text/less">
	
</style>
<script type="text/ecmascript-6">
	import vueWaterfallEasy from 'vue-waterfall-easy'
	import axios from 'axios'
	export default {
		name:'List',
		data(){
			return {
				list:[],
				goodsID:1,
				pageCode:5,
				imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
				fetchImgsArr: [] //存放每次滚动时下一批要加载的图片的数组
			 }
		},
		props: {
			gap: { // 图片间隔
			 	type: Number,
			 	default: 20
		 	},
		 	maxCols: { // 最大的列数
			 	type: Number,
			 	default: 5
		 	},
			imgsArr: { // 请求返回的图片数据，格式：[{src:'1.jpg','link':'url1' 	info:'自定义图片信息'},{src:'2.jpg','link':'url2',info:'自定义图片信息'}...]
				type: Array,
				required: true
			 },
		 	imgWidth: { // 指定图片的统一宽度 
		 		type: Number,
				default: 240
		 	},
		 	timeOut: { // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
		 		type: Number,
		 		default: 500
		 	}
		},
		components:{
			vueWaterfallEasy
		},
		created(){
			this.getList();
			this.imgsArr = this.initImgsArr(0, 10) //初始化第一次（即页面加载完毕时）要加载的图片数据
　　　this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的下一批新的图片的数据数据
		},
		methods:{
			getList:function(){
				let url='http://datainfo.duapp.com/shopdata/getGoods.php';
				//`url?classID=${this.classID}&goodsID=${this.goodsID}$pageCode=${this.pageCode}&linenumber=10`
				this.$http.jsonp(url,{params:{classID:2}})
					.then(res=>{
						this.list = res.data
						console.log(res)
					})
					.catch(err=>console.log(err))
			},
			initImgArr:function(n,m){
				var arr=[];
				for(var i=n;i<m;i++){
					arr.push({
						src:this.list.imgUrl,
						link:'',
						info:'一些图片'
					})
				}
				return arr
			},
			fetchImageData:function(){
				this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
			}	
		}
	}
</script>
