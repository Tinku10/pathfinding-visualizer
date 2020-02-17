<template>
<div id="h">
  <div id="header">
    <span id="b"><button>ABOUT</button></span>
    <span><h2 id="heading">PATHFINDING VISUALIZER</h2></span>
    <span id="sel"><slot name="select"></slot></span>
    
  </div>
  
  <!-- <h5>A visualization tool to find a path from the source to the destination, if present</h5> -->
</div>
  
</template>

<script>
export default {
  components: {}
};
</script>

<style>
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
#b{
  margin-top: 15px;
  margin-left: 50px;
}
button{
  width: 140px;
  height: 40px;
  border-radius: 2em;
  margin: 0px;
  /* box-sizing: border-box; */
  border: 1px solid #4fc08d;
  text-align: center;
  /* justify-content:center; */
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  /* padding: 0.75em 2em; */
  /* display: inline-block; */
  color: #fff;
  background-color: #4fc08d;

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
#sel{
  margin-top: 12px;
  margin-right: 10px;
}
#h{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h5{
  font-size: 20px; 
  align-content: center;
  font-style: italic;
  font-weight: lighter;
  padding: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0px;
}
</style>
