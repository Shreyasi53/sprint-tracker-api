import Client from "../models/Client.model.js";

export const createClientService = async (data) => {
  return await Client.create(data);
};

export const getAllClientsService = async (page, limit) => {
  const offset = (page - 1) * limit;
  const clients = await Client.findAndCountAll({
    limit,
    offset,
  });
  return clients;
};

export const getClientByIdService = async (id) => {
  return await Client.findByPk(id);
};

export const updateClientService = async (id, data) => {
  const client = await Client.findByPk(id);
  if (!client) return null;

  await client.update(data);
  return client;
};

export const deleteClientService = async (id) => {
  const client = await Client.findByPk(id);
  if (!client) return null;

  await client.destroy();
  return true;
};
