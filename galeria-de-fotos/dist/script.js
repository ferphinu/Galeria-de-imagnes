/*Name this external file gallery.js*/

/*window.onload = cargar;*/

function cargar() {
  const imagenes = document.querySelectorAll('img');
  var index=1
  /*imagenes.forEach((imagen) => {
    imagen.setAttribute('tabindex',index);
    index=index+1
  });*/
  for (var imagen of imagenes){
    imagen.setAttribute('tabindex',index);
    imagen.setAttribute('onfocus','upDate(this)');
    imagen.setAttribute('onblur','unDo()'); 
    index=index+1
  }
}

function upDate(previewPic){
  var textoDelPerrito=previewPic.alt;
  var srcPerrito=previewPic.src;
  document.getElementById("image").innerHTML=textoDelPerrito;
  document.getElementById("image").style.backgroundImage="url("+srcPerrito+")";

 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
  
	}

	function unDo(){
    
    document.getElementById("image").innerHTML="Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage="url('')";
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
	}