import Client from '../models/Client.model.js';

export const createClient = async (req, res) => {
    try{
        const client = await Client.create(req.body);
        res.status(201).json({
            success: true,
            data: client,
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};