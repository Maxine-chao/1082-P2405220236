const pdb = require('../utils/blogen')

module.exports =class Blogen {
    constructor(id, title, date, article) {
        this.id =id;
        this.title = title;
        this.date = date;
        this.article = article; 
    }

    static fetchAll(){
        return pdb.execute('SELECT * FROM `database_blogen(class)`.post;');
    }
};

//testing
// const test =async()=>{
//     await Post.fethAll().then(([rows]) => {
//         console.log(JSON.stringify(rows));
//     });
// };

// test()

