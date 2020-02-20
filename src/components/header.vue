<template>
  <div id="h">
    <div id="header">
      <a
        style="text-decoration: none; color: inherit;"
        href="https://github.com/Tinku10/pathfinding-visualizer/tree/alt-design"
        target="_blank"
        ><button><b>GITHUB</b></button></a
      >
      <div id="main">
        <div class="img"></div>
        <div>
          <h2 id="heading">PATHFINDING<br />VISUALIZER</h2>
        </div>
      </div>
      <span id="sel"><slot name="select"></slot></span>
    </div>
    <article>
      <section>
        <h4>Select an algorithm</h4>
        <p class="content">
          Try different algorithms from the dropdown to see its working.
        </p>
      </section>
      <section>
        <h4>Put obstacles</h4>
        <p class="content">
          Obstacles can be inserted in the path to see how the algorithm
          resolves around these obstacles. It is purely optional.
        </p>
      </section>
      <section>
        <h4>Visualize</h4>
        <p class="content">
          Intutive interface and options to quickly visualize the path-finding. Try the Instant Path feature to get a quick path.
        </p>
      </section>
    </article>
    <p id="note" v-if="alg == 'Bellman-Ford Algorithm'">This algorithm is slow, but more versatile</p>
    <p id="note" v-if="alg == 'Breadth First Search'">This algorithm is very fast, but can only be applied to unweighted graph</p>
    <p id="note" v-if="alg == 'Depth First Search'">This algorithm is slower, only good if the graph is mostly occupied</p>
    <p id="note" v-if="alg == 'SELECT AN ALGORITHM'">This graph is unweighted and travelling can be done only in UP🠝 DOWN🠟 LEFT🠜 RIGHT🠞</p>



  </div>
</template>

<script>
export default {
  components: {},
  props:{
    alg: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
#heading {
  /* text-align: center; */

  /* padding: 8px; */
  font-family: "Source Sans Pro", sans-serif;
  font-weight: lighter;
  font-size: 55px;
  margin: 0px;
  color: rgba(48, 46, 46, 0.979);
  /* background-color: rgb(17, 0, 27); */
  /* background-color: rgba(7, 7, 7, 0.863); */
}
#ba {
  margin-top: 18px;
  margin-left: 50px;
}
button {
  width: 140px;
  height: 40px;
  border-radius: 2em;
  cursor: pointer;
  background: url("../../public/github (1).png");
  background-position: 5px;
  background-repeat: no-repeat;
  /* box-sizing: border-box; */
  border: 1px solid #4fc08d;
  text-align: center;
  /* justify-content:center; */
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  /* padding: 0.75em 2em; */
  /* display: inline-block; */
  color: #4fc08d;
  font-size: 15px;
  background-color: white;
  margin: none;
  outline: none;
}
#header {
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
  border: 1px gray;
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.1);
  color: #666968;
  font-size: 15px;

  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  /* overflow: hidden; */
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
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
#h {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
}
h4 {
  font-size: 20px;
  align-content: center;
  /* font-style: italic; */
  font-weight: bold;
  padding: 1px;
  font-family: "Source Sans Pro", sans-serif;
  margin: none;
  border: none;
}
section {
  width: 33%;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 2em;
}
article {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  color: #4fc08d;
  padding: 20px;
}
.content {
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  align-content: center;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: rgba(26, 25, 25, 0.979);
  margin: none;
}
.img {
  background: url("../../public/rocket.png");
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
}
#main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 800px;
}
#note{
  background-color: rgb(235, 229, 229);
  font-family: "Source Sans Pro", sans-serif;
  font-weight: lighter;
  font-style: italic;
  font-size: 20px;
  align-content: center;
  padding: 5px;
  border-radius: 0.5em;
}

</style>
