var express         = require("express"),
    router          = express.Router(),
    passport        = require("passport"),
    // passport        = require("./passport"),
    middlewareObj   = require("../middleware"),
    User            = require("../models/user");

//================================================================

router.get("/",function(req,res){
    res.render("home");
});

router.get("/admin",function(req,res){
    res.render("admin");
});

router.get("/reception",function(req,res){
    res.render("reception");
});

router.get("/patient",function(req,res){
    res.render("patient");
});

router.get("/doctor",function(req,res){
    res.render("doctor");
});

router.get("/labtechnician",function(req,res){
    res.render("labtechnician");
});

//================================================================


//register form display
router.get("/register",function(req,res){
    res.render("home");
 });


// handling register logic
router.post("/register",function(req,res){
        var userData = {
            username: req.body.username,
            cid: req.body.cid,
            dob: req.body.dob,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            address: req.body.address,
            acctype: req.body.acctype,
        }
        User.register(userData , req.body.password , function(err,user){
            if(err){
                 req.flash("error",err.message);
                 res.redirect("/register");
            } 

            // console.log("username: " + user.username);
            // console.log("Acctype: " + user.acctype);

            passport.authenticate("local")(req,res,function(){
                
                if(user.acctype.toString() == "admin"){
                    res.render("admin",{user:user});    
                }   else if(user.acctype.toString() == "reception"){
                    res.render("reception",{user:user});   
                }   else if(user.acctype.toString() == "patient"){
                    res.render("patient",{user:user});   
                }   else if(user.acctype.toString() == "doctor"){
                    res.render("doctor",{user:user});   
                }   else if(user.acctype.toString() == "labtechnician"){
                    res.render("labtechnician",{user:user});   
                }
            });
        });
    
    // }
 });

//login form display
router.get("/login",function(req,res){
    res.render("home");
});

// handling login logic

router.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user){
        if (err) {
                    res.redirect("/");
        } else  {
            User.findOne({email:req.body.email} , function(err, users){
                // User.find({email:req.body.email}, function(err, foundUser){
                    if(err){
                        res.redirect("/");
                    } else {
                        if(users.acctype.toString() == "admin"){
                            res.render("admin",{user:users});
                        } else if(users.acctype.toString() == "reception"){
                            res.render("reception",{user:users});
                        } else if(users.acctype.toString() == "patient"){
                            res.render("patient",{user:users});
                        } else if(users.acctype.toString() == "doctor"){
                            res.render("doctor",{user:users});
                        } else if(users.acctype.toString() == "labtechnician"){
                            res.render("labtechnician",{user:users});
                        } 
                    }
                    });
          }        
        })(req, res, next);
  });


//logout
router.get("/logout",function(req,res){
    req.logOut();
    req.flash("error","You are successfully Logged Out!");
    res.redirect("/");
});



// =========================Admin Router================================

// router.get("/admin/reception",function(req,res){
//     User.find({},function(err,foundUser){
//         if(err){
//             res.redirect("/admin");
//         } else {
//             // if(foundUser.acctype == "reception"){
//                 console.log(foundUser);
//                 // res.("admin",{ser:foundUser});
//             // }
//         }
//     });
// });

// =======================End Of Admin Router==============================
module.exports = router;
