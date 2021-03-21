
const nm1= document.querySelector("#nm1");
const nm2= document.querySelector("#nm2");
const nm3= document.querySelector("#nm3");

fetch(`/users/the/json`).then((response)=>{
    response.json().then((data)=>{
        console.log(data);
        
            nm1.textContent=data.name.split(" ", 1);
            nm2.textContent=data.name;
            nm3.textContent=data.Designation;
        
    });
});

