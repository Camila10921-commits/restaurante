document.addEventListener('DOMContentLoaded', function() {
    // Función para actualizar el total
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.entry').forEach(entry => {
            const quantityInput = entry.querySelector('.quantity');
            const price = parseFloat(entry.dataset.price);
            const quantity = parseFloat(quantityInput.value) || 0;
            total += quantity * price;
        });
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    // Manejo del clic en los botones de cambio de cantidad
    document.querySelectorAll('.change-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const entry = this.closest('.entry');
            const quantityInput = entry.querySelector('.quantity');
            let quantity = parseInt(quantityInput.value) || 0;

            if (this.dataset.action === 'add') {
                quantity++;
            } else if (this.dataset.action === 'remove' && quantity > 0) {
                quantity--;
            }

            quantityInput.value = quantity;
            updateTotal();
        });
    });

    // Inicializa el total en la carga de la página
    updateTotal();
});
