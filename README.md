# Proyecto: Servidor REST con Flask

**Materia:** Arquitectura Web
**Carrera:** Ingenieria en Inteligencia Artificial - Universidad de Palermo

## Descripcion
Este proyecto implementa un **servidor REST basico** utilizando **Flask** (Python).
El servidor expone dos endpoints simples que cumplen con los requisitos del modulo 11:

- Endpoint `/frase`: Devuelve una frase al azar desde una lista predefinida.
- Endpoint `/max`: Recibe dos parametros numericos y devuelve el mayor entre ambos.

El objetivo es demostrar el uso de Flask para crear servicios REST simples con paso de parametros y logica minima.

## Instrucciones de uso

### Requisitos previos
- **Python 3.8** o superior instalado en tu sistema
- **pip** (gestor de paquetes de Python)

### Instalacion

1. Clonar o descargar el proyecto en tu maquina local.

2. Abrir una terminal en la carpeta del proyecto.

3. (Opcional pero recomendado) Crear un entorno virtual:
   ```bash
   python -m venv venv
   ```

4. Activar el entorno virtual:
   - En Windows:
     ```bash
     venv\Scripts\activate
     ```
   - En Linux/Mac:
     ```bash
     source venv/bin/activate
     ```

5. Instalar las dependencias del proyecto:
   ```bash
   pip install -r requirements.txt
   ```

### Ejecucion

1. Ejecutar el servidor Flask:
   ```bash
   python app.py
   ```

2. El servidor se iniciara en `http://localhost:5000`

3. Deberas ver un mensaje indicando que el servidor esta corriendo en modo debug.

4. **Abrir en el navegador**: `http://localhost:5000`

### Uso de la interfaz web

El proyecto incluye una **interfaz web interactiva** que permite probar ambos endpoints de forma visual:

1. **Acceder a la pagina principal**: Abre `http://localhost:5000` en tu navegador.

2. **Seccion 1 - Frase al Azar**:
   - Haz clic en el boton "Obtener Frase"
   - Se mostrara una frase aleatoria de la lista predefinida
   - Puedes hacer clic multiples veces para obtener diferentes frases

3. **Seccion 2 - Mayor entre Dos Numeros**:
   - Ingresa un valor en el campo "Numero A" (por ejemplo: 10)
   - Ingresa un valor en el campo "Numero B" (por ejemplo: 7)
   - Haz clic en "Calcular Mayor"
   - Se mostrara cual es el numero mayor entre ambos
   - Acepta numeros enteros y decimales

### Uso de los endpoints (API REST)

**Endpoint 1: Frase al azar**

- **URL**: `http://localhost:5000/frase`
- **Metodo**: GET
- **Descripcion**: Devuelve una frase al azar de una lista predefinida.
- **Ejemplo de respuesta**:
  ```json
  {
    "frase": "Un desarrollador Flask nunca se pierde, porque siempre sabe en que route esta."
  }
  ```

**Endpoint 2: Mayor entre dos numeros**

- **URL**: `http://localhost:5000/max?a=10&b=7`
- **Metodo**: GET
- **Parametros**:
  - `a`: Numero (entero o decimal)
  - `b`: Numero (entero o decimal)
- **Descripcion**: Devuelve el mayor entre los dos numeros recibidos.
- **Ejemplo de respuesta**:
  ```json
  {
    "mayor": 10.0
  }
  ```
- **Ejemplo de error** (si faltan parametros):
  ```json
  {
    "error": "Parametros 'a' y 'b' requeridos (numericos)."
  }
  ```

## Estructura del proyecto

```
m11-rest-mini-server-flask/
├── app.py              # Archivo principal con el servidor Flask
├── requirements.txt    # Dependencias del proyecto
├── README.md          # Este archivo
├── .gitignore         # Archivos ignorados por Git
├── static/             # Archivos estaticos (CSS, JS)
│   ├── styles.css     # Estilos de la interfaz web
│   └── script.js      # Logica JavaScript para consumir la API
└── templates/          # Carpeta con plantillas HTML
    └── index.html     # Interfaz web del proyecto
```

## Notas tecnicas

- El servidor utiliza **Flask 3.1.0**, un microframework ligero para Python.
- Los endpoints estan implementados con decoradores `@app.get()` para simplicidad.
- El endpoint `/max` acepta parametros de tipo `float` permitiendo numeros decimales.
- El servidor corre en **modo debug** para facilitar el desarrollo y las pruebas.
- Se incluye validacion de parametros en el endpoint `/max` para evitar errores.
- La interfaz web utiliza **Fetch API** para consumir los endpoints de forma asincrona.
- El diseño es **responsive** y se adapta a diferentes tamaños de pantalla.

### Detener el servidor

Para detener el servidor, presionar `Ctrl + C` en la terminal donde esta corriendo.
