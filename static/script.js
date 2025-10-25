// Función para obtener una frase al azar
async function obtenerFrase() {
    try {
        const response = await fetch('/frase');
        const data = await response.json();
        
        const resultadoDiv = document.getElementById('resultadoFrase');
        const textoFrase = document.getElementById('textoFrase');
        
        textoFrase.innerHTML = `<span class="success">📝 Frase:</span> "${data.frase}"`;
        resultadoDiv.classList.add('show');
    } catch (error) {
        console.error('Error:', error);
        alert('Error al obtener la frase. Verifica que el servidor esté corriendo.');
    }
}

// Función para calcular el mayor entre dos números
async function calcularMayor(event) {
    event.preventDefault();
    
    const numeroA = document.getElementById('numeroA').value;
    const numeroB = document.getElementById('numeroB').value;
    
    try {
        const response = await fetch(`/max?a=${numeroA}&b=${numeroB}`);
        const data = await response.json();
        
        const resultadoDiv = document.getElementById('resultadoMayor');
        const textoMayor = document.getElementById('textoMayor');
        
        if (data.error) {
            textoMayor.innerHTML = `<span class="error">❌ Error:</span> ${data.error}`;
        } else {
            textoMayor.innerHTML = `
                <span class="success">✅ Resultado:</span><br>
                El mayor entre <strong>${numeroA}</strong> y <strong>${numeroB}</strong> es: <strong>${data.mayor}</strong>
            `;
        }
        
        resultadoDiv.classList.add('show');
    } catch (error) {
        console.error('Error:', error);
        alert('Error al calcular. Verifica que el servidor esté corriendo.');
    }
}
