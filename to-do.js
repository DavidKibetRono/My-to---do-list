try {
    //Add delete button to default li
    var list = document.getElementById("mydefault")

    var myDft = document.createElement("span")
    var myDftNode = document.createTextNode('Delete');

    myDft.appendChild(myDftNode)
    myDft.className = "delete"
    list.appendChild(myDft)

    
    

} catch (err) {

     alert(err)

}