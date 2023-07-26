
//signup
// const Book = require("../model/Book")


exports.signUp=function (req, res) {
    const db = req.app.get('db')
    console.log("log from signup users", req.body);
    let userDb = db.collection("UserDetails");
    userDb.findOne({ _id: req.body._id }, function (err, result) {
      if (err) console.log(err);
      // console.log("hello",result);
      if (result == null) {
        userDb.insert(req.body);
        res.send("success");
      } else res.send("This email is already registered");
    });
  }

// app.post("/users/signup", );
// let tokens = []
// exports.auth = (req, res, next) => {
//   console.log("from auth method");
//   const { body, params, query, file, files, headers } = req;
//   console.log("headers: ", body);
//   let token = body.token - 0;
//   console.log("client token: ", token);
//   if (!tokens.includes(token))
//   return res.status(400).send({ status: "failed", message: "Invalid previlizations" })
//   next();
// }


exports.logIn=function (req, res) {
    const db = req.app.get('db')
    console.log("log from login users", req.body);
    // tokens.push(req.body.token);
    let userDb = db.collection("UserDetails");
    userDb.findOne(
      { _id: req.body.username, password: req.body.password },
      function (err, result) {
        if (err) console.log(err);
        //if (result == null) res.send("Invalid credentials");
        // res.send("No account found with this username, please sign up and then login");
        else res.send(result);
      }
    );
  }
  
  //dummy
  // exports.test = function (req,res){
  //   res.send('book route testing!')
  // }

  // exports.allBooks = (req, res) => {
  //   Book.find()
  //     .then(books => res.json(books))
  //     .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
  // }

  // exports.getBook = (req, res) => {
  //   console.log("getting book details of",req.params);
  //   Book.findById(req.params.id)
  //     .then(book => res.json(book))
  //     .catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
  // }
  // exports.addBook = (req, res) => {
  //   console.log("creating book",req.body);
  //   console.log("Book",Book);
  //   Book.create(req.body)
  //     .then(book => res.json({ msg: 'Book added successfully' }))
  //     .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  // }

  // exports.updateBook = (req, res) => {
  //   Book.findByIdAndUpdate(req.params.id, req.body)
  //     .then(book => res.json({ msg: 'Updated successfully' }))
  //     .catch(err =>
  //       res.status(400).json({ error: 'Unable to update the Database' })
  //     );
  // }

  // exports.deleteBook = (req, res) => {
  //   Book.findByIdAndRemove(req.params.id, req.body)
  //     .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
  //     .catch(err => res.status(404).json({ error: 'No such a book' }));
  // }
 



