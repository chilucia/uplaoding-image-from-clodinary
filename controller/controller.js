const model = require('../models').image;
const cloudinary = require('../utils/cloudinary')

const createPost = async(req,res) => {
    try{
        const result = await cloudinary.uploader.upload(
            req.files.image.tempFilePath,
            (err,result) =>{
                console.log(result)
                try{
                    return result;

                }catch(err){
                    return err;
                }

            }
            
            )

    //  const result = await cloudinary.uploader.upload(req.file.path)
        console.log(result)
        const data ={
            name:req.body.name,
            stack:req.body.stack,
            image:result.secure_url,
            duration:req.body.duration
        }
         console.log(data.image)
         const created = await model.create(data)
         
            res.status(201).json({
                message: 'New record has been created',
                data:created
            })
         }
    catch(e){
        res.status(400).json({
            message:e.message

        })
    }
}

module.exports ={
    createPost
}