 const firstSection = `
<section id="one">
       
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


                     <div class="progress">
                     <p>HTML5</p>
                            <progress id="html5" max="100" value="50"></progress>
                            <span></span>
                     
                     </div>
               <div class="progress">
                   <p>Javascript</p>
                   <progress id="javascript" max="100" value="49"></progress>
                   <span></span>
                   
               </div>
                     
                  <div class="progress">
                     <p>NodeJs</p>
                            <progress id="Node" max="100" value="45"></progress>
                            <span></span>
                     
                     </div>
                     
                     <div class="clear"></div>
                     
                     <div class="progress">
                     <p>CSS</p>
                            <progress id="css" max="100" value="56"></progress>
                            <span></span>
                     
                     </div>
              
                     <div class="progress">
                     <p>Python</p>
                            <progress id="python" max="100" value="32"></progress>
                            <span></span>
                     
                     </div>
                     <div class="clear"></div>
                            
                     
                     
                     <div class="progress">
                     <p>Node.js</p>
                            <progress id="react" max="100" value="36"></progress>
                            <span></span>
                     
                     </div>




                     </div>
                     
                     
       
       
       
                     
              
                     
                     
       </div>
       
       
                     
       
       
       
       
       
              
</section>



`;

const addContact = ` 
<section id="sectionForm">
       
       <div class="contact1">
       
              <div class="container-contact1">
              
			<div class="contact1-pic js-tilt" data-tilt>
				<img src="img/img-01.png" alt="IMG">
			</div>

			<form class="contact1-form validate-form">
				<span class="contact1-form-title">
					Get in touch
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input class="input1" type="text" name="name" placeholder="Name">
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input1" type="text" name="email" placeholder="Email">
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1" type="text" name="subject" placeholder="Subject">
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea class="input1" name="message" placeholder="Message"></textarea>
                                   <span class="shadow-input1"></span>
                                   
                            </div>
                            <div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1" type="submit">
					<span class="shadow-input1"></span>
				</div>
                            

				
			</form>
		</div>
	</div>


</section>

`;




//  const goHome = ` 
// <header id="homee">
// <div class="colorchange">
//        <h1 class="inverter">
//               I´m Miguel Angel <br>
//               <button id="but1" >View my personal website</button>

              

//        </h1>

// </div>

// </header>`;
 //document.querySelector('#main').innerHTML=firstSection;
 document.querySelector('#but11').addEventListener('click', () => {
        console.log('#but11')

        document.querySelector('#main').innerHTML = firstSection;
        //seleccionamos el navBar y le cambiamos de display none a block para que se muestre
        document.querySelector('#navBar').style.display='block';
        document.querySelector('#main').scrollIntoView({
               behavior: 'smooth'
        });
        document.querySelector('#but33').addEventListener('click', () => {

               //  document.querySelector('#main').innerHTML = goHome;
               document.querySelector('#homee').scrollIntoView({
                      top: 0,
                      behavior: 'smooth'
               });

        })
        document.querySelector('#but23').addEventListener('click', () => {
               console.log('but23')
               document.querySelector('#main').innerHTML = addContact;
               document.querySelector('#main').scrollIntoView({
                      
                     behavior: 'smooth'

              });
       document.querySelector('.but22').addEventListener('click', () =>{
              document.querySelector('#main').innerHTML = firstSection;
              scrollIntoView({
                      top: 0,
                     behavior: 'smooth'

              });
       })
              
                     });
              
                     
               
              });
             
        
 