from . import db
# from sqlalchemy import func

class Usuario(db.Model):
    __tablename__ = 'usuario'
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    nome = db.Column(db.String(150))
    data_nascimento = db.Column(db.DateTime)
    sexo = db.Column(db.String(10))
    email = db.Column(db.String(150))
    telefone = db.Column(db.String(150))
    senha = db.Column(db.String(150))