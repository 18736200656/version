<template>
	<div class="login">
		<h1>注册</h1>
		<form method="post" >
			<div>
				<label for="">用户名</label>
				<input type="text" v-model="username">
			</div>
			<div>
				<label for="">密码</label>
				<input type="password" v-model="pwd">
			</div>
			<div>
				<label for="">确认密码</label>
				<input type="password" v-model="conPwd">
			</div>
			<input type="button" value="注册" @click="register">
			<input type="reset" value="重置">
		</form>
	</div>
	
</template>	
<style lang="less" type="text/less" scoped>

	.login{
		padding:0.1rem;
		h1{height:0.48rem;
			font: .24rem/.48rem '';}
		div{
			width:100%;
			height:.48rem;
			margin: 0.1rem;
			display: flex;
			justify-content: space-between;
			label{
				width: 1rem;
				font: .25rem/.5rem '';
				color: #666;
				text-align: left;
			}
			input{
				outline: none;
				border: 1px solid #999;
				color: #000;
				font: .2rem/.5rem '';
				padding-left:0.1rem;

			}
		}
		input[type="button"],input[type="reset"]{
			border: 0;
			border-radius: 0.05rem;
			display: inline-block;
			height: .5rem;
			padding: 0 .2rem;
			font: .24rem/.5rem '';
			background: blue;
			color: #fff;
		}
	}
</style>	
<script>
export default{
	name:'Login',
	data(){
		return{
			username:'',
			pwd:'',
			conPwd:''
		}
	},
	methods:{
		register:function(){
			var url='http://datainfo.duapp.com/shopdata/userinfo.php'
			this.$http.post(url,{params:{
				status:register,
				userID:this.username,
				password:this.pwd
			}})
			.then(res=>{
				if(res.status ==0){
					alert('用户名已经存在')
				}else{
					alert('注册成功')
				}
			})
			.catch(error=>console.log(error))
		}

	}
}
</script>