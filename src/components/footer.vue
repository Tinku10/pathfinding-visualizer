<template>
  <div id="foot">
    <a href="https://github.com/Tinku10" target=_blank style="text-decoration: none; color: inherit;"><div id="logo"></div></a>
    <div>&#60; &#62; with ❤️ by tinku</div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
div {
  display: block;
  text-align: center;
  margin: none;
  margin-left: -10px;
  margin-right: -10px;
  padding: 5px;
  font-family: "Fira Sans", sans-serif;
  font-weight: lighter;
  color: rgba(255, 251, 251, 0.644);
  background-color: rgb(78, 77, 77);
}
#logo{
  height: 20px;
  width: 20px;
  padding: 5px;
  background: url('../../public/github.png');
  background-repeat: no-repeat;
}
#foot{
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
