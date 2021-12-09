const express = require('express');
const app = express();
const port = 3001;

const user_models = require('./user_model');

app.use(express.json({ limit: '50mb' }));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  );
  next();
});

app.get('/', (req, res) => {
  user_models
    .getPosts()
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/rate/:user_id', (req, res) => {
  user_models
    .getRate(req.params.user_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/post_num/:user_id', (req, res) => {
  user_models
    .getPostNum(req.params.user_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/my_post/:user_id', (req, res) => {
  user_models
    .getMyPost(req.params.user_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/post/:post_id', (req, res) => {
  user_models
    .getMyPosts(req.params.post_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/profile/:user_id', (req, res) => {
  user_models
    .getMyProfile(req.params.user_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/type/:user_id', (req, res) => {
  user_models
    .getType(req.params.user_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/review/:user_id', (req, res) => {
  user_models
    .getComments(req.params.user_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/reserve/:date', (req, res) => {
  user_models
    .getProfile_by_date(req.params.date)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/place', (req, res) => {
  user_models
    .getHotplace()
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/create/init', (req, res) => {
  user_models
    .checkCamera(req.body)
    .then((response) => {
      if (!response['rows'][0]) {
        console.log('line 134');
        return user_models
          .postCamera(req.body)
          .then((res) => {
            return res;
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      } else return response;
    })
    .then(() => {
      user_models.checkPlace(req.body).then((response) => {
        if (!response['rows'][0]) {
          console.log('line 146');
          return user_models
            .postPlace(req.body)
            .then((res) => {
              return res;
            })
            .catch((error) => {
              res.status(500).send(error);
            });
        } else return response;
      });
    })
    .then((response) => {
      res.status(200).send('successfully init!');
    })
    .catch((error) => {
      console.log('line 161');
      console.log(error);
      res.status(500).send(error);
    });
});

app.post('/create/pictureinfo', (req, res) => {
  user_models
    .checkPicInfo(req.body)
    .then((response) => {
      console.log('line 170');
      if (!response['rows'][0]) {
        console.log('line 172');
        return user_models
          .postPicInfo(req.body)
          .then((res) => {
            return res;
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      } else return response;
    })
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/create/post', (req, res) => {
  user_models
    .inserPost(req.body)
    .then(() => {
      return user_models.updatePlaces(req.body).then((response) => {
        return response;
      });
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete('/delete/:post_id/:place_name', (req, res) => {
  user_models
    .deletePost(req.params.post_id)
    .then(() => {
      return user_models.deletePlace(req.params.place_name).then((res) => {
        return res;
      });
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/searchuser/:user_id', (req, res) => {
  user_models
    .getProfile_by_id(req.params.user_id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post('/post/reserve', (req, res) => {
  user_models
    .postReserve(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/get/reserved/:id', (req, res) => {
  user_models
    .getReserveDate(req.params.id)
    .then((response) => {
      res.status(200).send(response['rows']);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.delete('/delete/date/:id/:date', (req, res) => {
  user_models
    .deleteDate(req.params)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
