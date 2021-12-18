
function test(b){
    var usr = document.getElementById('usrnm').value;
    var psd = document.getElementById('psd').value;

    if(usr== "admin" && psd == "admin"){
        return b();
        
    }else{
        alert("The username and password are wrong");
        return true;
    }
}

// Callback Function
function callBack(){
   window.location.href="todo.html";
   return false;
    

}