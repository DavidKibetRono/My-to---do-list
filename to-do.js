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

        function myfun2() {
            var x = document.getElementById("myedit").value;

            var y = document.getElementById("mydefault");

            y.innerHTML = x;

            var myDf = document.createElement("span")
            var myDftNode = document.createTextNode('Delete');

            myDf.appendChild(myDftNode)
            myDf.className = "delete"
            y.appendChild(myDf);


            var myDftt = document.createElement("span")
            var myDftNode = document.createTextNode('Edit');

            myDftt.appendChild(myDftNode)
            myDftt.className = "edit"
            y.appendChild(myDftt)

            mydelete[0].addEventListener("click", function() {

                mylist.style.display = "none";
            })

            z.style.display = "none";

        }

        function myfun3() {
            var x = document.getElementById("mysave").value;

            var y = document.getElementsByTagName("li");


            for (var t = 0; t < y.length; t++) {

                y[t].innerHTML = x;

                var myDf = document.createElement("span")
                var myDftNode = document.createTextNode('Delete');

                myDf.appendChild(myDftNode)
                myDf.className = "delete"
                y[t].appendChild(myDf);


                var myDftt = document.createElement("span")
                var myDftNode = document.createTextNode('Edit');

                myDftt.appendChild(myDftNode)
                myDftt.className = "edit"
                y[t].appendChild(myDftt)

                mydelete[0].addEventListener("click", function() {

                    mylist.style.display = "none";
                })

                z.style.display = "none";
            }


        }
            //implete onclick myfun() 
            function myfun() {
                // create li element for input
                var myElement = document.createElement('li')
                var val = document.getElementById("myInput").value;

                var data = document.createTextNode(val);

                myElement.appendChild(data);

                var myButton = document.getElementById("btn");


                if (val == "") {

                    alert("Input field cannot be empty")

                } else {

                    var myUl = document.getElementById("unordered_List");
                    myUl.appendChild(myElement);
                }

                document.getElementById("myInput").value = "";


                var createDelete = document.createElement("span");

                var deleteNode = document.createTextNode("Delete");


                createDelete.appendChild(deleteNode);

                createDelete.className = "delete";

                if (val == "") {
                    alert("Input field cannot be empty")

                } else {
                    var liElement = document.getElementsByTagName("li");
                    for (var i = 0; i < liElement.length; i++) {
                        liElement[i].appendChild(createDelete);

                    }

                }

                var editElement = document.createElement("span");
                var editNode = document.createTextNode('Edit');

                editElement.appendChild(editNode);
                editElement.className = "edit";

                if (val == "") {

                    alert("Input field cannot be empty")


                } else {
                    var liElement = document.getElementsByTagName("li");

                    for (var i = 0; i < liElement.length; i++)

                        liElement[i].appendChild(editElement)
                }

                for (var e = 0; e < myedit.length; e++) {

                    myedit[e].addEventListener("click", function() {

                        var save = document.querySelectorAll("#mysave");
                        var save2 = document.querySelectorAll("#mys");


                        for (var i = 0; i < save.length; i++) {

                            save[i].style.display = "block";
                            save2[i].style.display = "block";


                        }
                    })
                }
                var deletebutton = document.getElementsByClassName("delete");

                for (var i = 0; i < deletebutton.length; i++) {

                    deletebutton[i].addEventListener("click", function() {

                        myElement.style.display = "none";
                    })

                }
        }

    } catch (err) {

        alert(err)

    }