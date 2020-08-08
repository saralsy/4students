from sqlalchemy import Column, Integer, String
from database import Base, db_session
from random import randint

class User(Base):
    params = ['id','username','password','first_name','last_name']

    __tablename__ = 'User'

    id = Column(Integer, primary_key=True, nullable=False, unique=True)
    username = Column(String(20), primary_key=False, nullable=False, unique=True)
    password = Column(String(20), primary_key=False, nullable=False)
    first_name = Column(String(20), primary_key=False, nullable=False)
    last_name = Column(String(20), primary_key=False)

    def __init__(self, username, password, first_name, last_name):
        self.username = username
        self.password = password
        self.first_name = first_name
        self.last_name = last_name

        self.id = randint(0, 1000000)

    def __repr__(self):
        return '[TestObject %r]' % self.id

    def __iter__(self):
        for param in self.params:
            yield param, getattr(self, param)

    def __getitem__(self, item):
        obj_to_dict = dict(self)
        if item in obj_to_dict:
            return obj_to_dict[item]
        return None


def is_valid_user(user_id):
    try:
        return User.query.filter(User.id == user_id).one_or_none() is not None
    except Exception as e:
        print("An exception occurred with the following details:\n{}".format(str(e)))
    return False


def create_user(user):
    if not is_valid_user(user.id):
        db_session.add(user)
        db_session.commit()
        return user
    return dict()  # an empty dict in case you are using **{} on this function's output


def read_user(queries):
    attr = val = ""
    try:
        filter_list = []
        for attr, val in queries.items():
            filter_list.append(getattr(User, attr) == str(val))
        user_list = User.query.filter(*filter_list).all()
        return user_list
    except Exception as e:
        print("An exception occurred with the following details:\n{}".format(str(e)))
        print("Attribute: {}\tValue: {}\n".format(attr, val))
    return None


def update_user(user_id, update_dict):
    try:
        if not is_valid_user(user_id):
            return False
        user = read_user({"id": user_id})[0]
        for key,val in update_dict.items():
            setattr(user, key, val)
        db_session.commit()
        return True
    except Exception as e:
        print('An Exception occurred with the following details:\n{}'.format(str(e)))
    return False


def delete_user(user_id):
    try:
        if not is_valid_user(user_id):
            return False
        user = read_user({"id": user_id})[0]
        db_session.delete(user)
        db_session.commit()
        return True
    except Exception as e:
        print('An Exception occurred with the following details:\n{}'.format(str(e)))
    return False
