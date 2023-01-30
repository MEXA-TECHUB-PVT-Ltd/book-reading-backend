const express = require("express"),
router=express.Router();

const controller= require("../controllers/bookController");
const upload = require("../middlewares/bookFiles&thumbnailsMulter")

router.post("/addBook", upload.fields([
    {
        name: "image",
        maxCount:1        
    },
    {
        name: "file",
        maxCount:1 
    }
]),controller.addBook)
router.get("/getAllBooks" , controller.getAllBooks);
router.get("/getAllPaidBooks",controller.getAllPaidBooks);
router.get("/getAllFreeBooks",controller.getAllFreeBooks);
router.get("/getEbooksOnlyWithPaidStatus",controller.getEbooksOnlyWithPaidStatus)
router.get("/getAudioBooksOnlyWithPaidStatus",controller.getAudioBooksOnlyWithPaidStatus)
router.delete("/deleteBook",controller.DeleteBook)
router.put("/updateBook", upload.fields([
    {
        name: "image",
        maxCount:1        
    },
    {
        name: "file",
        maxCount:1 
    }
]),controller.updateBook)


router.get("/searchBook",controller.searchBook)
router.get("/getAllTrendingBooks",controller.getAllTrendingBooks)
router.get("/getBooksByCategory_id",controller.getBooksByCategory_id)




module.exports=router