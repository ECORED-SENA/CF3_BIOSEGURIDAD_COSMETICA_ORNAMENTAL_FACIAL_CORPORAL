<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido    
      .titulo-principal__numero
        span.text-white 1
      h1 Normas de seguridad

    p.mb-5 Estas se definen como aquellos lineamientos y procedimientos que se deben cumplir a cabalidad para tener una adecuada protección de todas las personas que se encuentren expuestas a un contacto directo o indirecto, temporal o permanente, con agentes de tipo biológico, físico o de tipo químico. 
    
      .cajon.color-primario.mb-5.pb-0(data-aos="zoom-in-up")
        .row
          .col.col-md-8
            p.px-5.pt-4.pb-4 El objetivo de la bioseguridad es servir como punto de contención de las posibles enfermedades que pudiesen salir de la manipulación de cualquier elemento biológico y así evitar, al máximo, accidentes de orden laboral que afecten la salud de los trabajadores o de las demás personas. 
          .col.col-md-4
            figure.position02
              img.img01.d-none.d-lg-block(src="@/assets/curso/tema1/img01.svg")

      .row.mb-5.justify-content-center
        .col-lg-12
          .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.svg')})`}"
            )
            .bloque-texto-g__texto.p-4(data-aos="fade-left")
              p.mb-0 <b>En el contexto de la cosmética ornamental, facial y corporal</b> los accidentes más comunes se deben a cortaduras con algún elemento punzocortante que están dentro de las herramientas y equipos de un servicio estético; pero también los riesgos biológicos a los que está sometido un cosmetólogo son aquellos que pueden ingresar de manera dérmica, sanguínea, respiratoria o digestiva, pudiendo desencadenar enfermedades infectocontagiosas, intoxicaciones o alergias.

      <br>
        p.mb-4 En la bioseguridad se considera que existe un riesgo biológico cuando las personas están propensas a la exposición con agentes patógenos, y para minimizar el riesgo existe un principio universal que protege y salvaguarda la integridad del personal que trabaja en el área de la salud y que por obvias razones se extiende al sector de la estética. Este principio básicamente es para prevenir de manera significativa que ocurra una transmisión o propagación de alguna enfermedad. La norma universal de precaución consiste en:
            
      <br><br/>
      .row.justify-content-center.mb-5.bg-header
        .col-11.col-md-7.col-lg-7.align-self-end(data-aos="fade-right")
          h2.ps-5.mb-5 Un trabajador de la salud o afines debe suponer que cualquier actividad que desarrolle es potencialmente infecciosa.  
        .col-11.col-md-4.col-lg-4
          figure.align-self-start.img-especial(data-aos="fade-left")
              img.img300.pe-5.img-fluid(src="@/assets/curso/tema1/img04.png")

        p.p-5.mx-5 Esta premisa de bioseguridad universal permite que el operario realice las funciones con todos los cuidados necesarios, sin importar si se conoce o no el diagnóstico patológico o la historia clínica de los clientes. El propósito esencial de esta precaución universal es protegerse y proteger a las personas que lo rodean.  
          .row.justify-content-center
            .col-lg-4
              figure.mb-4(data-aos="fade-right")
                img.img250.me-0.ms-5(src="@/assets/curso/tema1/img06.png")
            .col-lg-6.align-self-center(data-aos="fade-left")
              span.mb-4.etiqueta <b>Para cumplir con esta medida, es necesario que siempre se usen los elementos de barrera que estén a la disposición y al alcance de todo el personal</b>, 
              span sobre todo en las áreas en que se trabaja o se está en contacto con los fluidos corporales. Los fluidos corporales considerados en la precaución universal y que son manejados por el personal funerario son: la sangre, el semen, la secreción vaginal o cualquier otra sustancia o componente corporal que esté visiblemente con sangre, como las heces fecales.
              p.mb-4.pt-4 Como precaución estándar desde el área administrativa a nivel empresarial, se deben tener capacitaciones de salud ocupacional por agencias de riesgos laborales ARL; también se recomienda tener a disposición de todo el personal los manuales e instructivos que facilitan la consulta continua de cómo actuar o proceder en casos de accidentes en las áreas de riesgo biológico específicos de cada empresa.


      .row.contenedor-especial2.p-5.mb-4(data-aos="fade-right")     
        .col-lg-1.col-sm-3
          figure
            img.img80.ms-5.mt-5(src='@/assets/curso/tema1/img08.svg')     
        .col-lg-10
          br
          h5.mb-0.ms-5.mt-5 En Colombia, rigen actualmente varias normas sobre bioseguridad, vigilancia del uso de productos cosméticos y cuidado
          h5.ms-5 en el trabajo, entre la cuales se encuentran: 

        .row.justify-content-center(data-aos="fade-left")     
          .col-11
            .tarjeta-color.color.bg03.p-4.position01
              LineaTiempoC.color-acento-contenido(text-small)
                .row(titulo="Ley 9 de 1979")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Esta ley  expone las normas sanitarias para prevención y control de riesgos biológicos, físicos o químicos que alterarían el entorno humano. Para más información consulte este enlace: https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf
                  .col-md-4
                .row(titulo="Resolución 2511 de 1995 (Ministerio de Salud)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Por medio de esta, se adopta el manual de normas técnicas de calidad - Guías Técnicas de Análisis del INS para el control de calidad de los cosméticos.        
                  .col-md-4
                .row(titulo="Decreto 219 de 1998 (Ministerio de Salud)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se logra reglamentar de manera parcial el régimen sanitario respecto al control de la calidad y vigilancia en el marco de los productos de tipo cosmético. 
                  .col-md-4 
                .row(titulo="Resolución 2800 de 1998 (Ministerio de Salud)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se organizan las reglas sobre las buenas prácticas de manufactura de tipo cosmética para los productos que son  importados.      
                  .col-md-4
                .row(titulo="Decreto 612 de 2000 (Ministerio de Salud)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se organiza la reglamentación en el marco de la generación de registros sanitarios automáticos para los alimentos, los cosméticos y otros productos. 
                  .col-md-4
                .row(titulo="Decisión 516 de 2002 (Pacto Andino)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se establece la armonización de normativa en función de los productos cosméticos.
                  .col-md-4
                .row(titulo="Resolución 2003024596 de 2003 (Invima)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se logra unificar el sistema para codificar los productos cosméticos. 
                  .col-md-4 
                .row(titulo="Circular externa 100-00138-04 de 2004  (Invima)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se estructura la fecha de cuando vencen los productos cosméticos.
                  .col-md-4
                .row(titulo="Resolución 797 de 2004 (Comunidad Andina)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se reglamenta la Decisión 516 respecto al control y la vigilancia de tipo sanitaria de los productos cosméticos. 
                  .col-md-4 
                .row(titulo="Resolución 3774 de 2004 (Ministerio de la Protección Social)")
                  .col-md-8.mb-4.mb-md-0
                    p.ps-5 Se adopta la Norma Técnica Armonizada de las Buenas Prácticas de Manufactura Cosmética y la Guía de Verificación de las Buenas Prácticas de Manufactura Cosmética.
                  .col-md-4
      
    <br><br><br>
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Todas estas normas aportan lineamientos y recomendaciones a seguir desde las premisas universales de bioseguridad en el contexto de la cosmética ornamental, facial y corporal. Estas normativas dan la base necesaria para que el personal tome las medidas preventivas necesarias en la prestación de servicios ante la exposición a material biológico. 
        p.mb-4 Apreciado aprendiz, el Ministerio de Trabajo de Colombia ha desarrollado la Guía para trabajadores expuestos a riesgos biológicos (2018), por lo que se le invita a identificar las herramientas y recomendaciones sugeridas en los entornos laborales que presentan alta exposición a riesgo biológico. 
        .tarjeta-color.bg03.border.border-light.rounded-3.p-3.mb-5(data-aos="fade-right") 
          .row.justify-content-around.align-items-center        
            .col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Haga clic en el siguiente ícono para descargar la información.            
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/GUIA RIESGO BIOLÓGICO PARA TRABAJADORES.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-4
        figure(data-aos="fade-left")
          img.img295(src="@/assets/curso/tema1/img30.png")
    
    .cajon.color-acento-contenido.p-4.mb-0.justify-content-center(data-aos="fade-right") 
      .row.justify-content-center
        .col-lg-11
          p Hasta aquí se han presentado algunas aproximaciones a normas de bioseguridad enfocadas en el sector de estética. En caso tal de presentar alguna cortada o lesión dérmica, se sugiere vendar o tapar la zona, porque se está expuesto a algún contagio con microorganismos. Estos incidentes y otros riesgos se deben disminuir mediante el uso de elementos de protección. <b> Pero, ¿qué es un elemento de protección? </b>
    .row.mb-5.justify-content-center(data-aos="fade-left")
        .col-lg-12.mb-5
          .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img09.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0  Los Elementos de Protección Personal (EPP) son elementos o equipos usados por cualquier persona para protegerse de uno o varios riesgos o peligros a los que se expone. Estos elementos deben ser específicos, adecuados y especializados, según la función y el peligro que la labor implique para el trabajador. Se recomienda que los EPP utilizados por el sector funerario sean equivalentes a los del sector salud, por la similitud en el objeto de trabajo, cuerpos humanos.
        .col-lg-7.mb-5(data-aos="fade-right") 
          span.etiqueta <strong>Los elementos de protección personal son la primera línea de defensa </strong>
          span que tiene un cosmetólogo u otro personal que están direccionados a la prestación de servicios ornamentales, faciales y corporales. Según la intención de cada una las etapas mencionadas existen elementos de protección acorde a los riesgos biológicos, físicos y químicos. 
          <br><br><br>
          p <strong> Existen dos mecanismos de barrera contundentes, que permiten minimizar los riesgos de contraer enfermedades de riesgo biológico. Ellos son: </strong>
        .col-lg-5.mb-5
          figure(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img10.png")
        .col-lg-5(data-aos="fade-right")         
          .tarjeta-avatar
            img.px-2(src='@/assets/curso/tema1/img11.png' alt='AvatarTop')
            .bg04.p-4
              .row.p-4
                .col-11
                  <br><br><br>
                  p Barrera de <strong>inmunización activa</strong> adquirida a partir de inmunobiológicos (vacunas).
                .col-3
                  img(src='@/assets/curso/tema1/img13.png')
        .col-lg-5(data-aos="fade-left")         
          .tarjeta-avatar
            img.px-2(src='@/assets/curso/tema1/img12.png' alt='AvatarTop')
            .bg04.p-4
              .row.p-4
                .col-11
                  <br><br><br>
                  p Barrera física por medio de los elementos de <strong>protección personal.</strong>
                .col-3
                  img(src='@/assets/curso/tema1/img14.png')

    .row
      .col-lg-10.mb-4   
        p <strong>Los factores de riesgo del sector de la cosmética ornamental, facial y corporal están enfocados en las siguientes condiciones de trabajo que provienen de los siguientes aspectos: </strong>

    .row.mb-5(data-aos="fade-left")
      .col-1
      .col-lg-4.BGIMG01.p-4
        .row.justify-content-center.p-4
          .col-9.pt-5
            ul.lista-ul.mb-5
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Físicos. 
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Químicos.
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                |  Biológicos.
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | De seguridad.
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | De tipo ergonómico. 
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                |  De gestión. 
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | De tipo psicosocial.  
      .col-lg-7
        .row.align-items-center.mb-5.me-0
          .col-11
            <br><br><br><br>             
          .col-11.bg05
            .row.justify-content-around(data-aos="fade-right")  
              .col-11.p-4.pt-5
                p <strong>Los demás riesgos nombrados deberán ser tenidos en cuenta en los programas de salud ocupacional, bienestar laboral y como parte de los requisitos de apertura para los establecimientos que ofrecen servicios en cosmética ornamental, facial y corporal. </strong>
              .col-5
                img(src='@/assets/curso/tema1/img31.png')

    p.mb-5 <strong>Así se da inicio a la caracterización de estos mecanismos de barreras contundentes, a partir de la comprensión del sistema de defensa innato y adquirido del ser humano, donde se hablará sobre la barrera de inmunización activa para lo cual lo invitamos a revisar con atención el siguiente recurso educativo. </strong>

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.mb-5
        .tarjeta.bg02.p-2.mb-5
          SlyderA 
            .row.justify-content-center.p-4
              .col-3.mb-4.px-2
                img(src='@/assets/curso/tema1/img16.svg')
              .col-10.mb-4
                p Existen factores de riesgo cotidiano que bajan las defensas del cuerpo, como fumar, consumir sustancias psicoactivas, el licor, hábitos de vida sedentarios, mala alimentación o el estrés, por ello, se recomienda llevar hábitos de vida saludable. Cuando se tienen las defensas bajas, se está en riesgo constante de contraer una infección.
            .row.justify-content-center.p-4
              .col-3.mb-4
                img(src='@/assets/curso/tema1/img17.svg')
              .col-10.mb-4
                p Por lo general, los microorganismos tienen acceso al cuerpo de una persona por medio de la respiración, las mucosas y la piel. El propio cuerpo está en la capacidad de detectar los microorganismos nocivos que reciben el nombre de antígenos. La barrera de defensa propia son los anticuerpos presentes en los órganos y células del cuerpo. 
            .row.justify-content-center.p-4
              .col-3.mb-4
                img(src='@/assets/curso/tema1/img18.svg')
              .col-10.mb-4
                p Los órganos o tejidos que sirven como barreras de defensa para el cuerpo son: las amígdalas, la glándula timo, sistema linfático (ganglios), bazo y la médula ósea. A nivel celular, están los glóbulos blancos de la sangre, llamados linfocitos, estas células son las más importantes para la defensa del cuerpo, pues permiten comunicar y ayudar a alertar a las demás células del cuerpo sobre la presencia de un antígeno, lo que permite identificarlo y destruirlo para generar memoria o recordación de este por si ocurre otra posible infección con el mismo microorganismo o agente extraño.
            .row.justify-content-center.p-4
              .col-3.mb-4.px-3
                img(src='@/assets/curso/tema1/img19.svg')
              .col-10.mb-4
                p El sistema innato es el sistema de defensa con el que todas las personas nacen. Se va desarrollando por medio del reconocimiento y la alerta de un antígeno para producir respuestas inmediatas de defensa, que transportan por el torrente sanguíneo los glóbulos blancos, productores de citoquinas, y permean los tejidos, generando la inmunoglobulina. 
                p Con este mecanismo, los linfocitos fagotizadores destruyen los objetos extraños; luego, el cuerpo limpia los residuos. En todo este proceso, se genera la infección, que es la reacción de la batalla entre esos antígenos y los anticuerpos por el bienestar del organismo. Después de todo esto, lo último que sucede es que se activa el sistema de defensa adquirida, que es cuando ya el cuerpo es capaz de reconocer el antígeno. 
            .row.justify-content-center.p-4
              .col-3.mb-4.px-3
                img(src='@/assets/curso/tema1/img20.svg')
              .col-10.mb-4
                p Las vacunas, por ejemplo, copian este mismo sistema de defensa adquirida. Ellas se definen como un instrumento clave para combatir una enfermedad y surgen de las mismas bacterias, virus o microorganismos que son ajustados, manipulados y tratados en los laboratorios para que, al ingresar al cuerpo, se cree el sistema de defensa que ayudará a que el cuerpo reconozca qué patógenos ingresaron y los elimine. 
                p Ese mecanismo de defensa crea células de memoria, a las cuales se conoce como inmunidad, ya sea por medio del sistema de defensa innato o adquirido, se produce la inflamación de los tejidos, que se manifiesta con síntomas como la fiebre y el malestar general.
            .row.justify-content-center.p-4
              .col-10.mb-4.px-2
                img(src='@/assets/curso/tema1/img21.svg')
              .col-10.mb-4
                p La mayoría de las veces, el operario funerario no tiene conocimiento si el cuerpo con el que está trabajando presenta alguna enfermedad infectocontagiosa, por tal motivo, se tiene siempre que trabajar bajo premisas universales de autocuidado y protección personal.
                p Al personal operativo que está en contacto o en exposición con los fallecidos se le recomienda tener al día y actualizado el siguiente esquema de vacunación y periódicamente estar revisando los niveles de anticuerpos. 
      .col-lg-12.mb-5
        p <strong>Comprendidos los sistemas defensa innato y adquirido del ser humano, se entran a caracterizar los agentes biológicos, químicos y cosméticos que pueden estar presente en las actividades laborales, y que son:</strong>

    
      .row.justify-content-center.align-content-center.mb-5
        .col-lg-5.bg05.p-5.pb-0(data-aos="fade-left")
          h2.mb-5.pt-3 Agente biológico 
          p.mb-4 Según Lozano y Montero (2015), dentro de las enfermedades más frecuentes que se asocian al riesgo biológico son aquellas que son causadas por la presencia de agentes de tipo micótico en el lugar de desarrollo de las actividades cosmética ornamental, facial y corporal; las cuales generan en la persona que estuvo expuesta infecciones, alergias o toxicidad, principalmente en la piel. 
          p Las actividades con mayor exposición son: cortar el cabello, rasurar, arreglar la barba, arreglo del bigote y patilla, la elaboración de mechones e iluminaciones, los tratamientos a nivel capilar, arreglo de uñas de las manos y los pies, el maquillaje permanente, masaje corporal y manipulación de equipos electrónicos.
        .col-lg-5.p-0
          figure(data-aos="fade-right")
            img.img-fluid(src='@/assets/curso/tema1/img22.svg')
    
      .row.justify-content-center.align-content-center.mb-5
        .col-lg-5.p-0(data-aos="fade-left")
          figure
            img.img-fluid(src='@/assets/curso/tema1/img23.svg')
        .col-lg-5.bg06.p-5(data-aos="fade-right")
          h2.mb-5.pt-3 Agente químico y cosmético  
          p.mb-4 De acuerdo con Lozano y Montero (2015), los colaboradores del sector de cosmética ornamental, facial y corporal presentan exposición a varios productos químicos en la ejecución de sus actividades, en su mayoría estos químicos son de tipo tóxico. 
          p Por lo general, los químicos que se pueden presentar este nivel de toxicidad son: productos para tinturar el cabello, productos para cuidar el sistema tegumentario y las uñas, el líquidos para realizar arreglo de uñas permanentes, los champús, los productos para realizar maquillaje, los productos para realizar procesos de limpieza y desinfección, entre otros agentes contaminantes que, si no se alinean con las debidas normas de seguridad, pueden generar un grave riesgo de salud para los colaboradores.
    
    <br><br/>
    .row.justify-content-center.align-items-center
      .col-lg-7.mb-5(data-aos="fade-right") 
        p <strong>Es importante ampliar los aspectos relacionados con los riesgos químicos, porque pueden generar varias enfermedades de tipo ocupacional para los trabajadores en el área de la cosmética ornamental. Para ello, le invitamos a leer las páginas 4 a 18 del documento Riesgo químico en peluquerías que se encuentra a continuación.</strong>             
        .tarjeta.color.color.bg03.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-8.ps-0.pt-2
              <h5 style="color:#483C8C !important; font-weight: bold;">Para ello, le invitamos a leer las páginas 4 a 18 del documento Riesgo químico en peluquerías que se encuentra a continuación.</h5>
            .col-4.col-md-2.mb-3.mb-sm-0
              a.mb-4.me-5.pt-2.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/RIESGO_PELUQUERIA.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
      .col-lg-5.mb-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img32.svg")

    .row
      .col-lg-7
        .row.align-items-center  
          .col-12
            <br><br><br><br>             
          .col-12.bg05(data-aos="fade-left")
            .row.justify-content-around
              .col-11.p-4.pt-5
                p Como parte importante del tema que se está desarrollando, es conveniente revisar, en resumen, cuáles son las enfermedades más comunes relacionadas con el ejercicio de la actividad de cosmética ornamental, facial y corporal: 
              .col-5
                img(src='@/assets/curso/tema1/img24.svg')
      .col-lg-4.BGIMG01.p-4.mb-5(data-aos="fade-right")
        .row.justify-content-center
          .col-9.pt-5
            ul.lista-ul.mb-5
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Infecciones bacterianas.  
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Infecciones víricas. 
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                |  Infecciones por hongos. 
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Enfermedades infecciosas por protozoos. 
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Dermatitis de contacto, irritativa y alérgica.  
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Afecciones de tipo respiratorio, incluido asma, rinitis.  
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Irritación ocular.
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Alteración hormonal.   
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Irritación cutánea.  
              li 
                <i class="fas fa-circle fa-xs" style= "color:#4BB3C7 !important;"></i>
                | Urticaria.

      .col-lg-12.mb-5 
        span.etiqueta <strong>Identificados los aspectos relacionados con los riesgos químicos y otros, en Colombia los productos deben tener un registro sanitario</strong>
        span , el cual certifica la libre circulación en el mercado. Los productos que requieren un registro sanitario, porque tienen un alto impacto en las condiciones de salud pública. Este certificado es emitido por la entidad competente, en el caso del estado Colombiano, el Invima (Instituto Nacional de Vigilancia de Medicamentos y Alimentos).

    .row.mb-5
      .col-lg-3(data-aos="fade-right") 
        img(src='@/assets/curso/tema1/img25.svg') 
      .col-1
      .col-lg-8(data-aos="fade-left") 
        p Sumado a lo anterior, en los establecimientos de cosmética ornamental, facial y corporal se debe tener un manual de bioseguridad para orientar el correcto manejo de insumos, elementos y normas de precaución que conlleven a la prevención y la ocurrencia de hechos que pongan en riesgo la salud del personal que realiza el proceso de atención como para los usuarios. Estas medidas se adoptan a partir de la Resolución 2827 de 2006 que orienta los procesos clave que deben ser tenidos en cuenta para la construcción del manual de bioseguridad. 

    ImagenInfografica.color-secundario.mb-5(data-aos="fade-right") 
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img28.svg')

      .tarjeta.color-acento-botones.p-3(x="38.5%" y="22.5%")
        p
      .tarjeta.color-acento-botones.p-3(x="68%" y="22.5%")
        p
      .tarjeta.color-acento-botones.p-3(x="38.5%" y="40%")
        p
      .tarjeta.color-acento-botones.p-3(x="68%" y="40%")
        p
      .tarjeta.color-acento-botones.p-3(x="38.5%" y="59%")
        p
      .tarjeta.color-acento-botones.p-3(x="68%" y="59%")
        p
      .tarjeta.color-acento-botones.p-3(x="38.5%" y="79%")
        p
      .tarjeta.color-acento-botones.p-3(x="68%" y="79%")
        p


    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        .tarjeta.color.color.bg03.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-8
              <h5 style="color:#483C8C !important; font-weight: bold;"> Para más información le invitamos a consultar la Resolución 2827 de 2006 por la cual se adopta el manual de bioseguridad para establecimientos que desarrollen actividades cosméticas o con fines de embellecimiento facial, capilar, corporal y ornamental. </h5>
            .col-3.col-md-2.mb-3.mb-sm-0
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

  


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
