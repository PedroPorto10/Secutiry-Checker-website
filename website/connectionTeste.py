from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
import bcrypt

app = Flask(__name__)

# Realizando a conexão com o banco de dados
conn = mysql.connector.connect(
    host='localhost',
    port='3307',
    user='root',
    password='',
    database='webdatadb'
)

# Declarando a rota responsável pelo funcionamento do método GET nos formularios
@app.route('/', methods=['GET'])
def home():
    return redirect(url_for('form'))

# Declarando a rota para puxar os dados do formulário 'signUp' através do método GET
@app.route('/signUp', methods=['GET'])
def form():
    return render_template('signUp.html')

# Declarando a rota para puxar os dados do formulário 'login' através do método GET
@app.route('/login', methods=['GET'])
def login():
    return render_template('login.html')

# Aqui começa o py para login
@app.route('/process_login', methods=['POST'])
def loginPage():
    username_login = request.form.get('username_login')
    password_login = request.form.get('password_login').encode('utf-8')
    
    cursor = conn.cursor()
    
    if username_login and password_login:
        select = 'SELECT usr_pswd FROM user_data WHERE usr_name = %s'
        cursor.execute(select, (username_login,))
        result = cursor.fetchone()
        
        if result and bcrypt.checkpw(password_login, result[0].encode('utf-8')):
            cursor.close()
            return render_template('site.html')
        else:
            cursor.close()
            return render_template('login.html')
    return render_template('login.html')

# Aqui começa o py para signup
@app.route('/process_signUp', methods=['POST'])
def process_form():
    if request.method == 'POST':
        username_signup = request.form.get('username_signup')
        password_signup = request.form.get('password_signup').encode('utf-8')
        
        cursor = conn.cursor()

        if username_signup and password_signup:
            check_user = 'SELECT * FROM user_data WHERE usr_name = %s'
            cursor.execute(check_user, (username_signup,))
            result = cursor.fetchone()
            
            if result is None:
                salt = bcrypt.gensalt()
                hashed_password = bcrypt.hashpw(password_signup, salt)
                insert = 'INSERT INTO user_data (usr_name, usr_pswd) VALUES (%s, %s)'
                cursor.execute(insert, (username_signup, hashed_password))
                conn.commit()
                cursor.close()
                return render_template('site.html')
            else:
                cursor.close()
                return render_template('site.html')

    return redirect(url_for('form'))

if __name__ == "__main__":
    app.run(debug=True)
