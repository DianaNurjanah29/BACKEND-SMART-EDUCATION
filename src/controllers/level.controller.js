const Model = require("../models/level.model");
const uuid = require("uuid");
const Response = require("../const/response");

// add level

exports.addlevel=async(req,res)=>{
    req.body.guid=uuid.v4();
 try {
    const add=await Model.create(req.body);
    if(add){
        res.json(Response.successResponse("Successfully Add Level"));
    }else{
        res.json(Response.errorResult());
    }
 } catch (error) {
     res.json(Response.errorResult());
 }

}

//get level
exports.getlevel = async (req, res, next) => {
    const { page, limit } = req.body;
    try {
      const data = await Model.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
      const count = await Model.countDocuments();
      res.json(
        Object.assign(Response.successResponse("Successfully Get Data"), {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          data,
        })
      );
    } catch (err) {
      res.json(Response.errorResult());
    }
  };