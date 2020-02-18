<template>
  <div id="content">
    <!-- <slot name="select"></slot> -->
    <br />
    <slot name="button"></slot>
    <br />
    <slot name="description"></slot>
    <br />
    <slot name="controls"></slot>
    <br />
    <br />
    <hr id="col" />
    <br />
    <br />
    <slot name="instant"></slot>
    <div id="info">
      <span id="wall">Wall</span>
      <span id="nv">Not visited</span>
      <span id="v">Visited</span>
      <span id="path">Path</span>
    </div>

    <br />
    <p>Press INSTANT PATH for a quick path</p>
    <p
      id="inf"
    >Click the mouse button and move the pointer to draw walls. Click the mouse button again to stop drawing.</p>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
#content {
  padding: 4px;
  background-color: #ffffff23;
  border-radius: 0.3em;
  /* box-shadow: 0px 0px 6px rgba(226, 226, 226, 0.589); */
  width: 352px;
  height: 540.5px;
  border: rgb(190, 190, 194) 1px solid;
}

p {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 15px;
  color: white;
  outline: 2px;
  padding: 5px;
  color: gray;
  font-size: 20px;
  border-radius: 3px;
  /* font-family: 'Roboto Slab', serif; */
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: lighter;
  background-color: rgb(241, 240, 241);
}
p#inf {
  position: relative;
  margin-bottom: 2px;
  font-size: 15px;
}
#wall {
  position: relative;

  height: 50px;
  width: 50px;
  background: rgb(32, 34, 32);
  /* outline-color: white 1px;
    outline-style: solid; */
  border-radius: 0.3em;
  border: rgb(190, 190, 194) 1px solid;
}
#nv {
  position: relative;

  height: 50px;
  width: 50px;
  background: rgba(255, 255, 255, 0.89);
  /* outline-color: white 1px;
    outline-style: solid; */
  border-radius: 0.3em;

  border: rgb(190, 190, 194) 1px solid;
}
#v {
  position: relative;

  height: 50px;
  width: 50px;
  background: rgba(136, 247, 223, 0.699);
  /* outline-color: white 1px;
    outline-style: solid; */
  border-radius: 0.3em;
  border: rgb(190, 190, 194) 1px solid;
}
#path {
  position: relative;

  height: 50px;
  width: 50px;
  background: rgba(237, 248, 134, 0.719);
  /* outline-color: white 1px;
    outline-style: solid; */
  border-radius: 0.3em;
  border: rgb(190, 190, 194) 1px solid;
}
#info {
  position: relative;

  /* background-color: rgb(34, 23, 43); */
  display: flex;
  flex-direction: row;
  padding: 8px;
  border-radius: 3px;
  font-family: "Alef", sans-serif;
  text-align: center;
  font-size: 80%;
  justify-content: space-evenly;
  color: rgb(102, 101, 102);
}
#col {
  position: relative;

  background-color: rgb(225, 225, 230);
  height: 8px;
  border: none;
  margin: none;
}
</style>
