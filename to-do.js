try {
    //Add delete button to default li
    var list = document.getElementById("mydefault")

    var myDft = document.createElement("span")
    var myDftNode = document.createTextNode('Delete');

    myDft.appendChild(myDftNode)
    myDft.className = "delete"
    list.appendChild(myDft)
    //Add edit button to default li
    var list = document.getElementById("mydefault")

    var myDft = document.createElement("span")
    var myDftNode = document.createTextNode('Edit');

    myDft.appendChild(myDftNode)
    myDft.className = "edit"
    list.appendChild(myDft) 
    
    
    // implement delete functionality on Delete button(default li)
    var mylist = document.getElementById("mydefault")
    var mydelete = document.getElementsByClassName("delete")

    mydelete[0].addEventListener("click", function() {

        mylist.style.display = "none";
    })

} catch (err) {

     alert(err)

}