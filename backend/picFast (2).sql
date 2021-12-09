drop table Post;
drop table Pic_info;
drop table Photo_place;
drop table Camera;
drop table Comment;
drop table Model;
drop table Photographer;
drop table schedule;
drop table Users;

create table Users(
	ID	  varchar(20) not null,
	Password	  	  varchar(20) not null,
	Type	  varchar(20) not null,
	primary key(ID),
	check (Type in ('Model', 'Photographer')));

create table Schedule(
	ID 	 varchar(20) not null,
	Date	 varchar(100) not null,
	primary key	 (ID, Date),
	foreign key (Id) references Users
);

create table Model(
	Id 	varchar(20) not null,
	Name	 varchar(100) not null,
	Area 	varchar(100),
	Gender 	varchar(20),
	profile_img text, 
	primary key (Id),
	foreign key (Id) references Users,
	check (Gender in ('M', 'W', 'ETC')));

create table Photographer(
	Id 	varchar(20) not null,
	Name	 varchar(100) not null,
	Area 	varchar(100),
	Gender 	varchar(20),
	Career	 varchar(100), 
	profile_img text , 
	primary key(Id),
	foreign key (Id) references Users,
	check (Gender in ('M', 'W', 'ETC')));

create table Camera(
	Camera_id 	serial,
	Camera_name 	varchar(400) not null,
	manufacture	 varchar(400) ,
	primary key(Camera_id)
);

create table Comment(
	Comment_id	 serial,
	Commentor_id	 varchar(20) not null,
	Photographer_id	 varchar(20) not null,
	Rate 	 numeric(2,1) not null,
	Content	 text,
	primary key (Comment_id),
	foreign key	(Commentor_id) references Users(Id),
	foreign key	(Photographer_id) references Photographer (Id));

create table Photo_place(
	Place_id	 serial,
	Place_name  varchar(200) not null,
	post_num 	int,
	primary key	(Place_id)
);

create table Pic_info(
	Pic_info_id	 serial,
	Photographer_id	 varchar(20),
	Model_id		 varchar(20),
	Place_id		 int,
	Date		 varchar(40),
	Camera_id	 int,
	primary key (Pic_info_id),
	foreign key	(Photographer_id) references Photographer(Id),
	foreign key 	(Model_id) references Model(Id),
	foreign key	(Place_id) references Photo_place,
	foreign key	(Camera_id) references Camera);


create table Post(
	Post_id	 serial,
	Writer_id 	  varchar(20) not null,
	Title 	 varchar(400),
	Picture	 text not null,
	Pic_info_id	 int not null,
	Timestamp	 timestamp,
	primary key(Post_id),
	foreign key	(Writer_id) references Users (Id),
	foreign key	(Pic_info_id) references Pic_info);



insert into Users values ('so_odeng', '1234', 'Model');
insert into Users values ('char_kak', '1234', 'Photographer');
insert into Users values ('so_opic' , '0934' , 'Photographer');
insert into Users values ('za_won_e', '11111', 'Model');

insert into Model values ('so_odeng', '최소정', '서울/경기', 'W', 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbC4jC4%2FbtqXrDOb14u%2FEVG6YwpE64KnkutAL4uQg1%2Fimg.jpg');
insert into Photographer values ('char_kak', '차승민', '서울', 'M', '2020.10.04', 'https://blogpfthumb-phinf.pstatic.net/MjAyMTExMjlfMjQw/MDAxNjM4MTk0NjMxOTgy.3A4uzhzrb7lsHdAWy4v6uqS4rMLqMQ6Thd6AQiolHywg.JpmLxlHaZLUNLLOvlO6YEqvL_S457BZ49zAZMNvMbtAg.PNG.dominico1225/profileImage.png?type=w161');
insert into Photographer values ('so_opic', '최소정', '서울/경기', 'W', '2021.12.04', 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgxFBe%2FbtqXrCho5HQ%2FaRSEObOKe92YKiiguNaWr1%2Fimg.jpg');
insert into Model values ('za_won_e', '이정원', '서울/경기', 'M', 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fzywo2%2Fbtrnqy1emWO%2F1MeQZCUh0ymEkD81ut7Jlk%2Fimg.jpg');

insert into Photo_place values (DEFAULT, '올림픽 공원', 0);
insert into Photo_place values (DEFAULT, '하늘 공원', 0);
insert into Photo_place values (DEFAULT, '당진 우리집', 0);

insert into Photo_place values (DEFAULT, '고려대학교', 0);


insert into Camera values (DEFAULT, '카메라1', 'Cannon');
insert into Camera values (DEFAULT, 'GalaxyNote10', 'Samsung');
insert into Camera values (DEFAULT, 'Iphone11 pro', 'Apple');

insert into Pic_info values(DEFAULT, 'char_kak', 'so_odeng', 1, '2021.11.01.', 1);
update Photo_place set post_num = post_num + 1 where place_id=1;
insert into Pic_info values(DEFAULT, 'char_kak', 'so_odeng', 2, '2021.12.12.', 1);
update Photo_place set post_num = post_num + 1 where place_id=2;
insert into Pic_info values(DEFAULT, 'so_opic','so_odeng', 3, '2021.12.31.', 2);
update Photo_place set post_num = post_num + 1 where place_id=3;
insert into Pic_info values(DEFAULT, 'char_kak', 'za_won_e', 4, '2021.12.12.', 3);
update Photo_place set post_num = post_num + 1 where place_id=4;

insert into Post values (DEFAULT, 'char_kak', '달', 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdA4iuB%2FbtrnmORNZhn%2FjbIOjxctcf7TISPQFKEXlK%2Fimg.jpg', 1, CURRENT_TIMESTAMP);
insert into Post values (DEFAULT, 'so_odeng', '하늘공원에서', 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrfceZ%2Fbtrno3nmikp%2Fy9lHHX7lDClpODppsqIzB0%2Fimg.jpg', 2, CURRENT_TIMESTAMP);
insert into Post values (DEFAULT, 'so_opic', '2021 잘가', 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcH6Tz1%2FbtqB8mTqjPf%2F5Gk3KyyfZEaHaP8biny8N0%2Fimg.jpg', 3, CURRENT_TIMESTAMP);
insert into Post values (DEFAULT, 'char_kak', '고려대학교에서', 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwH4L0%2FbtrnpODeeuq%2FuBwbO44j8o02Ac9WTn9f80%2Fimg.jpg', 4, CURRENT_TIMESTAMP);


insert into comment values (DEFAULT, 'so_odeng', 'char_kak', 4.0, '하하하');
insert into comment values (DEFAULT, 'so_odeng', 'char_kak', 3.0, '하하하');

insert into schedule values ('so_odeng', '2021.11.01.');
insert into schedule values ('so_odeng', '2021.11.02.');
insert into schedule values ('char_kak', '2021.11.01.');