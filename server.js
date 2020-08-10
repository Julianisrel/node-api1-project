const express = require('express')
const uuid = require('uuid');
const server = express();
const users = require('./data');
const e = require('express');

// Body Parser Middleware 
server.use(express.json());
server.use(express.urlencoded({ extended: false}));












// gets all users 
server.get('/api/users', (req, res) => {
    res.json(users);
});

function getUserById(id){
    let user = null;
    
    users.map(u => {
        console.log('id', id, u.id, String(u.id) === String(id))
        if (String(u.id) === String(id)) user = u
    })

    return user
}

server.get('/api/users/:id', (req, res) => {
    const theUser = getUserById(req.params.id)
    res.json(theUser)
});






// Creates a user using the information sent inside the `request 
server.post('/api/users', (req, res) => {
    const newUser = {
     id: uuid.v4(),
     name: req.body.name,
     email: req.body.email,
     status: 'active'
}
     if(!newUser.name || !newUser.email) {
         return res.status(400).json({msg: 'Please include a name and email '});
         
     } 
     users.push(newUser);
     res.json(users);
});








// put 
/*  Updates the users information  */
server.put('/api/:id', (req, res) => {
    const found = users.filter(user => user.id === parseInt(req.params.id));
    
    if (found.length > 0) {
        const upUser =req.body;
        users.forEach(user =>  {
            if(user.id === parseInt(req.params.id)) {
                user.name =updUser.name ?  upUser.name : user.name;
                user.email = updUser.email ?  upUser.email : user.email;
            
            res.json({msg: 'user was updated, member' });
            }
        });  
    } else {
        res.status(400).json({msg: `No User with the id of ${req.params.id}`});
    }
});


// deletes a User  
server.delete('/api/:id', (req, res) => {
    const found = users.filter(user => user.id === parseInt(req.params.id));
    
    if (found.length > 0) {
        res.json({ msg: 'User deleted', });
    } else {
        res.status(400).json({msg: `No User with the id of ${req.params.id}`});
    }
   });





// when deployed add a process which means that I want to look at environment variables I want to look for the one called port OR look for 8000
const PORT = process.env.PORT || 8000;


server.listen(PORT, () => {
    console.log(`Server started on port${PORT}`);
})



