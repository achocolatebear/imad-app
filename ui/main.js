// Select our element
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function (){
    //make a request to the counter end point
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttprequest.DONE){
            //take action
            if (request.status === 200){
                var counter =request.responseText;
            }
        }
        //not done yet
        
    };
    
    counter = counter + 1; 
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

