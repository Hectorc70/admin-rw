<template>
	<div class="top-bar">
			<div class="conte-img-profile">
				<img src="https://180dc.org/wp-content/uploads/2016/08/default-profile.png" alt="">
				
			</div>
			<div id="conte-text">
				<p >Hector G</p>
			</div>
			<a id="conte-btn" onclick="viewOptionLogout()">
				<svg class="icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="123.959px" height="123.958px"
					viewBox="0 0 123.959 123.958" style="enable-background:new 0 0 123.959 123.958;"
					xml:space="preserve">
					<g>
						<path d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56
					C125.979,34.417,123.279,28.017,117.979,28.017z" />
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
					<g>
					</g>
				</svg>

			<div id="container-option-main-user">
				<a href="/logout/"> Cerrar Sesion </a>
			</div>
			</a>
	</div>
</template>
<script>

export default({
	setup() {
		return 
	},
})
</script>
<style scoped>
.top-bar{
	position: absolute;
	display: flex;	
	align-items: center;
	justify-content: end;
	right: 0px;
	top: 0px;
	width: 90%;
	height: 60px;
}

.conte-img-profile{
	position: relative;
	right: 20px;
	display: block;
	width: 40px;
	height: 40px; 
	border-radius: 22px;
	border: 2px solid var(--color-primary);
	}

.conte-img-profile img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 22px;
}

#conte-text {
  display: flex;
  height: 60px;
  align-items: center;
}
#conte-text p {
  font-family: 'Poppins-Bold';
  color: var(--color-primary);
  margin-right: 20px;
}

#conte-btn {
  display: flex;
  align-items: center;
  height: 60px;
}
#conte-btn .icon {
  fill: var(--color-primary);
  width: 60%;
  height: 60%;
  cursor: pointer;
}

#conte-btn .icon:hover {
  fill: var(--color-resalte);
}

#container-option-main-user{
  display: none;
  visibility:hidden;
  position:relative;

}

#container-option-main-user a{
  position:relative;
  text-decoration:none;
  font-family: var(--font-primary);
}

#container-option-main-user:hover a{
  background-color:var(--color-primary);
  color:var(--color-card)
}

</style>