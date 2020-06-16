const EiserProduct = require('../models/eiserModel');
const Blogen = require('../models/blogenModel');

exports.getEiser = async(req, res) => {
  let featuredProd;
  let newProd;
  try {
      const get = await EiserProduct.fetchFeatured().then(([rows]) =>{
          featuredProd = rows;
          //console.log(JSON.stringify(featuredProd));
          //res.send(JSON.stringify(featuredProd));
      });

      const getTeam = await EiserProduct.fetchNew().then(([rows]) =>{
          newProd = rows;
          //console.log(JSON.stringify(newProd));
          //res.send(JSON.stringify(newProd));
      });

      res.render('ceiser',{
          ftitle: 'Featured Product',
          fdata: featuredProd,
          ntitle:'New Product',
          ndata: newProd,
      });

     

  } catch (error) {
      console.log(error);
  }
};    







exports.getCombined = async (req, res) => {
  let featuredProd;
  let newProd;
  let post;

  try {
    const get = await EiserProduct.fetchFeatured().then(([rows]) => {
      featuredProd = rows;
    });

    const getTe = await EiserProduct.fetchNew().then(([rows]) => {
      newProd = rows;
    });

    const getTeam =await Blogen.fetchAll().then(([rows]) => {
      post =rows;
    });

    // console.log(JSON.stringify(data));
    //res.send(JSON.stringify(data));

    res.render('combined', {
      ftitle: 'Featured Products',
      fdata: featuredProd,
      ntitle: 'New Products',
      ndata: newProd,
      bdata: post,

    });
  } catch (err) {
    console.log(err);
  }
};
