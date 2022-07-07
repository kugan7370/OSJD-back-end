
const JerseyCategory = require('../Model/JerseyCategory')
const cloudinary = require('../Cloud/index');



exports.addJerseyCategory = async (req, res) => {
    // console.log(req);
    const { Category } = req.body;
    const { file } = req;
    const newJersey = new JerseyCategory({ Category })


    if (file) {
        const result = await cloudinary.uploader.upload(
            file.path
        );
        const { url, public_id } = result

        newJersey.image = url;
        newJersey.image_public_id = public_id;

    }

    const result_save = await newJersey.save();

    if (!result_save) {
        return res.status(400).json({
            error: 'message is something wrong'
        })
    }
    else {
        return res.status(200).json(newJersey)
    }

}


exports.getCategory = async (req, res) => {



    const get_Category = await JerseyCategory.find()


    if (!get_Category) {
        return res.status(200).json({
            Message: 'No jersey available'
        })
    }
    if (get_Category) {
        return res.status(200).json(get_Category)
    } else {

        return res.status(400).json({
            Message: 'message is something wrong'
        })
    }


}