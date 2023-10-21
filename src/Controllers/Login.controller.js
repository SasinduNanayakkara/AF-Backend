import { createClient, getClientByEmail } from "../Repository/Client.repository";
import { loginService } from "../Services/Login.service";
import { sendTokenResponse } from "../Utils/jwt";
import passport from "passport";

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await loginService({email, password});
        sendTokenResponse(res, user, "Login successful");
    }
    catch (error) {
        res.status(403).json({message: error.message});
    }
}

export const loginGoogle = passport.authenticate('google', {
    scope:
        ['email', 'profile']
  })
  
  export const googleCallback = passport.authenticate('google', {
    failureRedirect: '/failed',
    successRedirect:  '/api/login/google/success'
  });
  
  export const googleAuthSuccess = (async (req, res) => {
    const user = req.user;
    console.log(req, req.session, req.user);
    if (!user) {
      res.sendStatus(500)
      return
    }
    
    const existingUser = await getClientByEmail(user.email);
    const redirect = "http://localhost:3000/client/home";

  
    if(!existingUser) {
      let client = await createClient({
        firstName: user.given_name, 
        lastName:user.family_name, 
        email: user.email, 
        password: "######", 
        phone: "077123123", 
        location: "colombo", 
        prefix: "Mr", 
        profileImage: "",
        google_auth: true,
        google_id: user.id
    });
  
      req.session.user = client;
      req.session.save();
      res.redirect(redirect);
      return;
    }
  
    if(existingUser.google_auth && existingUser.google_id == user.id) {
      req.session.user = existingUser;
      req.session.save();
      res.redirect(redirect);
      return;
    }
    res.status(500).json({message: 'Something went wrong. Try again!'});
  })