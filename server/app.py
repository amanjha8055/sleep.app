# app.py


from flask import Flask, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS = CORS(app, origins="*")


# pages routes
@app.route("/")
def index():
    return render_template("index.html")


# api routes
@app.route("/api/", methods=["GET"])
def api():
    return jsonify({"message": "api"})


if __name__ == "__main__":
    app.run(debug=True)
