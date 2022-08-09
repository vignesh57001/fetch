var res=fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data)=>data.json())
.then((data1)=>foo(data1));

function foo(rest){
    for (var i=30;i<40;i++){
    
    var div=document.createElement("div");
    div.style.backgroundColor="gray";
    div.style.color="blue";
    div.style.fontsize="35px";
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">id number=${rest[i].id}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${rest[i].title}</h6>
      <p class="card-text">${rest[i].body}</p>
      
    </div>
  </div>`
    document.body.append(div);
  }
  }