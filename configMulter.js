const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const config ={
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,path.resolve(__dirname,'fotos'))
        },
        filename:(req,file,cb)=>{
            crypto.randomBytes(16,(err,hash)=>{
                if(err)cb(err)
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null,fileName);
            })
        }
    })
 }

 module.exports = config