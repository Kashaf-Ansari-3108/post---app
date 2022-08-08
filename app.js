let imgSrc;
var loadFile = function(event) {
	imgSrc = URL.createObjectURL(event.target.files[0]);
}
let allPost = []
function onPost(){
 let name = document.getElementById("name")
 let title = document.getElementById("title")
let des = document.getElementById("des")
 let display = document.getElementById("display")
 if(name.value !== "" && title.value !== ""  && des.value !== "" ){
    let obj = {
        name:name.value,
        title:title.value,
        img:imgSrc,
        des:des.value
    }
    allPost.unshift(obj)
    display.innerHTML = ''
    for(i=0; i<allPost.length; i++){
      display.innerHTML += `  <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div class="card">
                  <div class="card-header">
                      User: ${allPost[i].name}
                  </div>
                  <img src="${allPost[i].img}"
                      class="card-img-top" alt="Image adress is not correct.. Check it out !!!!">
                  <div class="card-body">
                      <h5 class="card-title">${allPost[i].title}</h5>
                      <p class="card-text">${allPost[i].des}
                      </p>
    
                  </div>
              </div> </div>
          `
    }
    name.value = "";
    title.value = "";
    img.value = "";
    des.value = "";
 }
else{
    let msg = `<div class="alert alert-danger" role="alert">
    Every field is required !!!!
  </div>`
   document.getElementById("msg").innerHTML = msg;
}
 
}