var comic = require('../models/comic');
//var customHandlers=require('./custom_handlers');
var sea = require('../models/season');
var ser = require('../models/series');
var user = require('../models/user');
// var Promise = require("bluebird");

exports.postcomic = function(req, res) {
  var x1 = new comic({
    name: req.body.name,
    story: req.body.story,
    image: req.body.image,
    season_id: req.body.season_id,
    starts_on: req.body.starts_on,
    ends_on: req.body.ends_on,
    comments: req.body.comments,
    created_at: new Date(),
    updated_at: ""


  });
  x1.save(function(err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json({
      success: true,
      body: response
    })
  });
};


exports.getcomic = function(req, res) {
  comic.find({}, function(err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
}

exports.deletecomic = function(req, res) {

  comic.findOne({}, function(err, user) {
    if (err) {
      res.json(err);
    }

    if (comic) {
      comic.remove({}, function(err) {
        if (err) {
          res.json(err);
        }

        res.json("success");
      })
    } else {
      res.json("User doesnt exist");
    }

  })
}

exports.postsea = function(req, res) {
  var x2 = new sea({
    name: req.body.name,
    desc: req.body.desc,
    series_id: req.body.series_id,
    starts_on: req.body.starts_on,
    ends_on: req.body.ends_on,
    created_at: Date.now(),
    updated_at: "",

  });
  x2.save(function(err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json({
      success: true,
      body: response
    })
  });
};
exports.getsea = function(req, res) {
  sea.find({}, function(err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
}

exports.deletesea = function(req, res) {

  sea.findOne({}, function(err, user) {
    if (err) {
      res.json(err);
    }

    if (sea) {
      sea.remove({}, function(err) {
        if (err) {
          res.json(err);
        }

        res.json("success");
      })
    } else {
      res.json("User doesnt exist");
    }

  })
}

exports.postser = function(req, res) {
  var x3 = new ser({
    name: req.body.name,
    desc: req.body.desc,

    series_id: req.body.series_id,

    created_by: req.body.created_by,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
  });
  x3.save(function(err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json({
      success: true,
      body: response
    })
  });
};

exports.getser = function(req, res) {
  ser.find({}, function(err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
}

exports.deleteser = function(req, res) {

  ser.findOne({}, function(err, user) {
    if (err) {
      res.json(err);
    }

    if (ser) {
      ser.remove({}, function(err) {
        if (err) {
          res.json(err);
        }

        res.json("success");
      })
    } else {
      res.json("User doesnt exist");
    }

  })
}



exports.postuser = function(req, res) {
  var x4 = new user({
    username: req.body.username,
    password: req.body.password,
    types: req.body.types,
  });
  x4.save(function(err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    res.json({
      success: true,
      body: response
    })
  });
};
exports.getuser = function(req, res) {
  user.find({}, function(err, response) {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
}
exports.search_users = function(req, res) {
  username = req.body.username;
  password = req.body.password;
  user.find({
    username: username,
    password: password
  }, function(err, response) {
    if (err) {
      res.json(err);
    }
    if (response) {
      res.json(response);
    } else {
      res.json("user dont exist")
    }
  });
}
// exports.updateUsers = function (req, res) {
//     var id = req.params.id;
//     User.findOne({ _id: id }, function (err, user) {
//         if (err) {
//             res.json(err);
//         }
//
//         var username = req.body.username;
//         user.username = username;
//         user.updated_at = new Date();
//
//         user.save(function (err, response) {
//             if (err) {
//                 res.json(err);
//             }
//
//             res.json(response);
//         })
//     })
// }
exports.updateUsers = function(req, res) {
  var username = req.body.username;

  user.findOne({
    username: username
  }, function(err, user1) {
    if (err) {
      res.json(err);
    }

    var types = req.body.types;
    user1.types = types;

    user1.updated_at = new Date();

    user1.save(function(err, response) {
      if (err) {
        res.json(err);
      }

      res.json(response);
    })
  })
}








exports.deleteuser = function(req, res) {

  user.findOne({}, function(err, user) {
    if (err) {
      res.json(err);
    }

    if (user) {
      user.remove({}, function(err) {
        if (err) {
          res.json(err);
        }

        res.json("success");
      })
    } else {
      res.json("User doesnt exist");
    }

  })
}









// exports.Update_user=function(req,res){
//  var name=req.body.name;
//  abc.findOne({name:name},function(err,xyz){
//   if(err){
//     res.json(err);
//   }
//   var price=req.body.price;
//   xyz.price=price;
//   xyz.save(function(err,response) {
//    if(err){
//      res.json(err);
//    }
//
//     res.json(response);
//   });
// });
// }




exports.searchcomics = function(req, res) {
  console.log(req.params.reg);
  var regex = RegExp(req.params.reg);

  comic.findOne({
    Name: regex
  }, function(err, response) {
    if (err) {
      return res.json(req, res, err);
    }
    if ((response || []).length === 0) {
      return res.json("doesn't exit");
    }
    return res.json(response);
  })
};

exports.searchComics = function(req, res) {
  var regex = RegExp(req.params.regx);
  console.log(req.params.regx);
  //  var name = req.body.Name;

  comic.find({
      name: regex
    },
    function(err, response) {
      if (err) {
        return res.json(req, res, err);
      }
      if ((response || []).length === 0) {
        return res.json({
          "status": false,
          "respData": {
            "data": "no results found"
          }
        });
      }
      return res.json({
        "status": true,
        "respData": {
          "data": response
        }
      });
    }
  )
};
// exports.updateUsers = function (req, res) {
//     var username = req.body.username;
//     user.findOne({ username: username}, function (err, user1) {
//         if (err) {
//             res.json(err);
//         }
//
//         var types= req.body.types;
//         user1.types= types;
//         user1.updated_at = new Date();
//
//         user1.save(function (err, response) {
//             if (err) {
//                 res.json(err);
//             }
//
//             res.json(response);
//         })
//     })
