<template>
  <div>
    <head-box></head-box>
    <!-- <br> -->
    <div id="temp">
      <!-- <span> -->
      <!-- <message-box v-if="noPath"></message-box> -->
      <box-grid  ref="grid" ></box-grid>
      
      <!-- </span> -->
      <!-- <span> -->
      <content-box>
        <template id="b" v-slot:select>
          <select class="select" v-model="algorithm">
            <option hidden>{{ algorithm }}</option>
            <option>Breadth First Search</option>
            <option>Depth First Search</option>
            <option>Dijkstra's Algorithm</option>
            <option>Bellman-Ford's Algorithm</option>
          </select>
          <br />
          <br />
        </template>

        <template v-slot:buttons>
          <div id="b">
            <!-- <button class="button" v-on:click="$refs.grid.createGraph()" >Build </button> -->
            <button
              class="button"
              v-on:click="
                $refs.grid.createGraph();
                draw();
                hold = !hold;
              "
              v-bind:pathArr="path"
            >
              Visualize
            </button>
            <div id="distance">
              <span>{{dist}}</span>
              <label for=""><small>Distance</small></label>
            </div>
            
              <button  class="button"  v-on:click="$refs.grid.createGraph();
                drawi();">Instant Path</button>
            

          </div>
        </template>
        <template v-slot:description>
          <p v-if="algorithm == 'Depth First Search'">
            This may or may not give the shortest path
          </p>
          <p v-else-if="algorithm == 'Select an Algorithm'">
            SELECT an algorithm and press VISUALIZE
            
          </p>
          <p v-else>This gives the shortest path possible</p>
          
        </template>

        <template  v-slot:controls>
          <div id="b">
            <button class="button" v-on:click="$refs.grid.clearCanvas()">Clear Canvas</button>
            <button class="button" v-on:click="$refs.grid.clearPath()">Clear Path</button>
          </div>
        </template>
      </content-box>

      <!-- </span> -->
    </div>
    <br>
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
    "foot": footer
  },
  data() {
    return {
      path: null,
      dist: "∞",
      hold: false,
      count: 200,
      algorithm: "Select an Algorithm",
      noPath: true,
      visitedDFS: null, 
      i: 0
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
      this.count = 1;
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
    drawPath(){
      // if(this.path){
        if(this.algorithm == "Depth First Search"){
          if(document.getElementById(this.path[length-1].name.className == "visited")){
            if(this.count < this.path.length){
              this.i = 0;
              document.getElementById(this.path[this.count].name).className = "path";
              this.count++;
            }

          }

        }else{
          if(this.count < this.path.length-1){
  
            document.getElementById(this.path[this.count].name).className = "path";
            this.count++;
          }
        }

        
      // }
      
    },
    drawi(){
      let i = 0;
      while (this.path == null) {
        if(this.algorithm == "Breadth First Search"){
          this.$refs.grid.BFSsearch(false);
          i ++;
          if(i>800){
            if(this.path != null){
              this.noPath = false;
              break;
            }
          }
        }else if(this.algorithm == "Depth First Search"){
          [this.path, this.visitedDFS] = this.$refs.grid.DFS(false);
          i ++;
          if(i>800){
            if(this.path == null){
              this.noPath = true;
              break;
            }
          }
        }
          
      }
    },
    draw() {
      // if(this.hold == true){
        //   this.hold = false;
      // this.$refs.grid.BFSsearch();
      // this.hold++;
      // }
      // let i = 0;
      // console.log(this.dist);
      // if(this.instantB == true){
      //   while (this.path == null) {
      //     this.$refs.grid.BFSsearch();
      //   }
      // }else{
        // let i = 0;
        if (this.path == null) {
          if(this.algorithm == "Breadth First Search"){
            this.$refs.grid.BFSsearch(true);
            // i++;
            // if(i>800){
            //   if(this.path != null){
            //     this.noPath = false;
            //     clearInterval(this.interval);
          
            //   }
            // }
          }else if(this.algorithm == "Depth First Search"){
            alert("fds");
            if(this.i == 0){
              let a = this.$refs.grid.DFS(true);
              this.path = a[0];
              this.visitedDFS = a[1];
            }
            alert("hello");
            if(this.visitedDFS != null){
              if(this.i < this.visitedDFS.length){
                document.getElementById(this.visitedDFS[this.i]).className = "visited";
                this.i ++;

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
          
        }
      // }

        // i++;
      }

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

<style>
.button {
  width: 100px;
  height: 40px;
  font-size: 80%;
  
  font-weight: bold;
  font-family: "Alef", sans-serif;
  color: rgba(171, 126, 223, 0.767);
}
.button:hover{
  background-color:rgb(241, 244, 248);
  border: none;
  margin: none;
  outline: none;
  box-shadow: inset 0 0 10px;
  cursor:pointer;
}
#nc{
  width: 100px;
  height: 50px;
  font-size: 80%;
  font-weight: bold;
  font-family: "Alef", sans-serif;
  color: rgba(171, 126, 223, 0.767);
  background-color: rgba(255, 255, 255, 0.767);
}
#c{
  width: 100px;
  height: 50px;
  font-size: 80%;
  font-weight: bold;
  font-family: "Alef", sans-serif;
  color: rgba(171, 126, 223, 0.767);
  box-shadow: 0 0 50px black;
  
}
.select {
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  cursor: pointer;
  background-color: rgb(
    255,
    255,
    255
  ); /* Fallback color if gradients are not supported */
  background-position: center right;
  background-repeat: no-repeat;
  border: 1px solid rgb(245, 245, 245);
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(255, 255, 255, 0.1);
  color: #555;
  font-size: inherit;
  font-family: "Alef", sans-serif;
  margin: 0;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 350px;
  height: 30px;
  border: none;
  outline: none;
}
#b {
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
}
#temp {
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
}
p {
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 15px;
  color: white;
  outline: 2px;
  padding: 5px;
  border-radius: 3px;
  /* font-family: 'Roboto Slab', serif; */
  font-family: "Source Sans Pro",  sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: lighter;
  background-color: rgb(34, 23, 43);
}
#distance{
  display: flex;
  width: 100px;
  height: 40px;
  flex-direction: column;
  border-radius: 2em;
  box-sizing: border-box;
  border: 1px solid #7b6392;
  /* padding: 4px; */
  color: #f3eded;;
  text-align: center;
  justify-content:center;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: #140225;

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
