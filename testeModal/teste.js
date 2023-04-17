document.getElementById('listaItens').addEventListener('click', function(event) {
   if (event.target.tagName === 'LI') {
     document.getElementById('modal').style.display = 'block';
   }
 });

 document.getElementById('fecharModal').addEventListener('click', function() {
   document.getElementById('modal').style.display = 'none';
 });

 document.addEventListener('click', function(event) {
   if (event.target === document.getElementById('modal')) {
     document.getElementById('modal').style.display = 'none';
   }
 });