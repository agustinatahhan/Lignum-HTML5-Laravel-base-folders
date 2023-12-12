
// Ejercicio 6

function generarTabla(datos) {
    var tabla = document.createElement("table");

    var encabezado = document.createElement("tr");

    var encabezados = Object.keys(datos[0]);

    encabezados.forEach(encabezadoTexto => {
        var celdaEncabezado = document.createElement("th");
        var textoEncabezado = document.createTextNode(encabezadoTexto);
        celdaEncabezado.appendChild(textoEncabezado);
        encabezado.appendChild(celdaEncabezado);
    });

    tabla.appendChild(encabezado);

    datos.forEach(filaDatos => {
        var fila = document.createElement("tr");

        encabezados.forEach(encabezado => {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(filaDatos[encabezado]);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        });

        tabla.appendChild(fila);
    });

    document.body.appendChild(tabla);
}

var datosEjemplo = [
    { Nombre: "Agus", Edad: 28, Ciudad: "Santiago del Estero" },
    { Nombre: "Olivia", Edad: 5, Ciudad: "Córdoba" },
    { Nombre: "Valentina", Edad: 24, Ciudad: "Mendoza" }
];

generarTabla(datosEjemplo);
