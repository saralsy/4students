from flask import Flask, jsonify, request, Blueprint
from database.TestObject import *
from server.Kit import *
from config import tokenCheck

blueprint_TestObject = Blueprint('blueprint_TestObject', __name__)

@blueprint_TestObject.route("/createTestObject", methods = ['POST'])
def createTestObjectRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams


    # the id parameter does not need checking on object creation
    params_on_create = list(TestObject.params) # create a copy
    try:
        params_on_create.remove('id')
    except ValueError:
        pass
    if not checkParams(data, *params_on_create):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    newTestObject = TestObject(data['test_attribute'])

    newTestObject = createTestObject(newTestObject)

    if newTestObject is None:
        return jsonify(**{'message':'Bad Params'}), ErrorCode_ServerError
    return jsonify(**dict(newTestObject)), ErrorCode_Success


@blueprint_TestObject.route("/readTestObject", methods = ['POST'])
def readTestObjectRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams

    
    if not checkParam(data, 'filters'):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    retrieved_TestObject_list = readTestObject(data['filters'])
    if retrieved_TestObject_list is None:
        return jsonify(**{'TestObject':''}), ErrorCode_NotFound
    
    TestObject_json_list = []
    try:
        for TestObject in retrieved_TestObject_list:
            print(dict(TestObject))
            TestObject_json_list.append(dict(TestObject))
        return jsonify(**{'TestObject':TestObject_json_list}), ErrorCode_Success
    except Exception as e:
        if e.__class__.__name__ in ('ValueError', 'TypeError'):
            return jsonify(**{'TestObject':dict(retrieved_TestObject_list)}), ErrorCode_Success
        else:
            print("An exception has occurred!\n{}".format(str(e)))
            return jsonify(**{'message': '{}'.format(str(e))}), ErrorCode_ServerError


@blueprint_TestObject.route("/updateTestObject", methods = ['POST'])
def updateTestObjectRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams


    if not checkParam(data, 'id'):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    if not (updateTestObject(int(data['id']), **data)):
        return jsonify(**{'message':'Bad object id'}), ErrorCode_NotFound
    return jsonify(**{}), ErrorCode_Success


@blueprint_TestObject.route("/deleteTestObject", methods = ['POST'])
def deleteTestObjectRoute():
    data = request.get_json()

    
    if not checkParam(data, 'appToken') or not tokenCheck(data['appToken']):
        return jsonify(**{'message':'Unsupported App'}), ErrorCode_BadParams


    if not checkParam(data, 'id'):
        return jsonify(**{'message':'Bad Params'}), ErrorCode_BadParams

    if not (deleteTestObject(int(data['id']))):
        return jsonify(**{'message':'Bad object id'}), ErrorCode_NotFound
    return jsonify(**{}), ErrorCode_Success


if __name__ == "__main__":
    SERVER_ROOT = "127.0.0.1"
    app = Flask(__name__)
    app.debug = True
    app.register_blueprint(blueprint_TestObject)
    app.run(port=3407)

