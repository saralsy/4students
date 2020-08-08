def checkParam(json, paramName):
    # Possible optimizations
    # 1) Take in multiples params and check each
    # for one line validation of objects
    # 2) make objects able to easily export all of their properties

    return (json is not None and
        paramName in json and
        json[paramName] is not None)


# check multiple params/ keys all in one function
def checkParams(json, *argv):
    if json is None:
        return False

    for param in argv:
        print 'check param: ' + param
        if param not in json or json[param] is None:
            return False

    return True

ErrorCode_ServerError   =   500
ErrorCode_NotFound      =   404
ErrorCode_BadParams     =   400
ErrorCode_Success       =   200
ErrorCode_ObjectCreated =   201
