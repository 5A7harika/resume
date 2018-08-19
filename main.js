//function Loadjson(file,callback) { 
//	var xhr=new XMLHttpRequest();
//	xhr.overrideMimeType("application/json");
//	xhr.open("GET",file,true);
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState === 4 && xhr.status == "200"){
//			callback(xhr.responseText);
//		}
//  };
//xhr.send(null);
//}

//Loadjson("data.json",function(text){
//	var data = JSON.parse(text);
//   console.log(data);
// basics(data.details);
// carrerinfo(data.carrer);
// educationinfo(data.education);
// skillset(data.skills);
// ach(data.achievements);
//})

function loadjson(file){
 return new Promise((resolve,reject)=>{
 	return fetch(file).then(response=>{
 		if(response.ok){
 			resolve(response.json());
 		}
 		else{
 			reject(new Error('error'));
 		}
 	})
 })
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	 console.log(data);
 basics(data.details);
  carrerinfo(data.carrer);
 educationinfo(data.education);
 skillset(data.skills);
 ach(data.achievements);

})

var left = document.querySelector(".left");

function basics(det) {
var img = document.createElement("img");
img.src = det.image;
left.appendChild(img);
var name1 = document.createElement("h3");
name1.textContent = det.name;
left.appendChild(name1);
var phoneno = document.createElement("h3");
phoneno.textContent = det.phoneno;
left.appendChild(phoneno);

var email = document.createElement("h3");
email.href = "mailto:harika8137@gmail.com";
email.textContent = det.email;
left.appendChild(email);

var add = document.createElement("h3");
add.textContent = "Address";
left.appendChild(add);
var add = document.createElement("hr");
left.appendChild(add);
var Address = document.createElement("p");
Address.textContent = det.address;
 left.appendChild(Address); 
}


	var right = document.querySelector(".right"); 

	function carrerinfo(info){
		var ca = document.createElement("h3");
		ca.textContent="carrer objective";
		right.appendChild(ca);
        var c = document.createElement("hr");
        right.appendChild(c);
        var care = document.createElement("p");
        care.textContent=info.info;
        right.appendChild(care);
        var edu = document.createElement("h3");
        edu.textContent="education qualification";
        right.appendChild(edu);
        var ed = document.createElement("hr");
        right.appendChild(ed);
    }
	function educationinfo(edu){
		var ed = document.createElement("h1");
		ed.textContent="education qualification";
		right.appendChild(ed);
		var hr = document.createElement("hr");
		right.appendChild(hr);

		var table1 = document.createElement("table");
		table1.border = "2";
		right.appendChild(table1);

		tabledata = "";
		for(i=0;i<edu.length;i++){
			tabledata+="<tr><td>"+edu[i].qualification+"</td<td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td><tr>";
		}
	     table1.innerHTML=tabledata;	
      
	}
     function skillset(skill){
     	var sk = document.createElement("h1");
     	sk.textContent = "Technical skills";
     	right.appendChild(sk);

     	var hr = document.createElement("hr");
     	right.appendChild(hr);

     	for(i=0;i<skill.length;i++){
     		var s = document.createElement("h3");
     		s.textContent = skill[i].title;
     		right.appendChild(s);

     		var ul = document.createElement("ul");
     		var li =document.createElement("li");
     		li.textContent = skill[i].info;
     		ul.appendChild(li);
     		right.appendChild(ul);
     	}
     }
    function ach(ac){
    	var sk = document.createElement("h1");
    	sk.textContent = "achievements";
    	right.appendChild(sk);

    	 var hr = document.createElement("hr");
    	 right.appendChild(hr);
    	 for(i=0;i<ac.length;i++)
    	 {
    	 	var d = document.createElement("ul");
    	 	var l = document.createElement("li");
    	 	l.textContent = ac[i].title;
    	 	d.appendChild(l)
    	 	right.appendChild(l);
    	 }
    }
    function openpage(){
    	window.open("index.html","_self",true)
    }

