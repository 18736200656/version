<template>
<div>
	<router-view></router-view>	
	<div class="navBar">
		<ul>
			<li>
				<router-link to="/index" tag="div">
					<div>
						<span>首页</span>
					</div>
				</router-link>	
			</li>
			<li>
				<router-link to="/list">
					<div>
						<span>列表</span>
					</div>
				</router-link>	
			</li>
			<li>
				<router-link to="/mine">
					<div>
						<span>我的</span>
					</div>
				</router-link>	
			</li>
			<li>
				<router-link to="/more">
					<div>
						<span>更多</span>
					</div>
				</router-link>	
			</li>
		</ul>
	</div>
</div>	
</template>

<script>
	export default{
		name:'navBar',
		data(){
			return{
			}
		},
		creted(){
			var span = document.getElementdByTagName('span');
			span.forEach(function(el,i){
				el.className='';
				el.onclick=function(){
					console.log(this)
					this.className = 'active'
				}
			})

		},
		methods:{
			
		}
	}
</script>
<style>
.active{color: red;}
.navBar{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 48px;
	border-top: 1px solid #666;
	
}
ul{
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: -2px;
	margin-left: -40px;
}
li{
	list-style: none;
	height: 48px;
	font:20px/48px '';
	color: #666;
	text-align: center;
}
li span{
	color: #666;
}
a.router-link-active {
  color: #f66;
}
li.router-link-active a {
  color: #f66;
}
a{text-decoration: none;}
</style>