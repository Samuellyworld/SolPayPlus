//importing NodeJS Library for Flutterwave for Business
import Flutterwave from "flutterwave-node-v3";

//importing default configs including config / keys from .env files
import { defaultConfig } from "../config/config";

//importing req and res rtypes from epxress
import { Request, Response } from "express";

//importing validate function from payment controller
import { validate } from "./payment.controller";

//declaring FLW config keys
const flw = new Flutterwave(
  defaultConfig.FLW_PUBLIC_KEY,
  defaultConfig.FLW_SECRET_KEY
);

//declaring getBillsCategories function
const getBillsCategories = async (req: Request, res: Response) => {
  try {
    const response = await flw.Bills.fetch_bills_Cat();
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};
//declaring getBillsCategory function
const getBillsCategory = async (req: Request, res: Response) => {
  const country = req.body.country;
  const category = req.body.category;

  //checking if req has coiuntry provided
  if (!country) {
    return res.status(400).json({
      message: "Please select a country",
    });
  }

  //checking if req has category provided
  if (!category) {
    return res.status(400).json({
      message: "Please select a category",
    });
  }

  try {
    //fetching response from flutterwave
    const response = await flw.Bills.fetch_bills_Cat();
    //declaring bills to be response.data ******Could be => const bills = await flw.Bills.fetch_bills_Cat().data;
    const bills = response.data;

    //mapping through different bills to pinpoint the users want
    const streamLined = bills.map((bill) => {
      //check the category selected by the user is "airtime"
      if (category == "airtime") {
        //check selected country to provide corresponding bills
        if (
          country == "NG" &&
          bill.country == country &&
          bill.biller_code == "BIL099"
        ) {
          return bill;
        }
        //check selected country to provide corresponding bills
        if (country == "GH" && bill.country == country) {
          if (
            bill.biller_code == "BIL132" ||
            bill.biller_code == "BIL133" ||
            bill.biller_code == "BIL134"
          ) {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "UG" && bill.country == country) {
          if (
            bill.biller_code == "BIL153" ||
            bill.biller_code == "BIL154" ||
            bill.biller_code == "BIL155"
          ) {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "ZM" && bill.country == country) {
          if (
            bill.biller_code == "BIL196" ||
            bill.biller_code == "BIL197" ||
            bill.biller_code == "BIL198"
          ) {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "KE" && bill.country == country) {
          if (bill.biller_code == "BIL189" || bill.biller_code == "BIL187") {
            return bill;
          }
        }

        //check if the selected category is data
      } else if (category == "data") {
        //check selected country to provide corresponding bills
        if (country == "NG" && bill.country == country) {
          if (
            bill.biller_code == "BIL108" ||
            bill.biller_code == "BIL109" ||
            bill.biller_code == "BIL110" ||
            bill.biller_code == "BIL111" ||
            bill.biller_code == "BIL111"
          ) {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "UG" && bill.country == country) {
          if (
            bill.biller_code == "BIL161" ||
            bill.biller_code == "BIL162" ||
            bill.biller_code == "BIL163"
          ) {
            return bill;
          }
        }
        //check if the selected category is electricity
      } else if (category == "electricity") {
        if (country == "NG" && bill.country == country) {
          if (
            bill.biller_code == "BIL112" ||
            bill.biller_code == "BIL113" ||
            bill.biller_code == "BIL114" ||
            bill.biller_code == "BIL115" ||
            bill.biller_code == "BIL116" ||
            bill.biller_code == "BIL117" ||
            bill.biller_code == "BIL118" ||
            bill.biller_code == "BIL120"
          ) {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "GH" && bill.country == country) {
          if (bill.biller_code == "BIL142") {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "UG" && bill.country == country) {
          if (bill.biller_code == "BIL158" || bill.biller_code == "BIL159") {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "ZM" && bill.country == country) {
          if (bill.biller_code == "BIL202") {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "KE" && bill.country == country) {
          if (bill.biller_code == "BIL191") {
            return bill;
          }
        }
        //check if the category selected is "cable"
      } else if (category == "cable") {
        if (country == "NG" && bill.country == country) {
          if (bill.biller_code == "BIL121" || bill.biller_code == "BIL122") {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "GH" && bill.country == country) {
          if (bill.biller_code == "BIL137" || bill.biller_code == "BIL138") {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "UG" && bill.country == country) {
          if (bill.biller_code == "BIL156" || bill.biller_code == "BIL157") {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "ZM" && bill.country == country) {
          if (bill.biller_code == "BIL200" || bill.biller_code == "BIL201") {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "KE" && bill.country == country) {
          if (bill.biller_code == "BIL190" || bill.biller_code == "BIL192") {
            return bill;
          }
        }
        //check if category selected is "internet"
      } else if (category == "internet") {
        //check selected country to provide corresponding bills
        if (country == "NG" && bill.country == country) {
          if (
            bill.biller_code == "BIL126" ||
            bill.biller_code == "BIL129" ||
            bill.biller_code == "BIL124"
          ) {
            return bill;
          }
        }
        //check selected country to provide corresponding bills
        if (country == "GH" && bill.country == country) {
          if (bill.biller_code == "BIL139" || bill.biller_code == "BIL141") {
            return bill;
          }
        }
      }
    });
    ////send status and data to the frontend
    res.status(200).json({
      data: streamLined.filter((bill) => bill != null),
    });
  } catch (error) {
    console.log(error);
  }
};

//declaring getStatus function, a function that gets the status of a transation
const getStatus = async (req: Request, res: Response) => {
  try {
    if (!req.params.reference) {
      return res.status(400).json({
        message: "Cannot find reference",
      });
    }
    //decalring payload constant for getting the reference of a transaction through req.params.reference
    const payload = {
      reference: req.params.reference,
    };

    //fetching status from flutterwave library
    const response = await flw.Bills.fetch_status(payload);
    //send status and data to the frontend
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    //sending error message to the frontend
    res.status(500).json({
      error: {
        message: `Couldn't fetch payment agencies`,
      },
    });
  }
};

//creating function that fecthes payment agencies - PaymentAgencies
const paymentAgencies = async (req: Request, res: Response) => {
  try {
    //fetch payment agencies from flutterwave library
    const response = await flw.Bills.fetch_bills_agencies();
    //send status and data to the frontend
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    //send status and message to the frontend
    res.status(500).json({
      error: {
        message: `Couldn't fetch payment agencies`,
      },
    });
  }
};

//decalring create bill function
const createBill = async (req: Request, res: Response) => {
  try {
    //decalring payload from vreq.body
    const payload = req.body;

    //checking if payload is provided in the req.body
    if (!payload) {
      return res.status(400).json({
        message: "Please provide payload",
      });
    }
    //validating the payload reference with the amount paid
    validate(payload.reference, payload.amount_paid);
    if (validate) {
      const response = await flw.Bills.create_bill(payload);
      //sending status and data to the frontend
      res.status(200).json({
        data: response,
      });
    } else {
      return res.status(400).json({
        message: `Unsuccessfull`,
      });
    }
  } catch (error) {
    console.log(error);
    //sending status and message to frontend
    res.status(500).json({
      error: {
        message: `Couldn't make Bill Payment`,
      },
    });
  }
};

//creatign validate bill function
const validateBill = async (req: Request, res: Response) => {
  try {
    //declaring payload as req.body
    const payload = req.body;

    //checking if payload is provided in req.body
    if (!payload) {
      return res.status(400).json({
        message: "Please provide payload",
      });
    }
    //validating payload using the flutterwave library
    const response = await flw.Bills.validate(payload);
    //sending status and data to frontend
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    //sending status and message to frontend
    res.status(500).json({
      error: {
        message: `Couldn't Validate Customer`,
      },
    });
  }
};

//declaring get bills payment function
const getBillsPayment = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    //checking if payload is provided in req.body
    if (!payload) {
      return res.status(400).json({
        message: "Please provide payload",
      });
    }
    //fecthing status of payload from flutterwave library
    const response = await flw.Bills.fetch_status(payload);
    //sending status and data to frontend
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    //sending status and message to frontend
    res.status(500).json({
      error: {
        message: `Couldn't get Bill Payments`,
      },
    });
  }
};

//creating amout to be paid function
const amountToBePaid = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    //checking if payload is provided in req.body
    if (!payload) {
      return res.status(400).json({
        message: "Please provide payload",
      });
    }
    //confirming amount to be paid with the flutterwave library
    const response = await flw.Bills.amt_to_be_paid(payload);
    //sending status and data to frontend
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    //sending status and message to frontend
    res.status(500).json({
      error: {
        message: `Couldn't Resolve amount`,
      },
    });
  }
};

// creatiung bill payment function
const getBillPayment = async (reference) => {
  try {
    const payload = {
      reference,
    };
    //fecthing status of payload from flutterwave library
    const response = await flw.Bills.fetch_status(payload);
    console.log(response);

    //return response
    return response;
  } catch (error) {
    console.log(error);
  }
};
// export
export {
  getBillsCategories,
  getBillsCategory,
  getStatus,
  paymentAgencies,
  amountToBePaid,
  createBill,
  validateBill,
  getBillsPayment,
  getBillPayment,
};
