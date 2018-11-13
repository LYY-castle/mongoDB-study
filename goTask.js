var userName= 'lyy';
var timeStamp = Date.parse(new Date());
var jsonDatabase = {'loginUser':userName,'longinTime':timeStamp}
var db = connect('log')
print('demo print success')
