from flask import Flask, render_template
# 通过setting.py对应用进行一系列的设置，做到设置解耦
# import settings
# from apps.index.views import index_bp
# from flask_mongoengine import MongoEngine


app = Flask(__name__,
    static_folder='./dist/static/',
    template_folder='./dist/'
)

app.jinja_env.variable_start_string = '[['
app.jinja_env.variable_end_string = ']]'

# 通过配置文件进行配置
# app.config.from_object(settings.ProductionConfig)

'''
数据库设置
使用admin才能进行用户名和身份登录
需要加?authSource=admin
'''
# app.config['MONGODB_SETTINGS'] = {
#     "port": 27018,
#     'host': 'mongodb://Alley:qhyu1234@10.28.16.192:27018/test?authSource=admin'
# }
# db = MongoEngine(app)


'''
使用视图函数注册后就不用下面这个语句了
'''
@app.route('/')
def index():
    return render_template("index.html")


# 注册index的蓝图
# app.register_blueprint(index_bp)


@app.route("/download")
def download():
    return "this is download page"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5010, debug=True)
