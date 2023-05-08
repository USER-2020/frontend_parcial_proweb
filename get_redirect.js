function eliminarVenta(id) {
    id=parseInt(id);
    let endPoint = '' + id;
    fetch(endPoint, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    alert("Venta eliminada");
    location.reload();
}

function mostrarVentas(){
    let sales = document.getElementById("ventas");
    let endPoint = '';
    sales.innerHTML = '';
    fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            sales.innerHTML += `
                    <tr>
                        <br>
                        <td><b>Identificador: </b> ${element.id}</td>
                        <br>
                        <td><b>Nombre del Vendedor: </b> ${element.}</td>
                        <br>
                        <td><b>Nombre del Cliente: </b> ${element.}</td>
                        <br>
                        <td><b>Nombre del Producto: </b> ${element.}</td>
                        <br>
                        <td><b>Precio: </b> ${element.}</td>
                        <br>
                        <td><b>Fecha Compra: </b> ${element.}</td>
                        <br>
                        <td><button class="btn deep-orange darken-2" type="submit" onclick="eliminarVenta(${element.id})">Eliminar</button></td>
                        <br>
                    </tr>
            `;
        });
    });
}