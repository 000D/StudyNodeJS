//1.����������it_666���ݿ�
use it_666

//2.�����ݿ��colleges�����в��������ĵ�(Html5, Java, Python, ������, K12, <PHP, "��������õı������">)  
db.colleges.insert(
   { name:"html5"},
   { name:"java"},
   { name:"python"},
   { name:"������"},
   { name:"K12"},
   { name:"PHP", intro:"��������õı������"}
);

//3.��ѯcolleges�����е��ĵ�
db.colleges.find();

//4.�����ݿ��colleges�����в���һ���ĵ�(Golang)   
db.colleges.insert({
    name:"Golang"
});
   
//5.ͳ�����ݿ�colleges�����е��ĵ�����
db.colleges.find().count();

//6.��ѯ���ݿ�colleges������nameΪHtml5���ĵ�
db.colleges.find({name:"Html5"});

//7.�����ݿ�colleges�����е�nameΪHtml5���ĵ������һ��intro���ԣ�����ֵΪ"��ͨȫջ�ζ�����!"
db.colleges.update({name:"Html5"},{$intro:{address:"��ͨȫջ�ζ�����!"}});

//8.ʹ��{name:"������"} �滻 name Ϊ "K12"���ĵ�
db.colleges.replaceOne({name:"K12"},{username:"������"});    
    
//9.ɾ��nameΪPHP���ĵ���intro����
db.colleges.update({name:"PHP"},{$unset:{intro:"��������õı������"}});


//10.��nameΪHtml5���ĵ��У����һ��classes:{base:["h5+c3","js","jQuery", "abc"] , core:["������","node.js"]}
//MongoDB���ĵ�������ֵҲ������һ���ĵ�����һ���ĵ�������ֵ��һ���ĵ�ʱ�����ǳ�����ĵ����� ��Ƕ�ĵ�
db.colleges.update({name:"Html5"},{$set:classes:{base:["h5+c3","js","jQuery", "abc"], core:["������","node.js"]}}});
db.colleges.find();

//11.��ѯ�к��Ŀγ�Ϊ ������ ���ĵ�
//MongoDB֧��ֱ��ͨ����Ƕ�ĵ������Խ��в�ѯ�����Ҫ��ѯ��Ƕ�ĵ������ͨ��.����ʽ��ƥ��
//���Ҫͨ����Ƕ�ĵ������ĵ����в�ѯ����ʱ����������ʹ������ 
db.colleges.find({'classes.core':"������"});

//14.��nameΪHtml5���ĵ��У����һ���µĺ��Ŀγ� "΢��С����"
//$push ���������������һ���µ�Ԫ��
//$addToSet �����������һ����Ԫ�� �� ����������Ѿ������˸�Ԫ�أ��򲻻����
db.colleges.update({name:"Html5"},{$push:{"hobby.core":"΢��С����"}});
db.colleges.update({name:"Html5"},{$addToSet:{"hobby.core":"΢��С����"}});
db.colleges.find();

//15.��nameΪHtml5���ĵ��У�ɾ�������γ�"abc"
db.colleges.remove({"classes.base":"abc"});

//16.ɾ��user����
db.colleges.remove({});
db.colleges.drop();

show dbs;

//17.�򼯺����в���10000���ĵ� 7.2s
for(var i=1 ; i<=10000 ; i++){
    db.demos.insert({num:i});
}

db.demos.find()

db.demos.remove({});


//0.4s
var arr = [];

for(var i=1 ; i<=10000 ; i++){
    arr.push({num:i});
}

db.demos.insert(arr);



