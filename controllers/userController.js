const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');


//Route Handler for USERS- Display All Users
exports.getAllUsers = catchAsync(async (req, res, next) =>{
    const users = await User.find();

        //SEND RESPONSE
        res.status(200).json({
            status: 'Success',
            //requestedAt: req.requestTime,
            results: users.length,
            data: {
                users
            } //JSEND DATA SPECIFICATION
        });
});

//Route Handler for USERS- disply user by id

exports.getUser = (req, res) =>{
    res.status(500).json({
        Status: "Error",
        Message: "This Route is not yet defined"
    });
};

//Route Handler for USERS- Create User

exports.createUser = (req, res) =>{
    res.status(500).json({
        Status: "Error",
        Message: "This Route is not yet defined"
    });
};

//Route Handler for USERS- to update user
exports.updateUser = (req, res) =>{
    res.status(500).json({
        Status: "Error",
        Message: "This Route is not yet defined"
    });
};

//Route Handler for USERS- to delete a user
exports.deleteUser = (req, res) =>{
    res.status(500).json({
        Status: "Error",
        Message: "This Route is not yet defined"
    });
};