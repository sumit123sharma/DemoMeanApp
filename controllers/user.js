const express = require('express')
const User = require('../models/user.js')

// Create and Save a new user
exports.create = async (req, res) => {
    console.log("what in model=====", req.body)
        if (!req.body) {
            return res.status(400).send({
                message: "Please fill all required field"
            });
        }
        // Create a new User
        const user = new User({
           
            email: req.body.email,
            password: req.body.password
        });
        // Save user in the database

        user.save()
            .then(data => {
                res.status(200).send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Something went wrong while creating new user."
                });
            });
    };



    
   

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json({ message: "usres fetch successfully", user });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.findSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.userId })
        console.log("id is======", req.body.userId)
        if (user) {
            res.status(200).send({
                message: "user find successfully", user
            })
        } else {
            res.status(400).send({
                message: "user not found"
            })
        }

    } catch (err) {
        res.status(400).send({
            message: err.message
            })
    }
}

exports.findById = async (req, res) => {
    console.log("id is======", req.params.id)

    try {
        const user = await User.findById(req.params.id)
        if (user) {
            res.status(200).send({
                message: "user find successfully by Id", user
            })
        } else {
            res.status(400).send({
                message: "user not found"
            })
        }

    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

exports.updateUserById = async (req, res) => {
    try {
        const id = req.params.id
        const updateData = req.body
        const option = { new: true }

        const updateUser = await User.findByIdAndUpdate(id, updateData, option)

        if (updateUser) {
            res.status(200).json({
                message: "user updated successfully", updateUser
            })
        } else {

            res.status(400).send({
            message:"error while updating"
            })
        }
    } catch (err) {
        messaage: err.message
    }
}

exports.deleteUserById = async (req, res) => {
    try {
        const id = req.params.id
        const deleteUser = await User.findByIdAndDelete(id)

        if (deleteUser) {
            res.status(200).json({
                message: "user deleted successfully", deleteUser
            })
        } else {
            res.status(400).send({
                message: "error while updating"
            })
        }
    } catch (err) {
        messaage: err.message
    }
}