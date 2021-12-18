let tbody = document.getElementById("tbody");
// XMLHttpRequest
let xhr = new XMLHttpRequest;
xhr.open("GET","https://jsonplaceholder.typicode.com/todos");
let count = 0;  







// Onreadystate change
xhr.onreadystatechange = function(){
    // When API is loaded sucessfully
    if(xhr.readyState == 4 && xhr.status == 200){

        //Parsing the JSON data into object 
        let data = JSON.parse(this.responseText);

        // Creating title and checkbox as many as in the object array
        data.forEach(element => {
            
            //InnerHtml using DOM selector 
            tbody.innerHTML += `<tr><th scope="row">${element.id}</th><td colspan="2">${element.title}</td><td><input type="checkbox" name="checkbox" class="checkbox" id="" onclick=""></td></tr>`;
          
          });

          
          // Accessing all checkbox using DOM 
          var checkBoxArray = document.querySelectorAll(".checkbox");
          
          // Adding eventlistner to each checkbox
          checkBoxArray.forEach((a)=>{
            a.addEventListener("change",()=>{

              // Promise 
              var pro = new Promise(function(resolve,reject){

                resolve("Congrats. 5 Tasks have been Successfully Completed !");
      
              });


              // Checking if the checkbox count is 5
              if(a.checked==true){
                count++;
                console.log("The count is "+ count);
                
                // Promise calling
                if(count==5){
                  pro.then((msg)=>{
                    console.log(count);
                    alert(msg);
                  }).catch((e)=>{
                    console.log(e)
                  });
                }
                

          
              }

            })
          });
       
    }
}


xhr.send();


