<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span.text-white 2
      h1 Manejo de productos y equipos cosméticos

    .row.mb-5.justify-content-center(data-aos="fade-right") 
      .col-lg-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 De la mano de la prevención y bioseguridad en el contexto de la cosmética ornamental, facial y corporal, está el reconocimiento por parte de los funcionarios de las características y uso de los productos y equipos cosméticos. Antes de reconocer algunos aspectos, es importante comprender que un producto cosmético es un elemento que parte de una fórmula para su aplicación en zonas superficiales del cuerpo humano. Sus principales funciones son limpiar, proteger, perfumar y transformar el aspecto del cuerpo.                
    
    .row.justify-content-center.mb-5.BGIMG02
      .col-md-6.col-lg-4.mb-5.mb-lg-0(data-aos="fade-right") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
          .tarjeta.color.bg01.border.border-info
            .p-4
              h3.text-center Elementos internos
              p Se caracterizan por aquellos componentes que están en el cosmético. Este desempeñará la función específica para lo cual fue fabricado.
      .col-md-6.col-lg-4.mb-5.mb-lg-0(data-aos="fade-left") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
          .tarjeta.color.bg01.border.border-info
            .p-4
              h3.pt-2.text-center Elementos externos
              p Corresponde a los elementos adicionales como el envase, cartón, empaque, etiquetado, prospecto y medios de difusión.

      .row.justify-content-center.align-items-center
        .col-lg-12
          br
        .col-lg-4.mb-5(data-aos="fade-right") 
          p.text-end La clasificación de los cosméticos se puede realizar en el marco de tres variables:
        .col-lg-3.mb-5(data-aos="fade-left") 
          .tarjeta.bg06.p-4.me-5 
            ol.lista-ol
              li 
                .lista-ol.BGIMG04
                  span.ps-2 1                
                |  Función.
              li 
                .lista-ol.BGIMG04
                  span.ps-2 2
                | Nivel de uso.
              li 
                .lista-ol.BGIMG04
                  span.ps-2 3
                | Zona de acción.

      .col-lg-6.mb-5
        p Para una mayor claridad al respecto, se describirán cada uno de ellos.  
      .col-lg-12(data-aos="fade-right") 
        TabsB.color-acento-contenido
          .py-4.py-md-5(titulo="Cosméticos acordes a su función" :icono="require('@/assets/curso/tema2/img05.svg')")
            .row.p-4
              .col-8
                p En esta categoría existen productos para la higiene, acondicionamiento, decoración, tratamiento y protección del cuerpo. Con respecto a la higiene, acondicionamiento, decoración, tratamiento y protección deben realizar una función según una intención técnica, condiciones de bioseguridad e intereses de los clientes. 
          .py-4.py-md-5(titulo="Cosméticos según su nivel de uso" :icono="require('@/assets/curso/tema2/img06.svg')")
            .row.p-4
              .col-8
                p Los productos pueden ser distinguidos según el contexto de uso, así existen productos para casa cuyo objetivo es realizar higiene, mantenimiento o protección del cuerpo. Mientras que existen otros de tipo profesional elementos utilizados para los procedimientos de tipo capilar, permanentes, colorantes permanentes, entre otros. Dentro de estos, también se puede realizar una lista que los divida en campos profesionales, hablando así de:
                ul.lista-ul.mb-5
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Cosméticos para el área ornamental. 
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Cosméticos para la cosmética facial y corporal.
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Cosméticos acorde al área donde se utilice. 
          .py-4.py-md-5(titulo="Cosméticos según su zona de acción" :icono="require('@/assets/curso/tema2/img07.svg')")
            .row.p-4
              .col-8
                p La acción de los productos de tipo cosméticos es de carácter superficial y los elementos que la componen no están diseñados para que penetren de manera profunda y lleguen a tener acción sistémica; un cosmético nunca debe producir efectos que vayan más allá de lo permitido. En este caso, se cuenta con las siguientes opciones de cosméticos:
                ul.lista-ul.mb-5
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Para la zona superficial de la piel (cremas, protector solar. exfoliante). 
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Para la piel de la cara. 
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Para la piel de todo el cuerpo.
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Para la cabellera.
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Para las uñas.  
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Para glándulas de tipo sebáceo.
                  li 
                    <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                    | Para glándulas de tipo sudoríparas. 

    .row.justify-content-center.mb-4
      .col-lg-6(data-aos="fade-right") 
        .row
          .col-12
            <br><br>
          .col-12
            .cajon-b.color-primario.p-4.mb-5
              p.mb-0 <strong>Se debe recordar que los productos a utilizar deben tener una ficha técnica</strong> para que las autoridades de vigilancia y control puedan acceder a la información completa del mismo en el marco de los elementos que la componen: el proceso de fabricación, los efectos no esperados, el nombre y dirección de la persona o entidad responsable. Los profesionales de la estética facial, corporal y ornamental deben entregar todas las indicaciones para tratar los posibles efectos no esperados que pueda causar el producto cosmético. 
                br
                br
                | Realizada una aproximación a la clasificación de los productos cosméticos, se hace necesario hablar sobre su almacenamiento y conservación, y deben seguir lineamientos que garanticen la vida útil de los mismos, por ello se sugiere cumplir con las siguientes recomendaciones.
      .col-lg-5(data-aos="fade-left") 
        img(src="@/assets/curso/tema2/img08.svg")
    
      .row.justify-content-center.mt-5.me-0
        .col-lg-10
          .titulo-sexto.color-acento-contenido
              h5 Tabla 1 Normas de conservación y almacenamiento
      
    .row.justify-content-center.mb-4(data-aos="zoom-in-up")
      .col-lg-10.mb-5
          table
            tr.bg07
              td
                .h6.text-white.text-center Normas de conservación 
              td
                .h6.text-white.text-center Normas de almacenamiento 
            tr.bg08
              td Leer cuidadosamente las instrucciones de uso dadas por el fabricante las cuales se encuentran en el rótulo y tener mucha atención con las advertencias y precauciones. 
              td Almacenar los productos cosméticos en un lugar limpio.<br>
            tr.bg03
              td Manipular los cosméticos con los elementos de seguridad tales como aplicadores para evitar que se contaminen.
              td Almacenar los productos cosméticos en un lugar seco.<br>
            tr.bg08
              td No utilizar bajo ninguna circunstancia aquellos productos cosméticos que hayan cambiado su aspecto como el color, la apariencia y el olor; o cuando ya se encuentren vencidos. 
              td No exponerlos a cambios bruscos de temperatura.<br>
            tr.bg03
              td Al detectar algún tipo de reacción adversa cuando se utiliza un producto cosmético, se debe suspender el uso. Si la molestia persiste hay que consultar con personal médico. 
              td Comprar los productos cosméticos, en lugares seguros que brinden confianza respecto a su origen y procesos de elaboración.<br>
            tr.bg08
              td
              td Conservar los productos cosméticos en el envase original. Posterior al uso, se debe verificar que queden bien cerrados.<br>

      .cajon.color-acento-contenido.p-4.mb-0.justify-content-center
        .row.justify-content-center
          .col-lg-10
            p Todo lo que corresponde a las necesidades de almacenamiento del establecimiento de cosmética ornamental, facial o corporal debe ser acorde con el volumen de los productos cosméticos utilizados. En el diseño del área de almacenamiento se deben tener presentes los siguientes aspectos: 
      .col-lg-5.bg09.mb-5(data-aos="fade-right") 
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 1
            .col-12.mb-4.p-5
              p.text-white La ubicación debe darse de manera tal que se evite la contaminación de los productos cosméticos.
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 2
            .col-12.mb-4.p-5
              p.text-white Asignar un espacio para los extintores acorde con las características de cada grupo de productos a utilizar. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 3
            .col-12.mb-4.p-5
              p.text-white El área de almacenamiento debe facilitar el adecuado desplazamiento de los colaboradores internos y de los productos cosméticos a utilizar. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 4
            .col-12.mb-4.p-5
              p.text-white Propiciar condiciones de tipo ambiental en el marco de la temperatura, la luz, el aire y la humedad de los productos cosméticos a utilizar. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 5
            .col-12.mb-4.p-5
              p.text-white Las paredes, pisos y techos deben permitir la limpieza y desinfección de las áreas; así mismo, deben evitar el ingreso de insectos, aves, roedores, polvo y otros tipos de contaminantes. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 6
            .col-12.mb-4.p-5
              p.text-white La iluminación debe ser agradable y que facilite la búsqueda de los productos a utilizar. Se recomienda evitar el uso de ventanas grandes o claraboyas que permitan el acceso directo de la luz del sol sobre los productos o estantes, puesto que la radiación solar puede elevar la temperatura ambiental y generar cambios en los elementos almacenados.
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 7
            .col-12.mb-4.p-5
              p.text-white La ventilación debe contribuir a prevenir el riesgo de contaminación de tipo cruzada generada por poca ventilación.      
      .col-lg-5.p-0.mb-5(data-aos="fade-left") 
         img(src="@/assets/curso/tema2/img09.svg")

      .cajon.color-acento-contenido.p-4.mb-0.justify-content-center
        .row.justify-content-center
          .col-lg-10
            p Es de vital importancia que las especificaciones de calidad para la aceptación de los productos cosméticos sean establecidas previo a los procesos de compra, por lo tanto, se deben tener presentes las siguientes recomendaciones: 
      .col-lg-5.p-0.mb-5(data-aos="fade-right") 
         img(src="@/assets/curso/tema2/img10.svg")
      .col-lg-5.bg09.mb-5(data-aos="fade-left") 
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 1
            .col-12.mb-4.p-5
              p.text-white Establecer las especificaciones requeridas. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 2
            .col-12.mb-4.p-5
              p.text-white Organizar los lineamientos de calidad para la aprobación de la compra. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 3
            .col-12.mb-4.p-5
              p.text-white Establecer las características de la relación proveedor-consumidor por medio de asistencias técnicas y ejercicios de auditoría. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 4
            .col-12.mb-4.p-5
              p.text-white Tener presente las verificaciones realizadas por el abastecedor. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 5
            .col-12.mb-4.p-5
              p.text-white Definir los términos contractuales en donde se garanticen todos los aspectos de calidad del producto. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 6
            .col-12.mb-4.p-5
              p.text-white Tener presente otros elementos como las solicitudes de precio, tiempos de entrega, o servicio postventa de ser necesario. 
          .row.justify-content-center
            .col-1.mb-4
              .BGIMG03.p-2.text-center
                h1.text-white.mb-2 7
            .col-12.mb-4.p-5
              p.text-white En los aspectos que tienen que ver con la calidad del producto, es importante tener presente que ellos sean fabricados teniendo en cuenta las normas específicas de buenas prácticas de manufactura para garantizar su calidad.

    p Sumado a lo anterior, en los establecimientos de cosmética ornamental, facial y corporal se debe tener una ficha técnica de los productos. Es un documento que contiene la información detallada sobre las características y propiedades que identifican sus elementos utilizados en la producción, características de tipo físico y técnico, las recomendaciones, los modos de utilización y otros datos relevantes. 
    br
    p.mb-5 Es importante tener presente que las fichas técnicas son un complemento a las instrucciones técnicas de utilización, pero no las reemplazan. Los datos que están dispuestos en estos documentos están basados en las condiciones de conocimiento del producto a la fecha de su emisión. A continuación, se exponen los conceptos básicos que se deben de tener en cuenta al momento de elegir un producto cosmético. 

    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-9
        img(src="@/assets/curso/tema2/img11.svg")

    .cajon.color-primario.p-4.mb-5.justify-content-center(data-aos="zoom-in-up")
          p.px-4 Para finalizar, se hace referencia al plan para el mantenimiento preventivo y correctivo de los equipos. Este se define como un proceso que se debe cumplir con la aparatología de uso estético para garantizar la correcta vida útil del mismo. Este proceso lo deben ejecutar profesionales que emitan un certificado de mantenimiento. Aquí es necesario comprender que el funcionamiento de los equipos para los tratamientos corporales y faciales (aparatología) se da entre el fabricante y el propietario o tenedor. 
    
    .row.justify-content-center
      .col-lg-4.p-4.mb-5(data-aos="fade-left") 
        img(src="@/assets/curso/tema2/img12.svg") 
      .col-lg-6.mb-5(data-aos="fade-right") 
        .row
          .col-lg-12
            <br><br><br>
          .col-lg-12
            .cajon-b.color-acento-contenido.p-4.mb-5
              p.mb-0 El fabricante o importador debe contar y entregar los servicios para verificar la calibración, el mantenimiento y aprovisionamiento de todos los insumos y repuestos que se puedan necesitar; así como garantizar la capacitación necesaria tanto en el marco de lo operativo como en el mantenimiento básico del equipamiento. Los centros de estética deben listar todas las acciones para el mantenimiento realizadas por ellos o por prestadores de este servicio de mantenimiento que hayan sido contratados. Además, estos informes pueden ser pedidos por las autoridades sanitarias competentes cuando sea necesario. 
    
      .col-lg-12
        p Los productos de tipo cosméticos que son usados en los servicios de cosmética ornamental, facial y corporal, están regulados por la Decisión 516 de 2002 de la Comunidad Andina de Naciones (CAN) la cual establece la armonización de legislaciones en el marco de la materia de productos cosméticos.

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
