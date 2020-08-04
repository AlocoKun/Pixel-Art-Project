var height, width, colort;
// Define the variables of Height, Width and Color(Colort)

// Select color input

//I prefered not to write the color input until the Colores() Function

// Select size input


$(document).ready(function(){
    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        height= $("#inputHeight").val();
        width= $("#inputWidth").val();
        makeGrid(height,width);
        console.log("height is "+height+" ,width is "+ width);
        //To write in console what is the height and the width
    })
})
//Define the Height and Width by submit()




// When size is submitted by the user, call makeGrid()

function makeGrid(h,w) {
    $("tr").remove();
    //remove() to avoid bugs at defining a height and a width again
    

    for (let x = 1; x <= h; x++) {
        $("#pixelCanvas").append("<tr id=table" + x + "></tr>");
        for (let y=1; y <=w; y++) {
            $("#table" + x).append("<td></td>");
            

        }
        // Using for() to append("<td> and <tr>") like the examples seeing in JavaScript lessons.
    
    }

    $("td").click(function Colores() {
        colort= $("#colorPicker").val();
        console.log("the color is " + colort);
        /* I wrote here the input to change color without clicking "Enviar". Now, its possible to
        use more than one color in the pixel art.*/
        if ($(this).attr("style")) {
            $(this).removeAttr("style")            
        } else {
            $(this).attr("style", "background-color:" + colort);
        }

    })
    // Using if and else to color and uncolor the boxes.
    
   
    
}

