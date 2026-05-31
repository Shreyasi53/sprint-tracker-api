import Client from "../models/Client.model.js";

export const createClientService = async (clientData) => {
  const client = await Client.create(clientData);
  return client;
};