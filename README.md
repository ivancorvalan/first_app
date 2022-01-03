# Printers Market.

Printers Market es un e-commerce de venta de impresoras e impresoras multi función.

Contiene:

- Categorías por funcionalidad
- En el detalle del producto se indican especificaciones
- Interfaz simple, amigable y predecible
- Carrito de compras
- Posibilidad de gestión del carrito, vuelta al item para poder incrementar la cantidad de productos, eliminación de items
- Selección de cantidad de productos con control al stock
- Landing page
- Registro de usuarios en DB Firebase
- Login de usuarios
- Entrega de número de orden de compra en la finalización de la acción
- La base de datos de los productos se cargan mediante el componente UploadProducts donde utiliza  Databaseitems.jsx que contiene los items, en caso de que se quiera agregar un producto o modificar el stock se llama a UploadProducts que cargará en Firebase los productos.

## Instalación

1. Forkeá y cloná el repositorio

2. Parado en la raíz del proyecto corré el comando 

   ```
   npm install
   ```

    para instalar todas las dependencias del proyecto

3. Ejecuta en el directorio del proyecto 

   ```
   yarn start
   ```

   para inicializar el proyecto, que se visualizará en http://localhost:3000 o http://IP_PC:3000 para la conexión externa



## Dependencias

Uso de hover.css para formato en nav bar, ésta librería es externa - https://ianlunn.github.io/Hover/

Uso de React Router Dom 17.0.2 para la navegación

Uso de React Fetch 0.0.2 para la conexión con APIs

Uso de React Yarn 1.1.0 para la ejecución del proyecto

Uso de Firebase 9.6.0 para base de datos

## Aplicación en funcionamiento

![Printers Markets en funcionamiento](https://github.com/ivancorvalan/first_app/blob/main/src/Printers%20Market.gif)

### Autor

Corvalán, Iván Ezequiel

2021 - Curso de React en CoderHouse
