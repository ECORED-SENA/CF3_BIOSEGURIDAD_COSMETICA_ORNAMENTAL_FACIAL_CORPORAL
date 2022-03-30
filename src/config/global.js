export default {
  global: {
    componenteFormativo: 'Productos y equipos de uso cosmético',
    descripcionCurso:
      'Esta experiencia de aprendizaje surge del desconocimiento de los establecimientos de cosmética ornamental, facial y corporal en la integración de procedimientos y acciones de gestión y mantenimiento de equipos y otros. Así, este contenido va dirigido a la verificación del cumplimiento de normas de seguridad de productos y equipos de uso cosmético según el manual de bioseguridad y la normativa vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normas de seguridad ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manejo de productos y equipos cosméticos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Comunidad Andina de Naciones. (2002). Decisión 516 de 2002. Armonización de legislaciones en materia de productos cosméticos. ',
      link: 'https://www.invima.gov.co/documents/20143/449018/DECISION+516.pdf',
    },
    {
      referencia:
        'Coton, V., M. C. (3 de 2015). Riesgo químico en peluquería. Libraria Xunta.',
      link:
        'https://libraria.xunta.gal/sites/default/files/downloads/publicacion/15-00149_- _riesgo_quimico_en_peluquerias._os_conece_do_issga.servizos.pdf ',
    },
    {
      referencia:
        'Díaz, G. (2018). Guía para las empresas con exposición de riesgo biológico. Ministerio del Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59676/GUIA+RIESGO+BIOL%C3%93GICO+EMPRESAS.pdf/d37bb562-af8e-a51b-106e-60c7784f645b',
    },
    {
      referencia:
        'Lozano, T., y Montero, R; (2015). Análisis de los riesgos ocupacionales que se originan en peluquerías y lugares de estéticas: proposiciones para su control. El Hombre y la Máquina,46, 59-71. ',
      link: 'https://www.redalyc.org/articulo.oa?id=47843368008',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006). Resolución 2827 de 2006. Por la cual se adopta el Manual de bioseguridad para establecimientos que desarrollen actividades cosméticas o con fines de embellecimiento facial, capilar, corporal y ornamental.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_2827_de_2006.pdf',
    },
    {
      referencia:
        'Sabater, I. (2013). Cosmetología para estética y belleza. McGraw-Hill España.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50239',
    },
    {
      referencia:
        'Wilkinson, J. B. (1990). Cosmetología de Harry. Ediciones Díaz de Santos.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/55473',
    },
  ],
  glosario: [
    {
      termino: 'Aditivos de un producto cosmético',
      significado:
        'productos que se añaden al cosmético para prevenir el deterioro y mejorar su presentación. Ejemplo: Conservantes, colorantes, perfumes.',
    },
    {
      termino: 'Correctores de un producto cosmético',
      significado:
        'sustancias que mejoran las características del cosmético en cuanto a las propiedades de sus componentes y a su aplicación, así como respecto a la calidad del cosmético.',
    },
    {
      termino: 'Notificación de tipo sanitaria obligatoria',
      significado:
        'comunicación en la cual se brinda información a la autoridad competente, bajo declaración juramentada, que un producto cosmético será puesto en el comercio a partir de una fecha determinada por el interesado. La comercialización debe ser posterior al momento de recibir la notificación por parte de la autoridad nacional competente.',
    },
    {
      termino: 'Producto cosmético',
      significado:
        'sustancia o formulación que tiene una aplicación de tipo local a ser utilizada en las diversas partes superficiales del cuerpo humano: epidermis, sistema piloso y capilar, uñas, labios entre otros.',
    },
    {
      termino: 'Principios activos de un cosmético',
      significado:
        'ingredientes responsables de realizar la función para la cual está diseñado el cosmético.',
    },
    {
      termino: 'Toxicidad de un producto cosmético',
      significado:
        'los cosméticos no pueden producir efectos nocivos ni contener sustancias prohibidas y otras restricciones, por ello es necesario cumplir estas recomendaciones: Seguir las recomendaciones de uso del fabricante, aplicarlos en las zonas correspondientes y no realizar mezclas que no estén entre las recomendaciones.',
    },
  ],
  complementario: [
    {
      texto: 'Normas de seguridad',
      tipo: 'Página web',
      descarga:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50239',
    },
    {
      texto: 'Manejo de productos y equipos cosméticos',
      tipo: 'Página web',
      descarga:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/55473',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
