<template>
<div>
  <va-navbar color="#071D25">
    <template #left>
      <va-navbar-item>
      </va-navbar-item>
    </template>
    <template #center>
      <va-navbar-item>
        <router-link to="/">Home</router-link>  
      </va-navbar-item>
      <va-navbar-item>
        <router-link to="/characters">Characters</router-link> 
      </va-navbar-item>
      <va-navbar-item>
        <router-link to="/chapters">Chapters</router-link>
      </va-navbar-item>
      <va-navbar-item>
        <router-link to="/locations">Locations</router-link>
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
      </va-navbar-item>
    </template>
  </va-navbar>
  <router-view/>
</div>
</template>

<style scoped>
.va-navbar {
  --va-navbar-height: 5vw;
}

a{
  position: relative;
  color: aliceblue;
  font-size: 2vw;
  transition: all 0.3s;
}

a:before ,a:after{
  position: absolute;
  left: 0px;
  width: 100%;
  height: 2px;
  background: #219AAF;
  content: "";
  opacity: 0;
  transition: all 0.3s;
} 

a:before{
  top: 0px;
  transform: translateY(15px);
}

a:after{
  bottom: 0px;
  transform: translateY(-15px);
}

a:hover{
  color:#83BE1F;
} 

a:hover::before{
  opacity: 1;
  transform: translateY(-5px);
}

a:hover:after{
  opacity: 1;
  transform: translateY(5px);
}

a.router-link-exact-active {
  color: #83BE1F;
}

</style>
