        document.addEventListener('DOMContentLoaded', function() {
            const addProductBtn = document.getElementById('add-product-btn');
           
            addProductBtn.addEventListener('click', function() {
                alert('Funcionalidade "Mais Produtos" seria implementada aqui!');
              
            });
           
         
            document.getElementById('budget-form').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Orçamento finalizado com sucesso!');
            });
        });
