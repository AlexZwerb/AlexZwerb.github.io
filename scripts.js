function wiki(x){
var ssilka=open(x,'_blank',"top=0 width=600 height=300");
	
}
var answ=document.getElementById("answer");	
function TITLE(y){
 alert(y);	
}


function searching(txt){
	for(let r of document.querySelectorAll('.text')){
		if(txt != '' && txt != ' '){
		 r.innerHTML = r.textContent.replaceAll(r.textContent,r.textContent.replaceAll(txt,`<span id="View" style="color:white;background:black">${txt}</span>`));
			}
		
		else{
		r.innerHTML=r.innerText;
		}
	

}
}
//orig.innerHTML = itogo.replaceAll( txt,`<span style="color:white;background:black"> ${txt} </span>`);