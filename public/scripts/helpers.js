function createNote () {
    let noteTitle = "Title";   
    let noteContent = " ";
    
    $.ajax({
       method: "POST",
       url: "/notes/",
       data: {title: noteTitle, content: noteContent},
       success: function(result) {
           location.reload(true);
       }
    }); 
}

function saveNote(){
    let noteID = document.getElementById("note-container").dataset.id;
    let noteTitle = document.getElementById('note-title').innerHTML;
    let noteContent = document.getElementById('note-content').innerHTML;

    $.ajax({
       method: "PUT",
       url: "/notes/" + noteID,
       data: {title: noteTitle, content: noteContent},
       success: function(result) {
           location.reload(true);
       }
    });    
};

function deleteNote () {
    let noteID = document.getElementById("note-container").dataset.id;
    $.ajax({
       method: "DELETE",
       url: "/notes/" + noteID,
       success: function(result) {
           location.reload(true);
       }
    }); 
}

function toggle_visibility(id) {   
    var e = document.getElementById(id);
   // if(e.style.display == 'block')
     //  e.style.display = 'none';
     fetch('http://localhost:3000/notes/'+ id)
         .then(function(response) {
           
           return response.json();
         })
         .then(function(myJson) {
            document.getElementById('note-preview').innerHTML = 
                '<div id="note-container" data-id="'+ id +'">' +
                    '<h2 id="note-title" contentEditable="true">' + myJson.title + '</h2>' +
                    '<p id="note-content" contentEditable="true">' + myJson.content + '</p>' +
                    '<button id="save-note" type="button" class="btn btn-primary btn-sm">Save Changes</button>' +
                    '<button id="delete-note" type="button" class="btn btn-danger btn-sm">Delete Note</button>' +
                '</div>'
            initiateSaveDelete();
         });
         
}