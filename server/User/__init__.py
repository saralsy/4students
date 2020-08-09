from flask import Flask, jsonify, request, Blueprint
from database.User import *
from server.Kit import *
from config import tokenCheck

blueprint_user = Blueprint('blueprint_user', __name__)


@blueprint_user.route("/createUser", methods=['POST'])
def create_user_route():
    data = request.get_json()

    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message': 'Unsupported App'}), ErrorCode_BadParams

    # the id parameter does not need checking on object creation
    params_on_create = list(User.params)  # create a copy
    try:
        params_on_create.remove('id')
    except ValueError:
        pass
    if not checkParams(data, *params_on_create):
        return jsonify(**{'message': 'Bad Params'}), ErrorCode_BadParams

    new_user = User(data['username'],data['password'],data['first_name'],data['last_name'])

    user = create_user(new_user)

    if user is None:
        return jsonify(**{'message': 'Bad Params'}), ErrorCode_ServerError
    return jsonify(**dict(user)), ErrorCode_Success


@blueprint_user.route("/readUser", methods=['POST'])
def read_user_route():
    data = request.get_json()

    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message': 'Unsupported App'}), ErrorCode_BadParams

    if not checkParam(data, 'filters'):
        return jsonify(**{'message': 'Bad Params'}), ErrorCode_BadParams

    user_list = read_user(data['filters'])
    if user_list is None or not user_list:
        return jsonify(**{'User': ''}), ErrorCode_NotFound

    user_list_to_json = []
    try:
        for user in user_list:
            print(dict(user))
            user_list_to_json.append(dict(user))
        return jsonify(**{'User': user_list_to_json}), ErrorCode_Success
    except Exception as e:
        if e.__class__.__name__ in ('ValueError', 'TypeError'):
            return jsonify(**{'User': dict(user_list)}), ErrorCode_Success
        else:
            print("An exception has occurred!\n{}".format(str(e)))
            return jsonify(**{'message': '{}'.format(str(e))}), ErrorCode_ServerError


@blueprint_user.route("/updateUser", methods=['POST'])
def update_user_route():
    data = request.get_json()
    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message': 'Unsupported App'}), ErrorCode_BadParams

    if not checkParam(data, 'id'):
        return jsonify(**{'message': 'Bad Params'}), ErrorCode_BadParams

    if not (update_user(int(data['id']), data['filters'])):
        return jsonify(**{'message': 'Bad object id'}), ErrorCode_NotFound
    return jsonify(**{'filters': data['filters']}), ErrorCode_Success


@blueprint_user.route("/deleteUser", methods=['POST'])
def delete_user_route():
    data = request.get_json()
    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message': 'Unsupported App'}), ErrorCode_BadParams

    if not checkParam(data, 'id'):
        return jsonify(**{'message': 'Bad Params'}), ErrorCode_BadParams

    if not (delete_user(int(data['id']))):
        return jsonify(**{'message': 'Bad object id'}), ErrorCode_NotFound
    return jsonify(**{'id': data['id']}), ErrorCode_Success


if __name__ == "__main__":
    SERVER_ROOT = "127.0.0.1"
    app = Flask(__name__)
    app.debug = True
    app.register_blueprint(blueprint_user)
    app.run(port=3407)

