<template>
  <div id="content">
    <slot name="select"></slot>
    <br>
    <slot name="buttons"></slot>
    <br>
    <slot name="description"></slot>
    <br>
    <slot name="controls"></slot>
    <br>
    <br>
    <hr id="col">
    <br>
    <br>
    <slot name="instant"></slot>
    <div id="info">
      <span id="wall">Wall</span>
      <span id="nv">Not visited</span>
      <span id="v">Visited</span>
      <span id="path">Path</span>
    </div>
    <!-- <br> -->
    <br>
    <p>Press INSTANT PATH for a quick path</p>
    <p id="inf">Click the mouse button and move the pointer to draw walls. Click the mouse button again to stop drawing.</p>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
  #content{
    
    padding: 5px;
    background-color: rgba(17, 0, 27);
    width: 350px;
    height: 540.5px;
    outline: rgba(17, 0, 27) 1px;
    outline-style: solid;
    
  }
  #content:hover{
    box-shadow: rgb(80, 1, 80) 0 0 6px;
  }
  p#inf{
    display: flex;
    justify-content: center;
    flex-direction: row;
    font-size: 15px;
    color: white;
    outline: 2px;
    padding: 5px;
    font-size: 15px;
    border-radius: 3px;
    /* font-family: 'Roboto Slab', serif; */
    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: lighter;
  }
  #wall{
    height: 50px;
    width: 50px;
    background: rgb(17, 0, 27);
    /* outline-color: white 1px;
    outline-style: solid; */
    box-shadow: 0 0 2px rgba(96, 73, 138, 0.74);
  }
  #nv{
    height: 50px;
    width: 50px;
    background: rgba(255, 255, 255, 0.89);
    /* outline-color: white 1px;
    outline-style: solid; */
    box-shadow: 0 0 2px rgba(96, 73, 138, 0.74);
  }
  #v{
    height: 50px;
    width: 50px;
    background: rgb(116, 213, 226);
    /* outline-color: white 1px;
    outline-style: solid; */
    box-shadow: 0 0 2px rgba(96, 73, 138, 0.74);
  }
  #path{
    height: 50px;
    width: 50px;
    background: rgb(241, 255, 43, 0.719);
    /* outline-color: white 1px;
    outline-style: solid; */
    box-shadow: 0 0 2px rgba(96, 73, 138, 0.74);
  }
  #info{
    /* background-color: rgb(34, 23, 43); */
    display: flex;
    flex-direction: row;
    padding: 8px;
    border-radius: 3px; 
    font-family: "Alef", sans-serif;
    text-align: center;
    font-size: 80%;
    justify-content: space-evenly;
    color:rgb(102, 101, 102)
  }
  #col{
    background-color:rgb(34, 23, 43);
    height: 5px;
    border: none;
    margin: none;
  }
</style>
