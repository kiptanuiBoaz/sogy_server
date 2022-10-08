const router=require('express').Router();


router.post('/customer', async(req,res)=>{

    try{
        const customer = await req.body;
        console.log(customer);
    }

    catch(err){
        console.error(err)
        return res.status(200).json({message:`${error.message}`});

    }

    finally{
        return res.status(200).json ({message:`${user.username} was registered successfully`});
    }
    
})


module.exports=router