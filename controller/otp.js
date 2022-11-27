const router = require("express").Router();

router.get("/hello", async(req, res) => {
    try{
        return res.json({message:"Hello from OTP router"});

    } catch(error){
        return res.status(400).json ({success : false, error: error.message});
    }
});

//api for requesting otp to phone number
router.post("/requestotp", async(req,res)=>{

    try{
        const {phonenumber , channel} = req.body;
        console.log(phonenumber, channel );
        return res.json({success: true});
    }catch(error){
        return res.json({success: false, error: error.message});
    }

});

//api for verifying otp coming from frontend. otpalso
router.post("/verifyotp", async(req,res)=>{

    try{
        const {phonenumber, otp } =req.body;
        console.log(phonenumber, otp);
        return res.json({success: true});
    }catch(error){
        return res.json({success: false, error: error.message});
    }

});

module.exports = router;