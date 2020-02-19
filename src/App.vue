<template>
  <div>
    <head-box>
      <template v-slot:select>
        <select class="select" v-model="algorithm">
          <option style="color: #4fc08d;" hidden>{{ algorithm }}</option>
          <option>Breadth First Search</option>
          <option>Depth First Search</option>
          <option>Dijkstra's Algorithm</option>
          <option>Bellman-Ford's Algorithm</option>
        </select>
        <br />
        <br />
      </template>
    </head-box>
    <br />
    <br/>
    <div id="temp">
      <!-- <span> -->
      <!-- <message-box v-if="noPath"></message-box> -->
      <box-grid ref="grid"></box-grid>

      <!-- </span> -->
      <!-- <span> -->
      <content-box>
        <template v-slot:button>
          <div id="b">
            <!-- <button class="button" v-on:click="$refs.grid.createGraph()" >Build </button> -->
            <button
              class="button"
              v-on:click="
                $refs.grid.createGraph();
                draw();
                hold = true;
                b = 'viz'
              "
              v-bind:pathArr="path"
            >Visualize</button>
            <div id="distance">
              <span>{{dist}}</span>
              <label for>
                <small>Distance</small>
              </label>
            </div>

            <button
              class="button"
              v-on:click="$refs.grid.createGraph();
                drawi();
                hold = true;
                b = 'ins'"
            >Instant Path</button>
          </div>
        </template>
        <template v-slot:description>
          <p v-if="algorithm == 'Depth First Search'">This may or may not give the shortest path</p>
          <p v-else-if="algorithm == 'SELECT AN ALGORITHM'">SELECT an algorithm and press VISUALIZE</p>
          <p v-else>This gives the shortest path possible</p>
        </template>

        <template v-slot:controls>
          <div id="b">
            <button class="button" v-on:click="$refs.grid.clearCanvas()">Clear Canvas</button>
            <button class="button" v-on:click="$refs.grid.clearPath()">Clear Path</button>
          </div>
        </template>
      </content-box>

      <!-- </span> -->
    </div>
    <br />
    <br />
    <foot></foot>
  </div>
</template>

