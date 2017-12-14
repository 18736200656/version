<template>
	<div class="waterfalls">
		<ul id="waterfalls-left"></ul>
		<ul id="waterfalls-right"></ul>
		<ul id="items">
			 <li v-for="photo in photos">
		     <router-link :to="'detail/'+photo.id">
		       <img :src="photo.src" alt="">
		       <span v-show="photo.isDel" @click.stop.prevent="noLink">{{photo.delDesc}}</span>
		     </router-link>
		     <div class="desc-info">
		       <p>编号：<span>{{photo.numbering}}</span></p>
		     </div>
		     <div class="card-footer no-border">
		       <a href="#" :class="['link custom-link']" @click.prevent.stop="praise">{{photo.praise || 0}}</a>
		       <span></span>
		       <a href="#" class="link custom-link">编辑</a>
		       <span></span>
		       <a href="#" class="link custom-link">删除</a>
		     </div>
		   </li>
		</ul>
	</div>
</template>
<script>

$l = $("#waterfalls-left"),
$r = $("#waterfalls-right");
export default{
	name:'More',
	data(){
		return{

		}
	},
	computed:{
		'photos':function(){
			var url='http://datainfo.duapp.com/shopdata/getGoods.php'
			return this.$http.jsonp(url,{classID:2})
			.then(res=>{
				this.photos = res.data
			})
			.catch(error=>console.log(error))
		}
	},
	created:{
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

</script>