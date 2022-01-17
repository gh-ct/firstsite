// <!-- emailjs -->
    
  
(function() {
    emailjs.init("user_9dNZgIkmVFyTqXNYDbUZB");
})();
   

// <!-- emailjs -->
//     <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
//     <script type="text/javascript">
//     (function() {
//         emailjs.init("user_9dNZgIkmVFyTqXNYDbUZB");
//     })();
//     </script>


let pre_header_toogleBtn = document.querySelector(".pre_header_toogleBtn");
let menu = document.querySelector(".menu"); 

pre_header_toogleBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
    


});