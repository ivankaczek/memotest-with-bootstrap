let turnos = 0;
let $primerCuadro = null;
const $tablero = document.querySelector('#tablero');
const $cuadros = $tablero.querySelectorAll('.cuadro');
const $mensajeFinJuego = document.querySelector('#fin-juego');

function configuarJuego(){
    const coloresBase = ['rojo','azul','verde','amarillo','negro','blanco'];
    const coloresRepetidos = coloresBase.concat(coloresBase);
    configurarCuadros($cuadros,coloresRepetidos);
    console.log(coloresRepetidos);
    manejarEventos($tablero);
}

function manejarEventos($tablero){
    $tablero.onclick = function(e) {
        const $elemento = e.target;
        if($elemento.classList.contains('cuadro')){
            manejarClickCuadro($elemento);
        }
    }
}

function configurarCuadros($cuadros,colores) {
    const coloresRandom = colores.sort(function(){
        return 0.5 - Math.random();
    });
    coloresRandom.forEach(function(color,i) {
        $cuadros[i].classList.add(color);
    }
    );

}

function manejarClickCuadro($cuadroActual) {
	mostrarCuadro($cuadroActual);
	
	if($primerCuadro === null) {
		$primerCuadro = $cuadroActual;
	} else {

	if ($primerCuadro === $cuadroActual) {
	return;
	}

	turnos++;

	if (cuadrosSonIguales($primerCuadro, $cuadroActual)) {
	eliminarCuadro($primerCuadro);
	eliminarCuadro($cuadroActual);
	} else {
	ocultarCuadro($primerCuadro);
	ocultarCuadro($cuadroActual);
	}
	$primerCuadro = null;
	}
}


configuarJuego();