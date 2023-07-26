const user = require('../model/User.js');


//post data

const datainfo = (req,res) => {

    var myData = new user(

        {
            name: req.body.name,
            lname:req.body.lname,
            gender: req.body.gender,
            email:req.body.email,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword,        

        }

    );

    user.create(req.body)
    .then(book => res.json(myData))
    .catch(err => res.json({ error: 'Unable to add the file '}));

}


module.exports = { datainfo };