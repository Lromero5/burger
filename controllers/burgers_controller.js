const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     res.redirect("/burgers");
//   });
  
  router.get("/", function(req, res) {
    //res.send('FIRST TEST')
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      // console.log('this is hbs console',hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers/create", function(req, res) {
    // console.log("create route hit", req.body)
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function() {
      res.redirect("/");
      console.log("redirect issue")
    });
  });
  
  router.put("/burgers/update/:id", function(req, res) {
  //  console.log("put route hit", req.body)

    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function() {
      res.redirect("/");
    });
  });
  
  router.delete("/burgers/delete/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function() {
      res.redirect("/burgers");
    });
  });



module.exports = router;

