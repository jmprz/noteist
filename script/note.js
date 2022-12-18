  /*Notes Section */
  showNotes();
  let addBtn=document.getElementById("addBtn");
  addBtn.addEventListener("click",function(e){
      let addTxt=document.getElementById("note-text");
      let addTitle = document.getElementById("note-title");
      if (addTitle.value == "" || addTxt.value == "") {
        return alert("Please add Note Title and Details!")
    }
      let notes=localStorage.getItem("notes");
      if(notes==null){
          notesObj=[];
      }
      else{
          notesObj=JSON.parse(notes);
      }
      let myObj = {
        title: addTitle.value,
        text: addTxt.value
      }
      notesObj.push(myObj);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      addTxt.value="";
      addTitle.value = "";          
      showNotes();
  });
/* Show Notes */
  function showNotes(){
      let notes=localStorage.getItem("notes");
      if(notes==null){
          notesObj=[];
      }
      else{
          notesObj=JSON.parse(notes);
      }
      let html="";
      notesObj.forEach((element,index) => {
          html+=
          `<div class="mynotes-card">
            <h1 class="mynotes-title">${element.title}</h1>
            <p class="mynotes-body">${element.text}</p>
            <div class="edit-delete">
            <button id="${index}"onclick="editNote(this.id)" class="edit-button"><i class="fa-solid fa-pen"></i></button>
            <button id="${index}" onclick="deleteNotes(this.id)" class="delete-button"><i class="fa-solid fa-trash"></i></button></div>
          </div>`;
      });
      let notesEle=document.getElementById("notes");
      if(notesObj.length!=0){
          notesEle.innerHTML=html;
      }
      else{
          notesEle.innerHTML=``;
      }
  }
  /*Edit Function*/
  function editNote(index) {
    let notes = localStorage.getItem("notes");
    let addTitle = document.getElementById("note-title");
    let addTxt = document.getElementById("note-text");
    if (addTitle.value !== "" || addTxt.value !== "") {
      return alert("Please clear the form before editing a note")
    } 
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    console.log(notesObj);
    notesObj.findIndex((element, index) => {
      addTitle.value = element.title;
      addTxt.value = element.text;
    })
    notesObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
}
/* Delete Function*/
  function deleteNotes(index){
      let notes=localStorage.getItem("notes");
      if (confirm('The selected item will be deleted', notes==null)){
        notesObj.splice(index,1);
      }
      else{
        // Do nothing
      }
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
  }
