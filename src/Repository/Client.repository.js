import { Client } from "../Models/Client.model";

export const createClient = async ({firstName, lastName, email, password, phone, location, prefix, profileImage}) => {
    try {
        const result = await Client.create({firstName, lastName, email, password, phone, location, prefix, profileImage});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
};

export const getAllClients = async () => {
    try {
        const result = await Client.find().lean();
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getClientById = async (id) => {
    try {
        const result = await Client.findById(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const updateClientById = async (id, {firstName, lastName, email, password, phone, location, prefix, profileImage}) => {
    try {
        const result = await Client.findByIdAndUpdate(id, {firstName, lastName, email, password, phone, location, prefix, profileImage});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getClientByEmail = async (email) => {
    try {
        const result = await Client.findOne({email});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteClientById = async (id) => {
    try {
        const result = await Client.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}