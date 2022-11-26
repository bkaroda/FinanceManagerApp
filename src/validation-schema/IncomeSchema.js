import * as Yup from "yup";

 export const incomeSchema=Yup.object().shape({
    amount: Yup.string().amount().required("Amount is required"),
  
    date: Yup.string()
      .required("date is required"),
      
      source:Yup.string().required("Source is required"),
      remark:Yup.string().required("Remark is required")
    });