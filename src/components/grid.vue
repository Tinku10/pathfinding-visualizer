<template>
  <div id="area">
    <!-- <div v-for="grid in grids" v-bind:key="grid">
      <span id="grid-item" v-for="box in grid" v-bind:key="box"></span>
    </div>-->
    
    <tbody>
      <tr v-for="i in row" :id="'row' + '-' + i" v-bind:key="i">
        <td
          class="unvisited"
          v-for="j in column"
          :id="i + '-' + j"
          v-bind:key="j"
          @mouseover="putWall(i + '-' + j)"
          v-on:click.exact="hold = !hold"
          v-bind:nodes[i][j]="id"
          v-on:click.ctrl="update()"
        ></td>
      </tr>
    </tbody>
  </div>
</template>

<script>
import Queue from "@/Queue.js";
import {bus} from '../main'

export default {
  components: {},
  // props: ['row', 'column', 'si', 'sj', 'di', 'dj'],
  // props: {
  //   instant_result: {
  //     type: Boolean,
  //     required: true 
  //   }
  // },
  // },
  data: function() {
    return {
      row: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
      column: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
        
      hold: false,
      nodes: new Array(22).fill(null).map(() => new Array(39).fill(null)),
      path: new Array(22).fill(null).map(() => new Array(39).fill(null)),
      si: 11,
      sj: 8,
      di: 11,
      dj: 29,
      count: 0,
      pathArr: null,
      distance: 0,
      draw: true,
      dfsVisited: [],
      q: new Queue()
      // destination: document.getElementById('9'+'-'+'25').setAttribute("class", "destination")
    };
  },
  
 
  mounted(){
    let s = document.getElementById(
      String(this.si) + String("-") + String(this.sj)
    );
    let d = document.getElementById(
      String(this.di) + String("-") + String(this.dj)
    );
    s.className = "sd";
    d.className = "sd";
    
    // s.onmousedown = function drag(){
    //   s.className = "unvisited";
    //   for (let i = 0; i <= 21; i++) {
    //     for (let j = 0; j <= 37; j++) {
    //       let id = document.getElementById(String(i) + String("-") + String(j));
    //       id.onmouseup = function drop(){
    //         id.className = "sd";
    //         var ar = id.id.split("-");
    //         this.si = parseInt(ar[0]);
    //         this.sj = parseInt(ar[1]);
    //         this.sId = ar.toString();
            
    //       };
    //     }
    //   }
    // }
   
  
    // d.onmousedown = function drag(){
    //   d.className = "unvisited";
    //   for (let i = 0; i <= 21; i++) {
    //     for (let j = 0; j <= 37; j++) {
    //       let id = document.getElementById(String(i) + String("-") + String(j));
    //       id.onmouseup = function drop(){
    //         id.className = "sd";
    //         var ar = id.id.split("-");
    //         this.di = parseInt(ar[0]);
    //         this.dj = parseInt(ar[1]);
    //       };
    //     }
    //   }

    // };
    // console.log(this.si);
    // console.log(this.sj);
    // this.update(this.si, this.sj, this.di, this.dj);

  },
  
  
  methods: {
    
    putWall(id) {
      if (this.hold === true && this.draw == true) {
        let l = document.getElementById(id);
        l.setAttribute("class", "wall");
        
          // l.onmouseover = function convert(){
          //   if(l.className == "wall"){
          //     l.className = "unvisited";
          //   }
          // };
          
        
      }
    },
    // makeNode: function(id, i, j) {
    //     this.name = id;
    //     this.i = i;
    //     this.j = j;
    //     this.edges = [null, null, null, null];
    //     this.distance = null;
    // },
    insertEdges() {
      for (let i = 0; i <= 21; i++) {
        for (let j = 0; j <= 37; j++) {
          let node = this.nodes[i][j];

          // if (node.hasWall == false) {
          if (i - 1 >= 0) {
            if (this.nodes[i - 1][j].hasWall == false) {
              node.edges[0] = this.nodes[i - 1][j];
            }
          }
          if (i + 1 <= 21) {
            if (this.nodes[i + 1][j].hasWall == false) {
              node.edges[1] = this.nodes[i + 1][j];
            }
          }
          if (j - 1 >= 0) {
            if (this.nodes[i][j - 1].hasWall == false) {
              node.edges[2] = this.nodes[i][j - 1];
            }
          }
          if (j + 1 <= 37) {
            if (this.nodes[i][j + 1].hasWall == false) {
              node.edges[3] = this.nodes[i][j + 1];
            }
          }
          // console.log(node.edges);
          // alert(String(i)+String(j));
        }
      }
      // }
      // console.log(this.nodes);
    },
    clearCanvas(){
      bus.$emit("stop", {p: null, d: "∞"});
      this.q = new Queue();
      // this.instant_result = false;
      bus.$emit("inst", false);
      for (let i = 0; i <= 21; i++) {
        for (let j = 0; j <= 37; j++) {

          if(document.getElementById(String(i) + String("-") + String(j)).className == "visited"){
            document.getElementById(String(i) + String("-") + String(j)).className = "unvisited";
          }
          else if(document.getElementById(String(i) + String("-") + String(j)).className == "wall"){
            document.getElementById(String(i) + String("-") + String(j)).className = "unvisited";
          }
          else if(document.getElementById(String(i) + String("-") + String(j)).className == "path"){
            document.getElementById(String(i) + String("-") + String(j)).className = "unvisited";
          }
          // if(this.nodes[i][j]){
          //   this.nodes[i][j].edges = [null, null, null, null];
          //   this.nodes[i][j].distance = 0;
          //   this.nodes[i][j].hasWall = false; 
          // }
          
        }
      }
    },
    clearPath(){
      bus.$emit("stop", {p: null, d: "∞"});
      this.q = new Queue();
      // this.instant_result = false;
      // bus.$emit("inst", false);
      for (let i = 0; i <= 21; i++) {
        for (let j = 0; j <= 37; j++) {

          if(document.getElementById(String(i) + String("-") + String(j)).className == "visited"){
            document.getElementById(String(i) + String("-") + String(j)).className = "unvisited"
          }
          else if(document.getElementById(String(i) + String("-") + String(j)).className == "path"){
            document.getElementById(String(i) + String("-") + String(j)).className = "unvisited";
          }
          // if(this.nodes[i][j]){
          //   this.nodes[i][j].distance = 0;

          // }
          
        }
      }
    },
    createGraph() {
      // console.log(this.si);
      // console.log(this.sj);
      // this.draw = false
      for (let i = 0; i <= 21; i++) {
        for (let j = 0; j <= 37; j++) {
          let id = document.getElementById(String(i) + String("-") + String(j)).id;
          this.nodes[i][j] = {
            name: id,
            pi: i,
            pj: j,
            edges: [null, null, null, null],
            distance: 0,
            hasWall: false,
            visited: false
          };
          if (document.getElementById(id).className == "wall") {
            this.nodes[i][j].hasWall = true;
          }
          
          
          // console.log(String(i)+String(j));
        }
      }
      // console.log(this.nodes);
      this.insertEdges();
    },

    BFSsearch(show) {
      if (this.q.isEmpty()) {
        // this.nodes[this.si][this.sj].distance = 0;
        this.q.enqueue(this.nodes[this.si][this.sj]);
        this.path[this.si][this.sj] = [this.nodes[this.si][this.sj]];
        // document.getElementById(this.nodes[this.si][this.sj].name).className = "visited";
      } else if (this.q.isEmpty() == false) {
        let rm = this.q.dequeue();
        if(document.getElementById(rm.name).className == "sd"){
          document.getElementById(rm.name).className = "sd";
        }else{
          if(show == true){
            document.getElementById(rm.name).className = "visited";
          }else{
            document.getElementById(rm.name).className = "unvisited";
          }
        }
        // console.log(rm.name);
        // console.log(rm.edges);
        // this.close.push(rm);
        for (let k = 0; k < 4; k++) {
          var node = rm.edges[k];
          if (node != null) {
            if (node.distance == 0) {
              // console.log(node.name);
              node.distance = rm.distance + 1;

              if (this.path[rm.pi][rm.pj]) {
                this.path[node.pi][node.pj] = [node];
                this.path[node.pi][node.pj] = this.path[node.pi][node.pj].concat(this.path[rm.pi][rm.pj]);
              }
              this.q.enqueue(node);
              if ((node.pi == this.di) && (node.pj == this.dj)) {
                this.pathArr = this.path[this.di][this.dj]
                this.distance = node.distance;
                bus.$emit("stop", {p: this.pathArr, d: this.distance});
                // for(let i= 1; i<this.pathArr.length-1; i++){
                //   document.getElementById(this.pathArr[i].name).className = "path"
                  // document.getElementById(this.pathArr[0].name).className = "sd"
                  // document.getElementById(this.pathArr[this.pathArr.length-1].name).className = "sd"
                // }
              }
            }
          }
        }
      }
    },
    checkEqual(a, b){
      
      for(let i = 0; i < 4; i++){
        if(a[i] != b[i]){
            return false;
        }
      }
      return true
    },
    DFShelper(xi, xj, yi, yj, show){
      if(this.nodes[xi][xj]){
        if(this.nodes[xi][xj].visited == false){
          this.nodes[xi][xj].visited = true;
          if(show == true){
            if(document.getElementById(this.nodes[xi][xj].name).className == "sd"){
              document.getElementById(this.nodes[xi][xj].name).className = "sd";
            }else{
              this.dfsVisited = this.dfsVisited.concat(this.nodes[xi][xj].name);
              // document.getElementById(this.nodes[xi][xj].name).className = "visited";
            }
          }
          if(this.checkEqual(this.nodes[xi][xj].edges, [null, null, null, null]) == false){

            for(let i = 0; i < 4; i++){
              let node = this.nodes[xi][xj].edges[i];
              
              if(node != null){
                if(node.pi == yi && node.pj == yj){
                  return [node];
                }
                let p = this.DFShelper(node.pi, node.pj, yi, yj, show);
                if(p != null){
                  return p.concat(node);
                }
              }
            }
          }else{
            return;
          }

          

        }else{
          return;
        }
      }
    },
    DFS(show){
      let p = this.DFShelper(this.si, this.sj, this.di, this.dj, show);
      if(p != null){
        return [p, this.dfsVisited];

      }
    }
  }
};
</script>

