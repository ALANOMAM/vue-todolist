/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
-"text", una stringa che indica il testo del todo
-"done", un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


*/




const {createApp} = Vue;

createApp({
    data() {
        return {

          nuovoElemento: {
             text:" ",
             done:false
          },
    
        todoArray : [
          {
            text:"Fare le spesa",
            done: false
          },

          {
            text:"Andare a nuoto",
            done: true
          },

          {
            text:"Studiare",
            done: false
          },

          {
            text:"Lavare le macchina",
            done: false
          },

          {
            text:"Pagare le bollette",
            done: true
          }
        ]

        }
    },

    methods: {

         aggiungiElemento(){
            //test che mi assicura che non posso pushare un array vuoto
             if(this.nuovoElemento.text.trim() != ""){
                //come pusho i nuovi oggetti usando anche spread operator
            this.todoArray.push({...this.nuovoElemento})
             }
        },

     eliminaTodo(todoIndex){
       //console.log(todoIndex)
       this.todoArray.splice(todoIndex,1)
     },

   invertire(todoIndex){ 
    //console.log("inverto",todoIndex)

    //console.log(this.todoArray[todoIndex].done)
     //let currentState = (this.todoArray[todoIndex].done)
     // let inverted = !(currentState)

     this.todoArray[todoIndex].done = !(this.todoArray[todoIndex].done)
   // console.log("current",this.todoArray[todoIndex].done)
   // console.log("inverted", inverted)

   // return inverted
    
}    
    }, 

}).mount("#app");