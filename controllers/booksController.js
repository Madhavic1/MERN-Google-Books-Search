const db = require("../models");

module.exports = {
    findAll : function(req,res){
        console.log("req.query is ---in findAll is === "+req.query);
        db.Book
            .find(req.query)
            // .sort({date:-1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByTitle : function(req,res) {
        console.log("-------------")
        console.log(req.params.title)
        db.Book
            .find({title:req.params.title})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    create : function(req,res){
        console.log("------------ create function -------");
        console.log(req.body);
        db.Book 
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req,res){
        db.Book
            .findById({_id:req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json())
    }
}