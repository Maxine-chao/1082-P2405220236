const Blogen = require('../models/blogenModel');

exports.getPost = async(req, res) =>{
    let post;
    try {
         await Blogen.fetchAll().then(([rows]) => {
           post =rows 
        console.log(('blogen'),JSON.stringify(rows));
        //res.json(rows);
    });

    res.render('blogen', {
         post, 
         title:'Eiser'
        });

    } catch (error) {
        console.log(error);
    }
    
   
};