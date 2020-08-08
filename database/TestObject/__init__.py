from sqlalchemy import Column, Integer
from database import Base, db_session
from random import randint

class TestObject(Base):

    params = ['id', 'test_attribute']

    __tablename__ = "TestObject"

    id = Column(Integer, primary_key=True, nullable=False, unique=True)
    test_attribute = Column(Integer, primary_key=False, nullable=True)

    def __init__(self, test_attribute):
        
        self.test_attribute = test_attribute

        # set the id of the object to a random value
        # using a range unlikely to collide with other ids
        self.id = randint(0, 1000000)

    def __repr__(self):
        return '[TestObject %r]' %self.id

    def __iter__(self):
        for param in self.params:
            yield param, getattr(self, param)

    def __getitem__(self, item):
        object_as_dict = dict(self)
        if item in object_as_dict:
            return object_as_dict[item]
        return None

def isValidTestObject(obj_id):
    try:
        return TestObject.query.filter(TestObject.id==obj_id).one_or_none() is not None
    except Exception:
        return False

def createTestObject(obj):
    if not isValidTestObject(obj.id):
        db_session.add(obj)
        db_session.commit()
        return obj
    return dict() # an empty dict in case you are using **{} on this function's output

def readTestObject(queries):
    attr = val = ""
    try:
        filter_list = []
        for attr, val in queries.items():
            filter_list.append(getattr(TestObject, attr) == str(val))
        TestObject_list = TestObject.query.filter(*filter_list).all()
        return TestObject_list
    except Exception as e:
        print("An exception occurred with the following details:\n{}".format(str(e)))
        print("Attribute: {}\tValue: {}\n".format(attr, val))
        return None    

def updateTestObject(obj_id, **kwargs):
    if not isValidTestObject(obj_id):
        return False

    retrieved_object = readTestObject({"id":obj_id})

    for key, value in kwargs.items():
        if key in TestObject.params:
            
            if key == 'test_attribute':
                retrieved_object.test_attribute = value

    db_session.commit()
    return True

def deleteTestObject(obj_id):
    if not isValidTestObject(obj_id):
        return False

    retrieved_object = readTestObject({"id":obj_id})

    db_session.delete(retrieved_object)
    db_session.commit()
    return True

