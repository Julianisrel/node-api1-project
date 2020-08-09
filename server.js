const express = require('express')
const server = express();
const users = require('./data');

const PORT = process.env.PORT || 8000;


server.listen(PORT, () => {
    console.log(`Server started on port${PORT}`);
})









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
server.post('/api/user', (req, res) => {
    res.json(user)
});

function createUser(data) {
    const payload = {
        id: String(users.length + 1),
        ...data,
    }
    users.push(payload)
        return payload
}

/*  Updates the users information  */
function updateUser(id, data) {
    const index = users.findIndex(u => u.id === id)
    users[index] = {
        ...users[index],
        ...data,
    }
    return users[index]
}



/*  deletes a user  */
function deleteUser(id) {
    users = users.filter(u => u.id != id)
}



// when deployed add a process which means that I want to look at environment variables I want to look for the one called port OR look for 8000

