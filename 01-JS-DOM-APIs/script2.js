
// Ejercicio 6

function generarTabla(datos) {
    const tabla = document.createElement("table");

    const encabezado = document.createElement("tr");

    const encabezados = Object.keys(datos[0]);

    encabezados.forEach(encabezadoTexto => {
        const celdaEncabezado = document.createElement("th");
        const textoEncabezado = document.createTextNode(encabezadoTexto);
        celdaEncabezado.appendChild(textoEncabezado);
        encabezado.appendChild(celdaEncabezado);
    });

    tabla.appendChild(encabezado);

    datos.forEach(filaDatos => {
        const fila = document.createElement("tr");

        encabezados.forEach(encabezado => {
            const celda = document.createElement("td");
            const textoCelda = document.createTextNode(filaDatos[encabezado]);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        });

        tabla.appendChild(fila);
    });

    document.body.appendChild(tabla);
}

const datosEjemplo = [
    { Nombre: "Agus", Edad: 28, Ciudad: "Santiago del Estero" },
    { Nombre: "Olivia", Edad: 5, Ciudad: "Córdoba" },
    { Nombre: "Valentina", Edad: 24, Ciudad: "Mendoza" }
];

generarTabla(datosEjemplo);
