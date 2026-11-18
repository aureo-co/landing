export const WA = 'https://wa.me/573127433687?text=' + encodeURIComponent('Hola, quiero información para inscribirme en la cohorte #19 del programa Aprende a invertir de Aureo.');

export const nav = [['para-quien', 'Para quién es'], ['programa', 'Programa y fechas'], ['incluye', 'Qué incluye'], ['inversion', 'Inversión'], ['dudas', 'Dudas']];
export const chips = ['9 sesiones en vivo', 'Todas quedan grabadas', '~18 h de formación práctica', 'Sesiones personalizadas para tu portafolio'];
export const mix = [
  ['#C9A45C', 30, 'Renta fija', 'CDTs, bonos y TES'], ['#9ED2B4', 25, 'Renta variable', 'Acciones y ETFs globales'],
  ['#F4EFE7', 20, 'Fondos', 'FICs y pensiones voluntarias'], ['#5FA38A', 15, 'Inmobiliario', 'Vivienda, Airbnb, remates'],
  ['#8C7A55', 10, 'Alternativas', 'Libranzas, factoring, franquicias']
];
export const forYou = [
  ['Tienes ahorros quietos', 'Tu dinero está en una cuenta o en un CDT y sientes que podría rendir más.'],
  ['Te abruma el ruido', 'Quieres empezar a invertir, pero hay demasiadas opciones y opiniones.'],
  ['Quieres dormir tranquilo', 'Buscas construir patrimonio con calma, sin sustos ni apuestas.'],
  ['Quieres entender antes de invertir', 'Prefieres saber en qué inviertes antes de entregarle tu dinero a alguien.'],
  ['Quieres tu cifra mágica', 'Quieres saber cuánto necesitas para vivir de tus inversiones algún día.'],
  ['Prefieres cero tecnicismos', 'Buscas aprender con lenguaje simple y casos aplicados a Colombia.']
];
export const notForYou = ['Buscas hacerte rico rápido', 'Quieres hacer trading diario', 'Esperas que alguien invierta por ti', 'No vas a dedicarle tiempo al programa'];
export const transform = [
  ['Tu dinero está quieto en una cuenta de ahorros.', 'Sabes qué instrumento usar para cada una de tus metas.'],
  ['No sabes cuánto patrimonio necesitas para vivir tranquilo.', 'Tienes tu cifra mágica definida.'],
  ['Cripto, acciones, finca raíz, CDTs… todo suena igual de confuso.', 'Tienes una ruta de inversión clara y simple.'],
  ['Inviertes por recomendación de otros.', 'Evalúas fondos, gestores y comisiones con criterio propio.'],
  ['Llevas meses posponiendo tu primera inversión.', 'Ejecutaste tu primera inversión.'],
  ['Ahorras lo que sobra, cuando sobra.', 'Tienes un plan de aportes mensuales automáticos.']
];
const s = (date, title, sub, outcome, items) => ({ date, title, sub, outcome, items });
export const sessions = [
  s('18 nov', 'Mentalidad inversionista', '5 reglas para transformar tus finanzas', 'Cambias tu mentalidad para tomar decisiones financieras inteligentes.', [
    ['Dormir tranquilo', 'despertar financiero, rompe malos hábitos'], ['Cifra mágica', 'define el patrimonio a construir'], ['Ruta de inversión', 'de la primera inversión a la libertad financiera'], ['Interés compuesto', 'el poder del tiempo y la disciplina'], ['Presión social', 'casa vs. arriendo, deudas buenas vs. malas']]),
  s('25 nov', 'Fundamentos de un portafolio', 'Construye un portafolio sólido', 'Estructuras un portafolio adaptado a tus metas personales.', [
    ['Glosario básico', 'términos clave de inversión'], ['Diversificación', 'por país, moneda, activo y nivel de riesgo'], ['Tipos de ingresos', 'capitalización, rentas, intereses, dividendos'], ['Fuentes confiables', 'Morningstar y herramientas de análisis'], ['Rebalanceo', 'ajusta para maximizar rentabilidad']]),
  s('2 dic', 'Renta fija', 'Inversiones predecibles y de menor riesgo', 'Generas ingresos predecibles con bajo riesgo.', [
    ['Bonos y TES', 'deuda pública y privada'], ['CDTs', 'primarios y secundarios, protección Fogafín'], ['Créditos directos', 'oportunidades en deuda mezzanine'], ['Manejo de efectivo', 'supercuentas, Money Market FICs']]),
  s('10 dic', 'Renta variable', 'El poder del mercado accionario', 'Aprovechas el potencial de crecimiento del mercado.', [
    ['Mercados locales y globales', 'acciones ordinarias y preferentes'], ['Dividendos y valorización', 'estrategias de alto rendimiento'], ['Growth vs. Value', 'encuentra tu estilo de inversión'], ['Índices y ETFs', 'diversificación accesible a bajo costo'], ['Taller práctico', 'crea tu portafolio de acciones']]),
  s('15 dic', 'Alternativas de inversión en Colombia', 'Oportunidades únicas del mercado local', 'Exploras opciones innovadoras del mercado colombiano.', [
    ['Libranzas y factoring', 'altas tasas, garantías, flujo de caja'], ['Franquicias', 'inversión en negocios establecidos'], ['Titularizaciones', 'negocios de rentas innovadores'], ['Maquinaria y alquiler', 'línea amarilla, taxis, plataformas']]),
  s('13 ene', 'Fondos de inversión', 'Versatilidad y accesibilidad', 'Inviertes como profesional con mínima complejidad.', [
    ['FICs', 'diversificación con bajos montos de entrada'], ['Pensiones voluntarias', 'beneficios tributarios, mejor rentabilidad'], ['Capital privado', 'ganadería, energía, inmobiliario'], ['Cómo elegir fondos', 'track record y equipo gestor'], ['Comisiones', 'el impacto del 1% a largo plazo']]),
  s('18 ene', 'Sector inmobiliario', 'Crea patrimonio con bienes raíces', 'Dominas el sector inmobiliario para crecer tu patrimonio.', [
    ['Tipos de inversión', 'vivienda, comercial, Airbnb, co-livings, remates'], ['Estrategias', 'flujo de caja, valorización, apalancamiento'], ['Estrategia BRRRR', 'compra, rehabilita, alquila, refinancia, repite'], ['Oportunidades', 'preventa, remates, flipping']]),
  s('21 ene', 'Administración del portafolio', 'Protege y optimiza tus inversiones', 'Gestionas tu patrimonio con criterio profesional.', [
    ['Perfil de riesgo', 'instrumentos adecuados para tu momento'], ['Debida diligencia', 'evalúa gestores y entidades'], ['Planeación tributaria', 'maximiza beneficios legales'], ['Plataformas', 'herramientas para invertir con confianza'], ['Rebalanceo', 'mantén el portafolio alineado con tus metas']])
];
export const workshop = {
  steps: ['Define metas, prioridades y perfil de riesgo', 'Busca, analiza y diseña tu portafolio personalizado', 'Ejecuta y planifica aportes mensuales automáticos'],
  assets: ['Acciones locales e internacionales', 'Bonos y TES', 'ETFs diversificados', 'CDTs e instrumentos de renta fija', 'Activos inmobiliarios']
};
export const includes = [
  ['9 sesiones en vivo', 'Del 18 de noviembre al 28 de enero, con espacio para tus preguntas en cada sesión.'],
  ['Todas las sesiones grabadas', 'Repasa cuando quieras o ponte al día si no pudiste conectarte.'],
  ['Sesiones personalizadas para crear tu portafolio', 'Uno a uno, para diseñar tu portafolio según tus metas, prioridades y perfil de riesgo.'],
  ['Guía paso a paso en tus primeras inversiones', 'Te acompañamos a activar usuarios, abrir tus cuentas y elegir las estructuras más eficientes, en entidades correctas y seguras.'],
  ['$500.000 para tus primeras inversiones', 'Parte de tu inscripción se destina a invertir de verdad, para que aprendas haciendo.'],
  ['Taller práctico final', 'Sales con tu portafolio diseñado y tu primera inversión ejecutada.'],
  ['Colombia y el mundo', 'Renta fija, renta variable, fondos, inmobiliario y alternativas locales.'],
  ['Sin tecnicismos', 'Lenguaje simple y casos reales para decidir con criterio propio.']
];
export const authorStats = [['+4.000', 'personas capacitadas'], ['+700', 'familias asesoradas'], ['USD 120 M', 'invertidos por nuestras familias y el family office'], ['118', 'empresas han dado el programa a sus colaboradores'], ['#19', 'cohorte de nuestro programa']];
export const testimonials = [
  ['MM', 'Mateo Marulanda R.', 'Head de Expansión · Pluria', 'Hacer este training con Luis Felipe ha sido una transformación en mi forma de ver las inversiones, aplicarlas y, sobre todo, estar tranquilo de cara a mi futuro. Es un excelente contenido, de muy alto valor, y lo mejor: el networking que uno puede llegar a tener.'],
  ['ED', 'Esteban Díaz', 'Desarrollador Senior · IBM', 'Las bases y las herramientas con las que quedas luego de hacer el curso son extraordinarias. Tener la posibilidad de actuar apenas acaba el entrenamiento es genial. Además, cuando finalizas ya puedes tener creado tu portafolio.'],
  ['MR', 'María Camila Ramírez', 'Business Development', 'Luis es una persona con una historia y una experiencia enormes. Siempre quiere darnos el valor más alto. Sus recomendaciones y su empuje para hacer nuestras primeras inversiones me dieron la confianza que necesitaba.']
];
export const priceList = ['9 sesiones en vivo y grabadas', 'Sesiones personalizadas para crear tu portafolio', 'Guía paso a paso para invertir en las entidades correctas y seguras', '$500.000 destinados a tus primeras inversiones', 'Taller práctico: tu portafolio diseñado', 'Plan de aportes mensuales activado'];
export const faqs = [
  ['¿Necesito saber de finanzas para tomarlo?', 'No. El programa es práctico y sin tecnicismos. Empezamos por la mentalidad y un glosario básico, y vamos construyendo desde ahí.'],
  ['¿Qué pasa si no puedo asistir a una sesión en vivo?', 'Todas las sesiones quedan grabadas para que las veas cuando quieras y no te quedes atrás.'],
  ['¿Cuánto dinero necesito para empezar a invertir?', 'No necesitas un monto mínimo para tomar el programa. Revisamos alternativas con montos de entrada bajos, como los fondos de inversión colectiva (FICs), y defines un plan de aportes acorde a tu realidad.'],
  ['¿Cómo funcionan los $500.000 para mis primeras inversiones?', 'De los $1.500.000 de la inscripción, $500.000 se destinan a hacer tus primeras inversiones. Las haces acompañado por nosotros, para que aprendas haciendo: el proceso, las entidades y cómo invertir de forma correcta y segura.'],
  ['¿En qué consisten las sesiones personalizadas?', 'Son sesiones uno a uno para crear tu portafolio según tus metas y perfil de riesgo, y guiarte paso a paso para hacer tus inversiones en las entidades correctas y seguras. [Confirmar número y duración de las sesiones.]'],
  ['¿Con qué me voy al terminar?', 'Con tu portafolio diseñado, tu primera inversión ejecutada y un plan de aportes mensuales activado.'],
  ['¿Las sesiones son virtuales o presenciales? ¿En qué horario?', 'Las sesiones son en vivo [virtuales / presenciales / híbridas] a las [HORA] y todas quedan grabadas.'],
  ['¿Ustedes me dicen en qué invertir?', 'Te damos el criterio y las herramientas para que tomes tus propias decisiones. El contenido es educativo y no constituye una recomendación profesional de inversión.'],
  ['¿Cómo me inscribo y cómo pago?', 'Escríbenos por WhatsApp y te enviamos los pasos de inscripción. Medios de pago: [tarjeta / transferencia / PSE — confirmar].']
];
