const Model = require("../models/soal.model");
const uuid = require("uuid");
const Response = require("../const/response");

// add level

exports.addsoal = async (req, res) => {
  req.body.guid = uuid.v4();
  try {
    const add = await Model.create(req.body);
    if (add) {
      res.json(Response.successResponse("Successfully Add soal"));
    } else {
      res.json(Response.errorResult());
    }
  } catch (error) {
    res.json(Response.errorResult());
  }

}

//get level
exports.getsoal = async (req, res, next) => {
  console.log("Get Soal")
  console.log(req.body)
  const { page, limit } = req.body;
  try {
    const data = await Model.find()
      .sort({ create_at: -1 })
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
//   get soal by nmr level
exports.getsoalbynmr = async (req, res, next) => {
  const { page, limit, nomorlevel } = req.body;
  try {
    const data = await Model.find({ nomorlevel: nomorlevel })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Model.countDocuments({ nomorlevel: nomorlevel });
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
exports.cekjawaban = async (req, res, next) => {
  console.log("Jawab Soal");
  console.log(req.body);
  const { guid, jawaban } = req.body;
  try {
    const cek = await Model.findOne({ guid: guid, jawabanbenar: jawaban })
    console.log(cek)
    if (cek) {
      console.log("Jawaban Benar");
      res.json(Response.successResponse("Successfully Jawab soal"));
    } else {
      console.log("Jawaban Salah");
      res.json(Response.errorResult())
    }
  } catch (error) {
    console.log("Terjadi Error");
    res.json(Response.errorResult())
  }
}

exports.deletesoal = async (req, res) => {
  console.log("Hapus Soal !");
  // console.log(req.params)
  try {
    const deletedata = await Model.findOneAndDelete({ guid: req.params.guid });
    if (deletedata) {
      res.json(Response.successResponse("Successfully Delete soal"));
    } else {
      res.json(Response.errorResult());
    }
  } catch (error) {
    res.json(Response.errorResult());
  }

}
exports.updatesoal = async (req, res) => {
  console.log("Edit Soal !");
  console.log(req.params)
  console.log(req.body)
  try {
    await Model.findOneAndUpdate(
      { guid: req.params.guid },
      {
        soal: req.body.soal,
        nomorlevel: req.body.nomorlevel,
        pilihanA: req.body.pilihanA,
        pilihanB: req.body.pilihanB,
        pilihanC: req.body.pilihanC,
        pilihanD: req.body.pilihanD,
        jenissoal: req.body.jenissoal,
        jawabanbenar: req.body.jawabanbenar
      }
    );
    res.json(Response.successResponse("Successfully Update Soal"));
  } catch (error) {
    res.json(Response.errorResult());
  }

}