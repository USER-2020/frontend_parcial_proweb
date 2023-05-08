function eliminarVenta(id) {
    id=parseInt(id);
    let endPoint = 'http://127.0.0.1:8000/api/sales/delete/' + id;
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
    let endPoint = 'http://127.0.0.1:8000/api/sales';
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
                        <td><b>Nombre del Vendedor: </b> ${element.nombre_empleado}</td>
                        <br>
                        <td><b>Nombre del Cliente: </b> ${element.nombre_cliente}</td>
                        <br>
                        <td><b>Nombre del Producto: </b> ${element.nombre_producto}</td>
                        <br>
                        <td><b>Precio: </b> ${element.precio}</td>
                        <br>
                        <td><b>Fecha Compra: </b> ${element.fecha_compra}</td>
                        <br>
                        <td><button class="btn deep-orange darken-2" type="submit" onclick="eliminarVenta(${element.id})">Eliminar</button></td>
                        <br>
                    </tr>
            `;
        });
    });
}

function guardarVenta(){
    let nombre_empleado = document.getElementById('empleado').value;
    let nombre_cliente = document.getElementById('cliente').value;
    let nombre_producto = document.getElementById('producto').value;
    let precio = document.getElementById('precio').value;
    let fecha_compra = document.getElementById('fecha').value;

    let venta = {
        nombre_empleado: nombre_empleado,
        nombre_cliente: nombre_cliente,
        nombre_producto: nombre_producto,
        precio: precio,
        fecha_compra: fecha_compra
    };

    fetch('http://127.0.0.1:8000/api/sales', {
        method: 'POST',
        body: JSON.stringify(venta),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    ,then(data => {
        console.log(data);
        mostrarVentas();
        window.location.reload();
    })
}