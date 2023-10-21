import { createClient, deleteClientById, getAllClients, getClientById, updateClientById } from "../Repository/Client.repository";
import bcrypt from "bcrypt";
import { passwordValidation } from "../Utils/passwordValidation";

export const addClient = async ({firstName, lastName, email, password, phone, location, prefix, profileImage}) => {

    try {
    if(!passwordValidation(password)) {
        throw new Error("Invalid format for password");
    }
    
    const encryptedPassword = await bcrypt.hash(password, 10);

        const result = await createClient({firstName, lastName, email, password: encryptedPassword, phone, location, prefix, profileImage});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getClients = async () => {
    try {
        const result = await getAllClients();
        
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const getOneClient = async (id) => {
    try {
        const result = await getClientById(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const updateClient = async (id, {firstName, lastName, email, password, phone, location, prefix, profileImage}) => {
    try {
        const result = await updateClientById(id, {firstName, lastName, email, password, phone, location, prefix, profileImage});
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}

export const deleteClient = async (id) => {
    try {
        const result = await deleteClientById(id);
        return result;
    }
    catch (error) {
        throw new Error(error);
    }
}