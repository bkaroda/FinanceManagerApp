import * as Yup from "yup";

 export const signUpSchema=Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum")
      .max(8,"cant not assign more than 8 characters"),
      name:Yup.string().required("Name is required"),
      phone:Yup.string().required("Phone is required").min(10,"Phone must contain 10 digits"),
      pan:Yup.string().required("PAN is required").min(10,"PAN must be of 10 characters")
  });