import {
  createClientService,
  getAllClientsService,
  getClientByIdService,
  updateClientService,
  deleteClientService,
} from "../services/Client.service.js";

export const createClient = async (req, res) => {
  try {
    //console.log(req.body); 
    const client = await createClientService(req.body);

    res.status(201).json({
      success: true,
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllClients = async (req, res) => {
  try {
    const clients = await getAllClientsService();

    res.status(200).json({
      success: true,
      data: clients,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await getClientByIdService(req.params.id);

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.status(200).json({
      success: true,
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateClient = async (req, res) => {
  try {
    const client = await updateClientService(
      req.params.id,
      req.body
    );

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.status(200).json({
      success: true,
      data: client,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const deleted = await deleteClientService(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Client deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};