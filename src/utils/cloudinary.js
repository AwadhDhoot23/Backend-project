import {vs as cloudinary} from 'cloudinary';
import fs from 'fs'
cloudinary.config({ 
        cloud_name: process.env.COUDINARY_CLOUD_NAME, 
        api_key:process.env.COUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //uppload file one cloudinary
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto",
        }
        )
        //file has been uploaded
        console.log("File is upploaded on cloudinary".response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file as we got some error while uplaoding on cloudinary
        return null;
    }
}
export {uploadOnCloudinary}