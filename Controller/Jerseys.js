const cloudinary = require('../Cloud/index');
const Jersey = require('../Model/Jersey');

exports.addJersey = async (req, res) => {



    const { category_id, price, type } = req.body;
    const addJersey = new Jersey({ category_id, price, type })

    const { file } = req;

    if (file) {
        const result = await cloudinary.uploader.upload(
            file.path
        );
        const { url, public_id } = result

        addJersey.image = url;
        addJersey.image_public_id = public_id;

    }

    const result_save = await addJersey.save();

    if (!result_save) {
        return res.status(400).json({
            Message: 'message is something wrong'
        })
    }
    else {
        return res.status(200).json(addJersey)
    }

}

exports.getJersey = async (req, res) => {



    const get_jersey = await Jersey.find()


    if (!get_jersey) {
        return res.status(200).json({
            Message: 'No jersey available'
        })
    }
    if (get_jersey) {
        return res.status(200).json(get_jersey)
    } else {

        return res.status(400).json({
            Message: 'message is something wrong'
        })
    }


}



