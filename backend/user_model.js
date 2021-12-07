const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "picfast_db",
  password: "root",
  port: 5432,
});

const getPosts = () => {
  return new Promise(function (resolve, reject) {
    pool.query(`select post_id, writer_id, title, P.content, picture, P.timestamp, pic_info.date,
    model.id as m_id, model.name as m_name, model.area as m_area, model.gender as m_gender, model.profile_img as m_img,
    photographer.id as p_id, photographer.name as p_name, photographer.area as p_area, photographer.career as p_career, photographer.profile_img as p_img,
    photo_place.place_name, camera.camera_name
    from post as P natural join pic_info 
    inner join model on pic_info.model_id=model.id 
    inner join photographer on pic_info.photographer_id = photographer.id
    inner join photo_place using (place_id)
    inner join camera using (camera_id)`, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

const getRate = (user_id) =>{
  return new Promise(function (resolve, reject){
    pool.query(`select avg(rate) as total_rate
    from comment 
    where (
       comment.photographer_id = $1
    )
    `,[user_id],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
};

const getPostNum = (user_id) =>{
  return new Promise(function (resolve, reject){
    pool.query(`select count(post_id) as post_num
    from post 
    where (
       post.writer_id = $1
    )
    `,[user_id],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
};

const getMyPost = (user_id) => {
  return new Promise(function (resolve, reject){
    pool.query(`select post_id, picture
    from post 
    where (
       post.writer_id = $1
    )
    `,[user_id],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
}

const getMyPosts = (user_id) => {
  return new Promise(function (resolve, reject){
    pool.query(`select post_id, writer_id, title, P.content, picture, P.timestamp, pic_info.date,
    model.id as m_id, model.name as m_name, model.area as m_area, model.gender as m_gender, model.profile_img as m_img,
    photographer.id as p_id, photographer.name as p_name, photographer.area as p_area, photographer.career as p_career, photographer.profile_img as p_img,
    photo_place.place_name, camera.camera_name
    from post as P natural join pic_info 
    inner join model on pic_info.model_id=model.id 
    inner join photographer on pic_info.photographer_id = photographer.id
    inner join photo_place using (place_id)
    inner join camera using (camera_id)
    where post_id = $1
    `,[user_id],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
}

const getMyProfile = (user_id) => {
  return new Promise(function (resolve, reject){
    pool.query(`select id, name, area, profile_img, career, type
    from (model natural full outer join photographer) join users using (id)
    where (users.id = $1)
    `,[user_id],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
}

const getType = (user_id) => {
  return new Promise(function (resolve, reject){
    pool.query(`select type
    from users
    where users.id = $1
    `,[user_id],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
}

const getComments = (user_id) => {
  return new Promise(function (resolve, reject){
    pool.query(`select *
    from comment
    where(
       photographer_id = $1
    )
    `,[user_id],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
}

const getProfile_by_date = (date) => {
  return new Promise(function (resolve, reject){
    pool.query(`select id, name, area, profile_img, career, gender, type
    from (model natural full outer join photographer) join schedule using (id) join users using (id)
    where (schedule.date = $1)
    `,[date],(error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    })
  });
}

const getHotplace = () => {
  return new Promise(function (resolve, reject) {
    pool.query(`select *
    from photo_place
    order by post_num desc`, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = {
  getPosts, getRate, getPostNum, getMyPost, getMyPosts, getMyProfile, getType, getComments, getProfile_by_date, getHotplace
};
