/* ***************************************
 * APIS HTML5
 * ***************************************/
$.notifer = () =>{

    if (Notification) {
       if (Notification.permission !== "granted") {
       Notification.requestPermission()
       }
       var title = "Xitrus"
       var extra = {
           icon: "http://ep01.epimg.net/elpais/imagenes/2017/06/01/icon/1496334611_889857_1496334959_portadilla_normal.jpg",
           body: "Notificación de prueba en Xitrus"
       }
       var noti = new Notification( title, extra)
       
       noti.onclick = {
       // Al hacer click
       }
       noti.onclose = {
       // Al cerrar
       }
       setTimeout( function() { noti.close() }, 10000)
   }
}
