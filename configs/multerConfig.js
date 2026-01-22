import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
      storage , 
      limit : {
            filesize : 10 * 1024 *1024
      }
});

export default upload;