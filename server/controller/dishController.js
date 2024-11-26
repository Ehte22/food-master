const asyncHandler = require("express-async-handler")
// const Dish = require("../model/Dish")
const fs = require("fs/promises")
const path = require("path")
const dishUpload = require("../utils/dishUpload")
const { Dish } = require("../model/Dish")
const cloudinary = require('../utils/uploadConfig')


exports.getAllDishes = asyncHandler(async (req, res) => {
    const result = await Dish.find()
    res.json({ message: "dish fetch success", result })
})


exports.addDishe = asyncHandler(async (req, res) => {

    dishUpload(req, res, async err => {
        if (err) {
            return res.status(400).json({ message: err.message || 'Upload error' })
        }

        const { secure_url } = await cloudinary.uploader.upload(req.file.path)

        await Dish.create({ ...req.body, hero: secure_url })
        res.status(201).json({ message: 'Dish Add Successfully' })
    })
})




exports.deleteDish = asyncHandler(async (req, res) => {
    const { dishId } = req.params
    if (!dishId) {
        res.status(400).json({ message: "No id found" })
    }
    const result = await Dish.findById(dishId)

    if (!result) {
        res.status(400).json({ message: "provide valid id" })
    }

    if (result.hero) {
        const ImageId = result.hero.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(ImageId);
    }

    await Dish.findByIdAndDelete(dishId);

    res.status(200).json({ message: 'Dish Delete Successfully' })
})



exports.updateDish = asyncHandler(async (req, res) => {

    dishUpload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'File upload failed', error: err.message });
        }

        const { dishId } = req.params

        const dish = await Dish.findById(dishId);
        if (!dish) {
            return res.status(404).json({ message: 'Dish not found' });
        }

        let imageUrl

        if (req.file) {
            const file = req.file

            try {
                const publicId = dish.hero.split('/').pop().split('.')[0];
                await cloudinary.uploader.destroy(publicId);

                const { secure_url } = await cloudinary.uploader.upload(file.path);

                imageUrl = secure_url;
            } catch (error) {
                return res.status(500).json({ message: 'Failed to upload new image', error: error.message });
            }
        }
        await Dish.findByIdAndUpdate(
            dishId,
            { ...req.body, hero: imageUrl },
        );

        res.status(200).json({ message: 'Dish Update Successfully' });
    });


})