<style>

.unvisited {
  /* display: inline-block; */
  background: rgba(255, 255, 255, 0.89);
  width: 25px;
  height: 25px;
  outline: 1px #d5d6d6;
  outline-style: solid;
  /* margin-right: 1px;
  margin-bottom: 1px;
  margin-left: 1px;
  margin-top: 1px; */
}
@keyframes example {
  from {
    transform: scale(0.1);
    background-color: rgba(57, 87, 2, 0.89);
  }
  to {
    transform: scale(1);
    background-color: rgb(116, 213, 226);
  }
}
.visited {
  /* display: inline-block; */
  background-color: rgba(255, 255, 255, 0.89);
  animation-name: example;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  width: 25px;
  height: 25px;
  outline: 1px rgba(255, 255, 255, 0.541);
  outline-style: solid;
  /* margin-right: 1px;
  margin-bottom: 1px; */
}

@keyframes makewall {
  from {
    /* transform: scale(0.5); */
    background-color: rgba(253, 253, 253, 0.89);
  }
  to {
    /* transform: scale(1); */
    background-color: rgb(17, 0, 27);
  }
}
.wall {
  /* display: inline-block; */
  background-color: rgba(255, 255, 255, 0.89);
  animation-name: makewall;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  width: 25px;
  height: 25px;
  /* margin-right: 1px;
  margin-bottom: 1px; */
  /* outline:rgba(30, 34, 33, 0.884) 1px; */
  /* outline: 1px rgba(0, 0, 0, 0.76); */
  /* outline-style: solid; */
}
.sd {
  /* display: inline-block; */
  background: rgba(255, 255, 255, 0.89);
  background-image: url("../../public/chevron.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
  outline: 1px rgba(199, 194, 209, 0.918);
  outline-style: solid;
  /* background-size: 30px 30px; */
  /* margin-top: 1px;
  margin-left: 1px; */
}
/* background-size: 25px 25px; */
/* margin-right: 1px;
  margin-bottom: 1px; */

@keyframes makepath {
  from {
    background-color: rgb(175, 149, 2);
  }
  to {
    background-color: rgba(241, 255, 43, 0.719);
  }
}
.path{
  background-color: rgb(177, 255, 229);
  animation-name: makepath;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  width: 25px;
  height: 25px;
}

.sd:hover{
  box-shadow: 0 0 6px rgb(141, 141, 214);
}
</style>
