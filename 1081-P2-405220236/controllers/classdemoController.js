const ClassDemo = require('../models/classdemoModel');

exports.getClass = (req, res) => {
  
  try {
    ClassDemo.fetchClassDemo().then(([rows]) => {
      console.log(JSON.stringify(rows));
      //res.send(JSON.stringify(rows));
      res.render('classdemo', {
        data: rows,
        title: ' 108-2 JavaScript Midterm Project',
      });
    });
  } catch (err) {
    console.log(err);
  }
};
