class LinkedList {
  front = null;
  lenght = 0;


 

  /**
   * Add a new element to the front of the linked list. O(1)
   */
  pushFront(value){
    let nodoUno = new NodeElement(value, this.front);
    this.front = nodoUno;
    this.lenght++;
}

  /**
   * Returns the value of the element at the provided index. O(n)
   */
  getElement(link,index) {

    if(link[index] ==  undefined){
      console.log("No existe el elemento");  
    }else{
      console.log("El elemento es "+link[index]);  
    }
    
  }

  /**
   * Returns the number of elements in the list. O(1)
   */
count(link) {
  //let Arr = this.front;
  console.log("Cantidad de datos en el objeto "+ Object.keys(link).length);
   console.log("Datos en el objeto ");
  for (let i = 0; i < Object.keys(link).length; i++) {
    console.log("elemento "+i +" valor " + link[i]);
    }
  }

  /**
   * Removes the val from the front of the list and returns the value of that val. O(1)
   */
  popFront(link) {
    console.log("antes de eliminar el ultimo valor de la lista o Array");
        for (let i = 0; i < Object.keys(link).length; i++) {
    console.log("elemento "+i +" valor " + link[i]);
    }
    let last = link.pop();
    console.log("eliminamos el ultimos valor de la lista o Array");
        for (let i = 0; i < Object.keys(link).length; i++) {
    console.log("elemento "+i +" valor " + link[i]);
    }
  }

  /**
   * Inserts an val in the list after the provided index. O(n)
   */
  insertAfter(link, index, val) {
      console.log("antes de insertar un valor de la lista o Array ");
        for (let i = 0; i < Object.keys(link).length; i++) {
    console.log("elemento "+i +" valor " + link[i]);
    }
    if(index < 0 || index > Object.keys(link).length){
      console.log("Indice fuera de rango");
      return;
    }
    for (let i = 0; i < Object.keys(link).length; i++) {
      if(Object.keys(link).length == index){
        console.log("arturo"+val);
        link.push(val);
        break;
      }
      if(i == 0){
        link.push(val);
      }
      if(Object.keys(link).length-i == index){
        link[index] = val;
        break;
      } else {
        link[index+1] = link[index];
        continue
      } 
    }
    console.log("despues de insertar un valor de la lista o Array " );
    for (let i = 0; i < Object.keys(link).length; i++) {
    console.log("elemento "+i +" valor " + link[i]);
    }
    
  }
  
  /**
   * Removes element at the provided index. Returns the removed element. O(n)
   */
  removeElement(link, index) {
    if(index < 0 || index > Object.keys(link).length){
      console.log("Indice fuera de rango");
      return;
    }
    link.splice(index, 1);
    console.log("despues de remover un valor de la lista o Array " );
    for (let i = 0; i < Object.keys(link).length; i++) {
    console.log("elemento "+ i +" valor " + link[i]);
    }
  }

  /**
   * Reverses the direction of the linked list. O(n)
   */
  //reverse() {
    //throw Error('Not implemented');
 // }
}

class NodeElement {

  value;
  nextNodeElement;

  constructor(value, nextNodeElement){
    this.value = value;
    this.nextNodeElement = nextNodeElement;
   
  }

}




module.exports = LinkedList