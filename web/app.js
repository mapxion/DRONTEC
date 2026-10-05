'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const closeMenu = () => {navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');};
menuButton.addEventListener('click', () => {const isOpen = navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event => {if(event.key==='Escape')closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',event => {if(event.matches)closeMenu();});
const services = {
 fotogrametria:{title:'Fotogrametría',description:'La fotogrametría utiliza fotografías tomadas desde distintos puntos para reconstruir un entorno y obtener información espacial. Definimos la captura en función del terreno o de la infraestructura y del resultado que necesitas.',items:['Captura aérea del emplazamiento o área de trabajo.','Ortofotos para consultar el entorno en una imagen de conjunto.','Nubes de puntos y modelos 3D para documentar geometrías.','Planificación del nivel de detalle y de las necesidades de referencia del proyecto.']},
 termografia:{title:'Termografía',description:'Las imágenes térmicas permiten observar diferencias de temperatura que una fotografía convencional no muestra. Ayudan a localizar áreas de interés y a orientar una revisión técnica posterior.',items:['Captura térmica y visual de las zonas acordadas.','Inspección de instalaciones y elementos accesibles desde el aire.','Localización visual de diferencias térmicas.','Revisión de las condiciones de captura necesarias para interpretar las imágenes.']},
 inspecciones:{title:'Inspecciones técnicas',description:'Una inspección aérea facilita la documentación de elementos elevados o de difícil acceso. Con imágenes de conjunto y de detalle, tu equipo dispone de información visual para revisar el estado de la instalación.',items:['Torres y estructuras de telecomunicaciones.','Cubiertas, fachadas y elementos elevados.','Documentación visual para mantenimiento y seguimiento.','Captura de los puntos de interés definidos por el equipo técnico.']},
 audiovisual:{title:'Fotografía y vídeo aéreo',description:'Mostramos un espacio o proyecto desde una perspectiva diferente. Acordamos el enfoque de la captura y los formatos para que puedas utilizar el contenido en tu comunicación.',items:['Fotografía aérea de instalaciones y entornos.','Vídeo para presentaciones corporativas y de proyectos.','Imágenes para arquitectura y comunicación comercial.','Documentación de la evolución de obras y espacios.']},
 formacion:{title:'Formación con drones',description:'La formación se orienta a tu experiencia y al uso que quieres dar al dron. Consúltanos la disponibilidad, el programa y los requisitos de cada modalidad.',items:['Planificación de operaciones y preparación del equipo.','Práctica de vuelo y procedimientos de trabajo.','Uso del dron aplicado a proyectos profesionales.','Orientación sobre el itinerario de formación disponible.']},
 asesoria:{title:'Asesoría para tu proyecto',description:'Si sabes qué necesitas resolver, pero no qué servicio elegir, empezamos por el objetivo. Te ayudamos a definir el enfoque y los resultados que aportarán valor al trabajo.',items:['Definición del objetivo y del área de captura.','Elección del tipo de información: visual, térmica o espacial.','Revisión del alcance y de los formatos de entrega.','Orientación para integrar los resultados en tu flujo de trabajo.']}
};
const dialog = document.querySelector('#service-dialog');
let lastTrigger;
document.querySelectorAll('[data-service]').forEach(button => button.addEventListener('click',() => {
 const service=services[button.dataset.service];
 document.querySelector('#dialog-title').textContent=service.title;
 document.querySelector('#dialog-description').textContent=service.description;
 document.querySelector('#dialog-list').replaceChildren(...service.items.map(text=>{const item=document.createElement('li');item.textContent=text;return item;}));
 document.querySelector('#dialog-contact').href='mailto:info@drontec.es?subject='+encodeURIComponent('Consulta Drontec: '+service.title);
 lastTrigger=button;dialog.showModal();document.body.classList.add('modal-open');
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{const bounds=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))dialog.close();});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus({preventScroll:true});});
document.querySelector('#year').textContent=String(new Date().getFullYear());
