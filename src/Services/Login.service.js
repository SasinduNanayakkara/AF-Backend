import bcrypt from "bcrypt";
import { getAdminByEmail } from "../Repository/Admin.repository"
import { getClientByEmail } from "../Repository/Client.repository";
import { getConsultantByEmail } from "../Repository/Consultant.repository";

export const loginService = async ({email, password}) => {
    console.log(email, password);
    const isAdmin = await getAdminByEmail(email);
    const isConsultant = await getConsultantByEmail(email);
    const isClient = await getClientByEmail(email);
    let decryptedAdminPassword;
    let decryptedConsultantPassword;
    let decryptedClientPassword;
    if (isAdmin) {
        decryptedAdminPassword = await bcrypt.compare(password, isAdmin.password);
    }
    if (isConsultant) {
        decryptedConsultantPassword = await bcrypt.compare(password, isConsultant.password);
    }
    if (isClient) {
        decryptedClientPassword = await bcrypt.compare(password, isClient.password);
    }
    if (decryptedAdminPassword) {
            return isAdmin;
    }
    else if (decryptedConsultantPassword) {   
            return isConsultant;
    }
    else if (decryptedClientPassword) {
            return isClient;
    }
    else {
        throw new Error("No User Found");
    }
}

