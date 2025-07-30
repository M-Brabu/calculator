    var val=""
    function appendToDiplay(input){
        
        val=val+input
        display.value=val

    }
    function clearDiplay(input){
       val=""
       display.value=""
    }
    function calculator(input){
        try{
            display.value=eval(display.value)
        }
        catch(error)
        {
          alert("ERROR!!!")
          display.value="ERROR!"
        }
    }
    function sine(){
         var s= display.value
         display.value=Math.sin(display.value*Math.PI/180)
    }
    function cosine(){
         var c= display.value
         display.value=Math.cos(display.value*Math.PI/180)
    }
    function tangent(){
         var t= display.value
         display.value=Math.tan(display.value*Math.PI/180)
    }
