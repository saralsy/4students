from flask import Flask
from server.TestObject import blueprint_TestObject
from server import pages

app = Flask(__name__)

if __name__ == "__main__":
    SERVER_ROOT = "127.0.0.1"
    app.debug = True

    # Register all the routes to the app
    app.register_blueprint(pages)
    app.register_blueprint(blueprint_TestObject)
    
    # Startup the connection to the database
    from database import init_db
    init_db()

    # Begin the actual application, serving it at this port number
    app.run(host=SERVER_ROOT, port=3407)