<script>
import grid from "./components/grid";
import content from "./components/content";
import header from "./components/header";
import footer from "./components/footer";
import { bus } from "../src/main";
export default {
  components: {
    "box-grid": grid,
    "content-box": content,
    "head-box": header,
    foot: footer
  },
  data() {
    return {
      path: null,
      dist: "∞",
      hold: false,
      count: 200,
      algorithm: "SELECT AN ALGORITHM",
      noPath: true,
      visitedDFS: null,
      i: -1,
      b: null
      // instantB: false
      // rows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      // columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
      // sx: 11,
      // sy: 8,
      // dx: 11,
      // dy: 30,
    };
  },
  created() {
    bus.$on("stop", data => {
      this.path = data.p;
      this.dist = data.d;
      this.count = 0;
      this.hold = false;
      this.noPath = true;
      this.visitedDFS = null;
      this.i = -1;
    });
    // bus.$on("inst", data => {
    //   console.log("dsf");
    //   console.log(data);
    //   this.instantB = data;
    // })

    this.interval = setInterval(() => this.draw(), 15);
    this.interval = setInterval(() => this.drawPath(), 20);
  },
  // updated(){
  //     this.draw()
  // },

  methods: {
    drawPath() {
      if (
        this.algorithm == "Depth First Search" &&
        this.path != null &&
        this.i == this.visitedDFS.length
      ) {
        if (this.count < this.path.length) {
          if (
            document.getElementById(this.path[this.count].name).className !=
            "sd"
          ) {
            document.getElementById(this.path[this.count].name).className =
              "path";
          }
          this.count++;
        }
      } else if(this.algorithm == "Breadth First Search"){
        if (this.count < this.path.length - 1) {
          if (
            document.getElementById(this.path[this.count].name).className !=
            "sd"
          ) {
            document.getElementById(this.path[this.count].name).className =
              "path";
          }
          this.count++;
        }
      }

      // }
    },
    drawi() {
      // let i = 0;
      
        if (this.algorithm == "Breadth First Search") {
          while (this.path == null) {
            this.$refs.grid.BFSsearch(false);
            // i ++;
            // if(i>800){
            //   if(this.path != null){
            //     this.noPath = false;
            //     break;
            //   }
            // }
          }
        }
        
      
    },
    draw() {
    if (this.algorithm == "Breadth First Search") {
      if (this.path == null) {
        this.$refs.grid.BFSsearch(true);
      }
    }
    else if (this.algorithm == "Depth First Search") {
      let a = null;
      if (this.i == -1) {
        a = this.$refs.grid.DFS();
        this.path = a[0];
        this.visitedDFS = a[1];
        this.i++;
      } else {
        if(this.b == 'viz'){
          if (this.i < this.visitedDFS.length) {
            document.getElementById(this.visitedDFS[this.i]).className =
              "visited";
            this.i++;
  
          }

        }else{
          this.i = this.visitedDFS.length;
        }
      }

        // i ++;
        // if(i>800){
        //   if(this.path != null){
        //     this.noPath = false;
        //     clearInterval(this.interval);

        //   }
        // }
        // }
      }
      // }

      // i++;
    }
  
          // i ++;
          // if(i>800){
          //   if(this.path != null){
          //     this.noPath = false;
          //     clearInterval(this.interval);

          //   }
          // }
          // }
        
     
  }
  // drag(){
  //   let s = document.getElementById(String(this.sx)+String("-")+String(this.sy));
  //   s.className = "unvisited";
  //   for (let i = 0; i <= 21; i++) {
  //     for (let j = 0; j <= 38; j++) {
  //       let id = document.getElementById(String(i) + String("-") + String(j));
  //       id.onmouseup = function drop(){
  //         id.className = "sd";
  //         var ar = id.id.split("-");
  //         this.sx = parseInt(ar[0]);
  //         this.sy = parseInt(ar[1]);
  //       }
  //     }
  //   }
  // },
  // update(){
  //   console.log("called");
  //   let s = document.getElementById(String(this.sx)+String("-")+String(this.sy));
  //   s.onmousedown
  //   return true;
  // // dispPath(event) {
  // //   this.path = event;
  // }
  // }
};
</script>

<style scoped>
.button {
  position: relative;

  width: 100px;
  height: 40px;
  font-size: 80%;
  border-radius: 2em;
  background-color: white;
  /* font-weight: bold; */
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  border: #4fc08d 1px solid;
  outline: none;
  margin: none;
  /* border: none; */
}
.button:hover {
  background-color: #4fc08d;
  border: #4fc08d;
  color: white;

  cursor: pointer;
}
#nc {
  position: relative;

  width: 100px;
  height: 50px;
  font-size: 80%;
  font-weight: bold;
  font-family: "Alef", sans-serif;
  color: rgba(171, 126, 223, 0.767);
  background-color: rgba(255, 255, 255, 0.767);
}
#c {
  position: relative;

  width: 100px;
  height: 50px;
  font-size: 80%;
  font-weight: bold;
  font-family: "Alef", sans-serif;
  color: rgba(171, 126, 223, 0.767);
  box-shadow: 0 0 50px black;
}

#b {
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding: 5px; */
  margin: 4px;
}
#temp {
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
#distance {
  position: relative;

  display: flex;
  width: 100px;
  height: 40px;
  flex-direction: column;
  border-radius: 2em;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #434346;
  /* padding: 4px; */
  color: #f3eded;
  text-align: center;
  justify-content: center;
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #434346;
}
::-webkit-scrollbar {
  width: 6px;
  height: 0px;
}
::-webkit-scrollbar-track {
  background: #ececf1;
}
::-webkit-scrollbar-thumb {
  background: rgba(165, 160, 160, 0.637);
}
</style>
