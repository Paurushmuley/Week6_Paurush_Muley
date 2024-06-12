const gocardless = require("gocardless-nodejs");
const constants = require("gocardless-nodejs/constants");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.GC_ACCESS_TOKEN);

const client = gocardless(
  // We recommend storing your access token in an environment
  // variable for security
  process.env.GC_ACCESS_TOKEN,
  // Change this to constants.Environments.Live when you're ready to go live
  constants.Environments.Sandbox
);

  
    const listResponse =  client.customers.list();
    const customers = listResponse.customers;
    console.log(customers);

