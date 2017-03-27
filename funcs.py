
import requests, json
from urllib import urlencode

def get_token(client_id='GfR3VcXrQiVDNs4b89i0htdi', client_secret='5898ee86ff302904a60fa58e6ef26be8'):
	url = 'https://openapi.baidu.com/oauth/2.0/token'
	grant_type = 'client_credentials'
	params = {
		'grant_type': grant_type,
		'client_id': client_id,
		'client_secret': client_secret
	}
	res = requests.post(url, params=params)
	data = json.loads(res.text)
	print 'access_token:', data['access_token']
	return data['access_token']

def text_to_audio(text=''):
	url = 'http://tsn.baidu.com/text2audio'
	token = get_token()
	params = {
		'tex': text,
		'lan': 'zh',
		'tok': token,
		'ctp': 1,	#客户端类型选择， web 端填写 1
		'cuid': 'mac_or_imei',	#用户唯一标识，用来区分用户， web 端参考填写机器 mac地址或 imei 码，长度为 60 以内
		'spd': 5,	#语速，取值 0-9，默认为 5
		'pit': 5,	#音调，取值 0-9，默认为 5
		'vol': 5,	#音量，取值 0-9，默认为 5
		'per': 0,	#发音人选择，取值 0-1 ； 0 为女声， 1 为男声，默认为女声
	}
	res = requests.post(url, params=urlencode(params))	
	print res.text
