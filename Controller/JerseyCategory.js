

const JerseyCategory = require('../Model/JerseyCategory')

const cloudinary = require('cloudinary')


cloudinary.config({
    cloud_name: 'dtav6xjhp',
    api_key: '146628243243177',
    api_secret: 'hXHYj2KNAVKtnhh0TPztSy7-8YM'
});


exports.addJerseyCategory = async (req, res) => {
    // console.log(req);
    const { Category } = req.body;
    const { file } = req;
    const newJersey = new JerseyCategory({ Category });
    // // cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    // // { public_id: "olympic_flag" }, 
    // // function(error, result) {console.log(result); });

    if (file) {
        const result = await cloudinary.uploader.upload(
            file.path
        );
        const { url } = result


        newJersey.image = url;

    }
    await newJersey.save();

    res.json(newJersey)
}