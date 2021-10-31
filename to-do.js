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

        //implement edit functionality on edit button (default li)

        var myedit = document.getElementsByClassName("edit");
        var inputs = document.getElementsByTagName("li");

        var z = document.getElementById("myedit");


        myedit[0].addEventListener("click", function() {

            var mm = document.querySelectorAll("#myedit");

            for (var i = 0; i < mm.length; i++) {

                mm[i].style.display = "block";

            }
        })

} catch (err) {

     alert(err)

}