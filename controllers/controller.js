const ProductModel = require('../models/crudModel')

function authController(){
    return{
        async product(req,res){
         
            try {
            const val = await ProductModel.find()
            res.json(val)
            } catch(error){

            }
        },
        sendproduct(req,res){
            const {username, price} = req.body
            const user = new ProductModel({
                username: username,
                price: price
            })
           
            
            user.save().then(()=>{
                console.log(user)
                res.send(user)
            }).catch(error =>{
                console.log(error)
            })
       },
       async update(req,res){
            
        try{
            const val = await ProductModel.findById(req.params.id)
            val.price = req.body.price
            const a1 = await val.save()
            res.send(a1)
        }catch(error){
            res.send(error)
        }
        

       },
       async gone(req,res){
           try{
            const val = await ProductModel.findByIdAndDelete(req.params.id)
            res.send("Value deleted")
           }catch(error){
               res.send(error)
           }

       }
   


    }
}

module.exports = authController