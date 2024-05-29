import mysql.connector

username = "Ana"
password = "senhaAna"


conn = mysql.connector.connect(
    host='localhost',
    port='3307',
    user='root',
    password='',
    database='teste'
)

cursor = conn.cursor()

insert = f'INSERT INTO info (nome, senha) VALUES ("{username}", "{password}")'

cursor.execute(insert)
resultado1 = cursor.fetchall()
for linha in resultado1:
    print(linha)
    
select = 'SELECT * FROM INFO'

cursor.execute(select)
resultado2 = cursor.fetchall()
for linha in resultado2:
    print(linha)

conn.commit()

cursor.close()
conn.close()
