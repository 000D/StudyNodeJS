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

//12.��nameΪHtml5���ĵ��У����һ���µĺ��Ŀγ� "΢��С����"
//$push ���������������һ���µ�Ԫ��
//$addToSet �����������һ����Ԫ�� �� ����������Ѿ������˸�Ԫ�أ��򲻻����
db.colleges.update({name:"Html5"},{$push:{"hobby.core":"΢��С����"}});
db.colleges.update({name:"Html5"},{$addToSet:{"hobby.core":"΢��С����"}});
db.colleges.find();

//13.��nameΪHtml5���ĵ��У�ɾ�������γ�"abc"
db.colleges.remove({"classes.base":"abc"});

//14.ɾ��user����
db.colleges.remove({});
db.colleges.drop();

show dbs;

//15.�򼯺����в���10000���ĵ� 7.2s
for(var i=1 ; i<=10000 ; i++){
    db.demos.insert({counter:i});
}

db.demos.find()

db.demos.remove({});


//0.4s
var arr = [];

for(var i=1 ; i<=10000 ; i++){
    arr.push({counter:i});
}

db.demos.insert(arr);

//16.��ѯdemos��counterΪ666���ĵ�
db.demos.find({counter:666})

//17.��ѯdemos��counterС��666���ĵ�
db.demos.find({counter:{$lt:666}});

//18.��ѯdemos��counter����666���ĵ�
db.demos.find({counter:{$gt:666}});

//19.��ѯdemos��counter����66С��666���ĵ�
db.demos.find({counter:{$gt:66 , $lt:666}});

//20.�鿴demos�����е�ǰ10������
db.demos.find({counter:{$lte:10}});

//limit()������ʾ���ݵ�����
db.demos.find().limit(10);
//�ڿ���ʱ�����Ǿ��Բ���ִ�в��������Ĳ�ѯ
db.demos.find();

//21.�鿴demos�����еĵ�11����20������
/*
    ��ҳ ÿҳ��ʾ10��
        1-10     0
        11-20    10
        21-30    20
        ������
        
        skip((ҳ��-1) * ÿҳ��ʾ������).limit(ÿҳ��ʾ������);
        
    skip()��������ָ������������    
    
    MongoDB���Զ�����skip��limit��λ��
*/
db.demos.find().skip(10).limit(10);

//22.�鿴demos�����еĵ�21����30������
db.demos.find().skip(20).limit(10);

db.demos.find().limit(10).skip(10);







