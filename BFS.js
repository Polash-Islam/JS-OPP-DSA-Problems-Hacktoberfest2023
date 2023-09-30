BFS(node) {
   
   let q = new Queue(this.nodes.length);
   let explored = new Set();
   q.enqueue(node);

  
   add(node);

  
   while (!q.isEmpty()) {
      let t = q.dequeue();

      
      console.log(t);

      
      this.edges[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
         explored.add(n);
         q.enqueue(n);
      });
   }
}
