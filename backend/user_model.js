const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'picfast_db',
  password: 'root',
  port: 5432,
});

const getPosts = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select post_id, writer_id, title, picture, P.timestamp, pic_info.date,
    model.id as m_id, model.name as m_name, model.area as m_area, model.gender as m_gender, model.profile_img as m_img,
    photographer.id as p_id, photographer.name as p_name, photographer.area as p_area, photographer.career as p_career, photographer.profile_img as p_img,
    photo_place.place_name, camera.camera_name
    from post as P natural join pic_info 
    inner join model on pic_info.model_id=model.id 
    inner join photographer on pic_info.photographer_id = photographer.id
    inner join photo_place using (place_id)
    inner join camera using (camera_id) order by timestamp desc`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getRate = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select avg(rate) as total_rate
    from comment 
    where (
       comment.photographer_id = $1
    )
    `,
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getPostNum = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select count(post_id) as post_num
    from post 
    where (
       post.writer_id = $1
    )
    `,
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getMyPost = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select post_id, picture
    from post 
    where (
       post.writer_id = $1
    ) order by timestamp desc
    `,
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getMyPosts = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select post_id, writer_id, title, picture, P.timestamp, pic_info.date,
    model.id as m_id, model.name as m_name, model.area as m_area, model.gender as m_gender, model.profile_img as m_img,
    photographer.id as p_id, photographer.name as p_name, photographer.area as p_area, photographer.career as p_career, photographer.profile_img as p_img,
    photo_place.place_name, camera.camera_name
    from post as P natural join pic_info 
    inner join model on pic_info.model_id=model.id 
    inner join photographer on pic_info.photographer_id = photographer.id
    inner join photo_place using (place_id)
    inner join camera using (camera_id)
    where post_id = $1 
    `,
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getMyProfile = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select id, name, area, profile_img, career, type
    from (model natural full outer join photographer) join users using (id)
    where (users.id = $1)
    `,
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getType = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select type
    from users
    where users.id = $1
    `,
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getComments = (user_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select *
    from comment
    where(
       photographer_id = $1
    )
    `,
      [user_id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getProfile_by_date = (date) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select id, name, area, profile_img, career, gender, type
    from (model natural full outer join photographer) join schedule using (id) join users using (id)
    where (schedule.date = $1)
    `,
      [date],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getHotplace = () => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `select *
    from photo_place
    order by post_num desc`,
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const checkCamera = (body) => {
  return new Promise(function (resolve, reject) {
    const { camera, manu } = body;
    pool.query(
      `select camera_id from camera where Camera_name = $1 and manufacture = $2`,
      [camera, manu],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const postCamera = (body) => {
  return new Promise(function (resolve, reject) {
    const { camera, manu } = body;
    pool.query(
      `insert into Camera values (DEFAULT, $1, $2) returning camera_id`,
      [camera, manu],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const checkPlace = (body) => {
  return new Promise(function (resolve, reject) {
    const { place } = body;
    pool.query(
      `select place_id from photo_place where place_name = $1`,
      [place],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const postPlace = (body) => {
  return new Promise(function (resolve, reject) {
    const { place } = body;
    pool.query(
      `insert into photo_place values (DEFAULT, $1, 0)`,
      [place],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve('place inserted');
      }
    );
  });
};

const checkPicInfo = (body) => {
  return new Promise(function (resolve, reject) {
    const { photographer, model, place, camera, manu, date } = body;
    pool.query(
      `with c_id_table as(
        select camera_id as c_id from camera where Camera_name = $1 and manufacture = $2
      ),
      p_id_table as(
         select place_id as p_id from photo_place where place_name = $3
      )
      select pic_info_id as i_id from pic_info, c_id_table, p_id_table where photographer_id = $4 and model_id = $5 and place_id=p_id and date = $6 and camera_id = c_id
      `,
      [camera, manu, place, photographer, model, date],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const postPicInfo = (body) => {
  return new Promise(function (resolve, reject) {
    const { photographer, model, place, camera, manu, date } = body;
    pool.query(
      `with c_id_table as(
        select camera_id as c_id from camera where Camera_name = $1 and manufacture = $2
     ),
     p_id_table as(
         select place_id as p_id from photo_place where place_name = $3
     )
     insert into Pic_info (photographer_id, model_id, place_id, date, camera_id)
     select $4, $5, p_id, $6, c_id
     from c_id_table, p_id_table returning pic_info_id`,
      [camera, manu, place, photographer, model, date],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const inserPost = (body) => {
  return new Promise(function (resolve, reject) {
    const { title, pic, data } = body;
    pool.query(
      `insert into Post values (DEFAULT, 'char_kak', $1, $2, $3, CURRENT_TIMESTAMP)`,
      [title, pic, data],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve('post inserted!');
      }
    );
  });
};

const updatePlaces = (body) => {
  return new Promise(function (resolve, reject) {
    const { place } = body;
    pool.query(
      `with p_id_table as(
        select place_id as p_id from photo_place where place_name = $1
      )
      update Photo_place set post_num = post_num + 1 from p_id_table where place_id=p_id`,
      [place],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve('all inserted!');
      }
    );
  });
};

const deletePost = (post_id) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `delete from post
      where post_id = $1`,
      [post_id],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const deletePlace = (place_name) => {
  return new Promise(function (resolve, reject) {
    pool.query(
      `
      with p_id_table as(
        select place_id as p_id from photo_place where place_name = $1
      )
      update Photo_place set post_num = post_num - 1 from p_id_table where place_id=p_id`,
      [place_name],
      (error, results) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

const getProfile_by_id = (id) => {
  const realid = id + '%';
  return new Promise(function (resolve, reject) {
    pool.query(
      `select id, profile_img from (model natural full outer join photographer) join users using (id)
      where id like $1`,
      [realid],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }
    );
  });
};

module.exports = {
  getPosts,
  getRate,
  getPostNum,
  getMyPost,
  getMyPosts,
  getMyProfile,
  getType,
  getComments,
  getProfile_by_date,
  getHotplace,
  checkCamera,
  postCamera,
  checkPlace,
  postPlace,
  checkPicInfo,
  postPicInfo,
  inserPost,
  updatePlaces,
  deletePost,
  deletePlace,
  getProfile_by_id,
};
