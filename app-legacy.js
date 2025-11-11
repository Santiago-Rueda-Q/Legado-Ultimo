// MODULO DE CALCULADORA v2 - LEGACY CORREGIDO
let buffer = '0';
let memoria = 0;
let ultimoOperador;
const historial = [];
const MAX_HISTORY_ITEMS = 5;

function handleNumber(numStr) {
  if (buffer === '0') {
    buffer = numStr;
  } else {
    buffer += numStr;
  }
  updateScreen();
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0';
      memoria = 0;
      ultimoOperador = null;
      break;
    case '=':
      if (ultimoOperador === null) {
        return;
      }
      flushOperationAndLog(parseInt(buffer));
      ultimoOperador = null;
      buffer = '' + memoria;
      memoria = 0;
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      handleMath(symbol);
      break;
    case 'sin':
    case 'cos':
    case 'tan':
      if (buffer === '0') return;
      let cientificoResult;
      const val = parseFloat(buffer);
      if (symbol === 'sin') {
        cientificoResult = Math.sin(val);
      } else if (symbol === 'cos') {
        cientificoResult = Math.cos(val);
      } else if (symbol === 'tan') {
        cientificoResult = Math.tan(val);
      }
      buffer = '' + cientificoResult;
      const logEntryCientifico = `${symbol}(${val}) = ${cientificoResult}`;
      logHistory(logEntryCientifico);
      break;
  }
  updateScreen();
}

function handleMath(symbol) {
  if (buffer === '0' && memoria === 0) {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (memoria === 0) {
    memoria = intBuffer;
  } else {
    flushOperationAndLog(intBuffer);
  }
  ultimoOperador = symbol;
  buffer = '0';
}

function flushOperationAndLog(intBuffer) {
  const operacionPrevia = ultimoOperador;
  const memoriaPrevia = memoria;

  if (ultimoOperador === '+') {
    memoria += intBuffer;
  } else if (ultimoOperador === '-') {
    memoria -= intBuffer;
  } else if (ultimoOperador === '*') {
    memoria *= intBuffer;
  } else if (ultimoOperador === '/') {
    memoria /= intBuffer;
  }

  const logEntry = `${memoriaPrevia} ${operacionPrevia} ${intBuffer} = ${memoria}`;
  logHistory(logEntry);
}

function logHistory(logEntry) {
  historial.push(logEntry);
  if (historial.length > MAX_HISTORY_ITEMS) {
    historial.shift();
  }
  console.log(historial);
}

function updateScreen() {
  const displayElement = document.getElementById('display');
  if (displayElement !== null) {
    displayElement.innerText = buffer;
  }
}

function initCalculadora() {
  const calculatorButtons = document.querySelector('.buttons');
  if (calculatorButtons !== null) {
    calculatorButtons.addEventListener('click', function (event) {
      buttonClick(event.target.innerText);
    });
  }
}

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
}

// -----------------------------------------------------------
// MODULO DE TO-DO LIST CORREGIDO
// -----------------------------------------------------------

let todoList = []; 
let userName = 'Default User'; 

function agregarTarea() {
  const inputElement = document.getElementById('todo-input');
  const textoTarea = inputElement.value;

  if (textoTarea === '') {
    alert('Error: La tarea no puede estar vacía.');
    return;
  }

  let duplicado = false;
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].texto === textoTarea) {
      duplicado = true;
      break;
    }
  }

  if (duplicado === true) {
    alert('Error: Tarea duplicada.');
    return;
  }

  const nuevaTarea = {
    id: Date.now(),
    texto: textoTarea,
    completada: false
  };

  todoList.push(nuevaTarea);
  inputElement.value = '';
  dibujarListaTareas();
}

function dibujarListaTareas() {
  const listaHtml = document.getElementById('todo-list');
  if (listaHtml === null) return;

  listaHtml.innerHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const tareaActual = todoList[i];
    const elementoLista = document.createElement('li');

    elementoLista.innerText = tareaActual.texto;

    if (tareaActual.completada === true) {
      elementoLista.style.textDecoration = 'line-through';
    }

    elementoLista.addEventListener('click', function () {
    });

    listaHtml.appendChild(elementoLista);
  }
}

function initTodoList() {
  const botonAgregar = document.getElementById('add-task-btn');
  if (botonAgregar !== null) {
    botonAgregar.addEventListener('click', agregarTarea);
  }
  dibujarListaTareas(); 
}

initCalculadora();
initTodoList();
