function bmi(){
    var W = document.getElementById("weight").value;
    var H = document.getElementById("height").value;
    var N = document.getElementById("name").value;
    var R = document.getElementById("bmi_result");
        
    var weight = parseFloat(W)
    var height = parseFloat(H)
   
    var bmi_result = weight / Math.pow(height, 2)
    
    var result = document.getElementById("result").value = bmi_result;
    
    if(result <= 24){
        R.innerHTML = name + "you are not over weight";
    }
    
    else if(result > 24 ){
         R.innerHTML = name + "you are over weight";
    }
}