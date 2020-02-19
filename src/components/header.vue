<template>
<div id="h">
  <div id="header">
    <button v-on:click="">GITHUB</button>
    <span><h2 id="heading">PATHFINDING VISUALIZER</h2></span>
    <span id="sel"><slot name="select"></slot></span>
    
  </div>
  <article>
    <section>
    <h4>Visualize</h4>
    <p class="content">Intutive interface and options to quickly visualize the path-finding.</p>
  </section>
  <section>
    <h4>Try different algorithms</h4>
    <p class="content">Try from the dropdown different algorithms to see its working. </p>
  </section>
  <section>
    <h4>Put obstacles</h4>
    <p class="content">Obstacles can be inserted in the path to see how the algorithm resolves around these obstacles.</p>
  </section>
  </article>
  
</div>
  
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
#heading {
  text-align: center;
  
  /* padding: 8px; */
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: lighter;
  font-size: 50px;
  margin: 0px;
  color: rgba(48, 46, 46, 0.979);
  /* background-color: rgb(17, 0, 27); */
  /* background-color: rgba(7, 7, 7, 0.863); */
}
#ba{
  margin-top: 18px;
  margin-left: 50px;
  
}
button{
  width: 140px;
  height: 40px;
  border-radius: 2em;
  cursor: pointer;
  background: url('../../public/github (1).png');
  background-position: 5px;
  background-repeat: no-repeat;
  /* box-sizing: border-box; */
  border: 1px solid #4fc08d;
  text-align: center;
  /* justify-content:center; */
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  /* padding: 0.75em 2em; */
  /* display: inline-block; */
  color: #4fc08d;
  font-size: 15px;
  background-color: white;
  margin: none;

}
#header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 10px;
  /* margin-left: -10px;
  margin-right: -10px; */ 
}
.select {
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 16px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 6px;
  -moz-padding-start: 4px;
  /* cursor: pointer; */
  background-color: rgb(
    255,
    255,
    255
  ); /* Fallback color if gradients are not supported */
  background-position: center right;
  background-repeat: no-repeat;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(255, 255, 255, 0.1);
  color: #666968;
  font-size: 15px;
  
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  overflow: hidden;
  /* padding-top: 2px;
  padding-bottom: 2px; */
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  width: 200px;
  height: 40px;
  border: 1px solid #4fc08d;
  border-radius: 2em;
  outline: none;
}
/* #sel{
  margin-top: 12px;
  margin-right: 10px;
} */
#h{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h4{
  font-size: 20px; 
  align-content: center;
  /* font-style: italic; */
  font-weight: bold;
  padding: 1px;
  font-family: 'Source Sans Pro', sans-serif;
  margin: none;
  border: none;
}
section{
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;

}
article{
  display: flex;
  flex-direction: row;
  justify-content:center;
  font-family: 'Source Sans Pro', sans-serif;
  color:#4fc08d;
  font-weight: lighter;
  font-size: 18px;
  padding: 10px;
}
.content{
  align-content: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  color:rgba(48, 46, 46, 0.979);
  margin: none;
}
</style>
