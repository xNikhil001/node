module.exports.getUsers = (req,res)=>{
    res.json({user:'All'})
}

module.exports.createUser = (req,res)=>{
    res.json({user: "Added"})
}

module.exports.getUser = (req,res)=>{
    res.json({id:req.params.id})
}

module.exports.updateUser = (req,res)=>{
    res.json({id:req.params.id})
}

module.exports.deleteUser = (req,res)=>{
    res.json({id:req.params.id})
}
