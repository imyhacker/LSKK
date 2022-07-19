import Device from "../models/Device.js"

export const getDevices = async (req, res)=>{
    Device.find()
        .then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send({
                message: error.message || "some error"
            });
        });
}

export const createDevices = async (req, res) =>{
    const device = new Device({
        title: req.body.title,
        body: req.body.body
    })
    device.save() 
        .then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(409).send({
                message: error.message || "some create error"
            });
        });
}

export const updateDevices = async (req, res)=>{
    Device.updateOne({_id: req.params.id}, {$set: req.body})
    .then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(400).send({
            message: error.message || "some update error"
        });
    });
}

export const deleteDevices = async (req, res)=>{
    Device.deleteOne({_id: req.params.id})
    .then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(404).send({
            message: error.message || "some update error"
        });
    });
}

export const getDevicesById = async (req, res)=>{
    Device.findById(req.params.id)
        .then((result) => {
            res.send(result);
        }).catch((error) => {
            res.status(500).send({
                message: error.message || "some error"
            });
        });
}