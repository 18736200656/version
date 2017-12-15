<template>
	<div class="waterfalls">
		<ul id="waterfalls-left"></ul>
		<ul id="waterfalls-right"></ul>
		<ul id="items">
			 <li v-for="photo in photos">
		     <router-link :to="'detail/'+photo.goodsID">
		       <img :src="photo.goodsListImg" alt="">
		       <span v-show="photo.isDel" @click.stop.prevent="noLink">{{photo.goodsName}}</span>
		     </router-link>
		     <div class="desc-info">
		       <p>编号：<span>{{photo.goodsID}}</span></p>
		     </div>
		     <div class="card-footer no-border">
		       <a href="#" :class="['link custom-link']" @click.prevent.stop="praise">{{photo.className || 0}}</a>
		       <span></span>
		       <a href="#" class="link custom-link">编辑</a>
		       <span></span>
		       <a href="#" class="link custom-link">删除</a>
		     </div>
		   </li>
		</ul>
	</div>
</template>
<style>
ul{
	float: left;
	width: 50%;
	
}
</style>
<script>

var $l = $("#waterfalls-left"),
		$r = $("#waterfalls-right");
export default{
	name:'More',
	data(){
		return{
			photos:[]
		}
	},
	created(){
		this.initData()
		this.initImg()	
	},
	methods:{
		initData:function(){
			var url='http://datainfo.duapp.com/shopdata/getGoods.php'
			this.$http.jsonp(url,{params:{classID:2}})
				.then(res=>{
					this.photos=res.data
					console.log(res.data)
				})
				.catch(error=>console.log(error))
		},
		initImg:function(){
			 setTimeout(function () {
			   $("#items").children("li").each(function (index, val) {
			   	var _this = this;
			     var $this = $(this);
			     var $img = $this.find("img").first();
			     $img.on("error", function () {
			       $img.attr("src", "../src/assets/logo.png");
			     });
			 
			     if ($img.get(0).complete) {
			       addItems();
			     } else {
			       $img.on("load", function () {
			         addItems();
			       });
			     }
			 
			     function addItems() {
			       if(_this.leftHeight <= _this.rightHeight){
			         $l.append($this);
			         _this.leftHeight = $l.height();
			       }else{
			         $r.append($this);
			         _this.rightHeight = $r.height();
			       }
			     }
			   });
			 }, 0);		
		}
		
	}
}

</script>