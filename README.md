# [Proyecto de tienda para Curso de React](https://app-react-coder-1r9maucwo-ezequiel-ramirez.vercel.app/)

En este proyecto se trató de seguir las pautas y consignas del curso para completar una tienda on line con todos los componentes posible y haciendo uso de la gran mayoria de funcionalidades que nos brinda React.

![Center Bike - Tienda On-Line](https://user-images.githubusercontent.com/78183135/131588938-d6e2fefb-4e2d-49e6-b7db-6f17be5c57a3.gif)

## Inicializar Proyecto
Desarrollado con React

### Para iniciar el servidor
Desde la consola de comandos y una vez situados en la carpeta del proyecto se ejecuta:
npm start

### Para compilar todo
Para pasar a modo de distribución del proyecto se ejecuta:
npm build

## Dependencias externas al curso
Elegí Bootstrap como framework de CSS porque me pude centrar mucho más en la funcionalidad en principio, y luego finalicé el diseño con puro css para darle una impronta personal y mejorar algunos resultados que no me ofrece Bootstrap.
FontAwesome para iconos.
Firebase para uso de base de datos y almacenamiento de ordenes de compra.

## Flujo de Compra
Para poder comprar el usuario va a poder navegar por las diferentes categorías de productos donde puede filtrar según su preferencia. De este modo tiene un listado general de los productos y un detalle mínimo de información. Tambien puede ingresar a la sección Carrito donde visualiza si posee productos o no.
Al hacer click en el boton "Ver más" pasa a una sección exclusiva donde obtendrá información detallada del mismo. En ese instante puede seleccionar las cantidades confirmar antes de agregarlo al carrito.
Una vez agregado al carrito la página redirecciona automaticamente a la seccion donde podrá visualizar la cantidad de productos agregados y el monto total hasta el momento. Desde allí puede eliminar productos y seguir navegando, o bien vaciar el carrito.
Para finalizar la compra al hacer click en "Finalizar y llenar Formulario", la pagina lo redirecciona al sector donde debe ingresar sus datos obligatoriamente para poder continuar y proceder con la orden.
Como paso final se muestra el número de orden generada y los datos del ticket de compra.

Finaliza con una limpieza automática del carrito y todos sus datos ingresados, actualización del stock en la base de datos según los productos comprados.

