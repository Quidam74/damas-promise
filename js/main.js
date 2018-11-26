document.addEventListener("DOMContentLoaded", function(event) { 
	var digits = document.querySelectorAll(".loto-digit")
	

	digits.forEach(async function(element){
  	//element.innerHTML

  	new Promise ((resolve,reject) =>{
  		var value = Math.round(Math.random()*10)

  		setTimeout(function(){
				resolve(value)
  		},1000)
  		
  		//reject("error")
  	}).then(function(result){
  		element.innerHTML = result
  	}).catch(function(error){
  		console.log("error")
  	})

  	
  })

});