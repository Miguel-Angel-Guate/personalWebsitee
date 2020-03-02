 
 
const firstSection = `
<section id="one">
       <div class="nav">
              <span class="span1">
                     <button class="but22">Home</button>
                     <button  class="but22">About me</button>
                     <button id="but23" class="but22">Contact</button>
       
              </span>
       </div>
       
       <div id="page2">2
              <h1 class="titlee">About Me</h1>
              <div id="describeee">
                     <div class="im">
                            <img class="imgg" src="img/dev.png">
                            <h2>Junior Developer</h2>
                            <p>I´m a beginner with all actitude for any languaje</p>
                     </div>
                     <div class="im">
                            <img class="imgg" src="img/time.png">
                            <h2>efficacious</h2>
                            <p>i try to give the best of myself</p>
                     </div>
                     <div class="im">
                            <img class="imgg" src="img/inves.png">
                            <h2>autonomous</h2>
                            <p>grow everyday</p>
                     </div>
                     <div class="im">
                            <img class="imgg" src="img/hard.png">
                            <h2>enterprising</h2>
                            <p>as a bussiness boy</p>
                     </div>
              </div>
       
              <div id="imgtec">
       
                     <div id="meee">
                            <div> <img id="mee" src="./img/me.jpg" alt=""></div>
       
       
                            <p">Myself it´s Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
                                   fugiat
                                   ut dolor illo nisi dolores expedita sapiente consequuntur hic molestias quia
                                   esse
                                   dignissimos animi eius iusto aut non cumque et. Lorem ipsum, dolor sit amet
                                   consectetur adipisicingis quidem incidunt possimus veniam minima?
                                   Fugit distinctio eaque voluptas. Lorem ipsum dolor sit, amet consectetur
                                   adipisicing
                                   elit. Rem repelln harum?</p>
       
                     </div>
       
       
                     <div id="tecn">
                     
       
       
       
                     
              
                     
                     
       </div>
       
       
                     </div>
       
       
       
       
       
              </div>
</section>


`;
//document.querySelector('#main').innerHTML=firstSection;
document.querySelector('#but1').addEventListener('click', ()=>{
       console.log('#but1')
       document.querySelector('#main').innerHTML=firstSection;
       document.querySelector('#main').scrollIntoView({
              behavior: 'smooth'
          });
})
function animateprogress (id, val){		


	var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la m�xima compatibilidad con todos los navegadores */
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||   
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback ){
			window.setTimeout(enroute, 1 / 60 * 1000);
		};
		
	};
	
	var fpAnimationFrame = getRequestAnimationFrame();   
	var i = 0;
	var animacion = function () {
			
	if (i<=val) 
		{
			document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
			document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
			i++;
			fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la funci�n vuelve a llamarse con fpAnimationFrame     */
		}
										
	}

		fpAnimationFrame(animacion);   /*  <---- Llamo la funci�n animaci�n por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
				
}
