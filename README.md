# PokeApp
En este ejercicio trabajaremos con React funcional y haremos principalmente uso de los Hooks useState(), useEffect(), useContext(), useParams()

pokeapi
Enrutado de la página
Añadiremos un navbar que permita movernos entre rutas usando <Link />.

/. La página principal, donde veremos:

Search. Para hacer búsqueda de pokemons
ListaPokemon. Listado de pokemons
Cuando se monte el componente hacer una llamada a la API para que se dibujen pokemons en pantalla
/new Página para dar de alta un nuevo pokemon con un formulario para ingresar sus datos.

/pokemon/:id Vista detalle de un perfil de pokemon (información extendida con todos los campos que podamos). Necesitarás el componente Details.

Fase 1: Búsqueda de Pokémons
En este ejercicio tendréis que jugar con la Pokeapi. Se dividirá en los siguientes pasos:

Crea un componente Search para realizar la búsqueda
Crea un input de texto.
Crea un botón.
Crea un componente Card para dibujar los datos del personaje obtenido
Crea el Componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imágen del Pokemon.
Comunicación Sibling---Sibling entre Search y ListaPokemon. Levantar el estado.
Crea con useState un estado para guardar el texto de lo que vayamos escribiendo en el input ('').
Crea con useState un estado para guardar en una lista los pokemon que vayamos buscando ([]). Cada vez que pulsemos el botón buscar, el pokemon encontrado deberá concatenarse a la lista [{},{},{},{},{},{}]
Cuando pulsemos el botón que hemos creado antes, se deberá hacer una petición a la PokeApi con el nombre o el número del pokemon correspondiente registrado en el estado del input.
Se debe dibujar en Card los datos e imágen del Pokemon.
Al terminar la búsqueda el input de texto debe borrarse/resetear su valor a ('')
Wireframes orientativos (no tiene que ser exactamente así): img img

img

Fase 2: Búsqueda con Debounce
img

Para esta fase, además de pulsar un botón para hacer la búsqueda vamos a dejar que las búsquedas se hagan solas en función de lo que escriba el usuario.
Cuando escribamos, la petición deberá realizarse según escribimos.
Como anteriormente, utiliza el componente ListaPokemon, que deberá dibujar una lista con todas las Card de datos e imagen del Pokemon.
Usaremos Debounce para ralentizar la búsqueda tras 2-3 segundos sin pulsaciones.
Debounce:

Lógicamente una petición por pulsación es demasiado. Es probable que con ese nivel de peticiones alcancemos el máximo de peticiones permitidos por la Api en poco tiempo. Lo siguiente que haremos será evitar que con cada pulsación se haga una petición. La lógica para hacer esto será que si entre pulsaciones pasa más de un segundo y medio (o el tiempo que queráis) se haga la petición a la Api de lo que haya almacenado en el estado del input en ese momento.
Investiga qué es y cómo es la lógica de un Debounce para implementarla y conseguir el paso anterior. Esta función es la que nos permitirá conseguir que solo tras la última pulsación de más de un tiempo determinado se haga la petición.
OJO: Cuando consigas implementar la función debounce para no colapsar la api a peticiones implementa lo siguiente: si el input está vacío no se hará ninguna petición.
Cuando escribamos un pokemon en el input que ya exista en nuestra lista de pokemons tampoco tenemos que hacer esa petición.
Formulario de alta para nuevos Pokémon
Vamos a añadir un formulario para crear nuevos pokemons que nos inventemos.

Estos deben introducirse al array de pokemon donde estamos guardando el listado. El formato que debe cumplir será:

{
  id: '',
  name: '',
  image: '',
  typeOne: '',
  typeTwo: ''
}
Para crear y trabajar con el formulario usaremos el paquete npm react-hook-form

Los inputs deberán ser del siguiente tipo:

id => number
name => text
image => text
typeOne => select
typeTwo => select
Las condiciones de error y validación serán las siguientes:

id => required
name => required minlenght = 3
image => required
typeOne => select required
typeTwo => select
Comunicación - useContext()
El estado con el listado de Pokemon debe vivir en App y pasarse a cada sección que lo necesite consumiendo a través de Context

El formulario de búsqueda y ListaPokemon se comunican a través de Context

El componente ListaPokemon, recibirá de Context la lista de Pokemons y mapeará dicha lista cargando los componentes Card correspondientes y pasándole a través de props la información de cada registro.

Los nombres mostrados por los componentes Card de cada Pokemon serán Links clickables que llevarán a la ruta /pokemon/:id, que mostrará la vista detallada de ese Pokemon. En dicho Link se pasará en la query String los datos del Pokemon para poder ser leídos en la pantalla de vista detalle(puedes usar un hook para ello si quieres).

Ejemplo de ruta a crear:

/pokemon/22?name=bulbasur&image=url_imagen&typeOne=plant

HINT: Busca en google query-parameters para manejar parámetros de Ruta en React

EXTRA

Como los pokemon no pueden tener el mismo tipo repetido DOS veces, en la función de submit validaremos que no se han repetido y mostraremos un mensaje de error al usuario en caso de que sea necesario.

Firebase
(Sólo para quien haya terminado lo anterior y tras validación de profesores) Introducir:

Firebase Firestore para añadir funcionalidad de pokémon añadir/borrar de favoritos
Firebase Auth para autenticación. Idealmente, sólo usuarios registrados en el sistema pueden guardar sus pokemon favoritos
Tutoriales:

autenticacion-con-firebase-y-react
how-to-use-the-firebase-database-in-react
how-to-use-firestore-database-in-reactjs
NOTAS EXTRA
Se permite uso de librerías externas/hooks que faciliten el desarrollo de la aplicación
Uso de SASS desde principio del proyecto