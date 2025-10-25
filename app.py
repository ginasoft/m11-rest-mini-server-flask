from flask import Flask, request, jsonify, render_template
import random

app = Flask(__name__)

FRASES = [
    "Un desarrollador Flask nunca se pierde, porque siempre sabe en qué route está.",
    "Cuando un Pythonista tiene frío, importa flask y se sirve un hot reload.",
    "Flask rompió Django, porque dijo que su relación era demasiado estructurada.",
    "Los programadores de Flask no hacen ejercicio, porque prefieren quedarse en su debug mode.",
    "Cuando un servidor Flask se siente solo, llama a sus endpoints para tener un poco de conexión."
]

@app.get("/")
def index():
    """Ruta principal que muestra la interfaz web."""
    return render_template("index.html")

@app.get("/frase")
def frase_azar():
    """Devuelve una frase al azar desde una lista predefinida."""
    return jsonify({"frase": random.choice(FRASES)})

@app.get("/max")
def mayor():
    """
    Recibe dos parámetros numéricos (a y b) por querystring y
    devuelve el mayor entre ambos. Ej: /max?a=10&b=7
    """
    a = request.args.get("a", type=float)
    b = request.args.get("b", type=float)
    if a is None or b is None:
        return jsonify({"error": "Parámetros 'a' y 'b' requeridos (numéricos)."}), 400
    return jsonify({"mayor": max(a, b)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
