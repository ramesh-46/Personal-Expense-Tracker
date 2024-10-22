
## Project Overview
The Personal Expense Tracker is a RESTful API developed to help users manage their personal finances. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period. This project was built using Node.js and MongoDB.

## Technologies Used
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Development Tools**: Postman, Git, GitHub

## Setup Instructions
Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/detracker.git
   cd dettracker
Install Dependencies:

bash
Copy code
npm install
Start MongoDB: Make sure you have MongoDB installed and running locally. You can start it with:

bash
Copy code
mongod
Run the Server:

bash
Copy code
node server.js
The server should start on port 5000.

Access the API: The API will be available at http://localhost:5000.

API Documentation
Endpoints
Create a Transaction

Endpoint: POST /transactions
Request Body:
json
Copy code
{
  "type": "expense",
  "category": "groceries",
  "amount": 100,
  "date": "2024-10-22",
  "description": "Bought groceries"
}
Response: Returns the created transaction.
Get All Transactions

Endpoint: GET /transactions
Response: Returns an array of all transactions.
Get Transaction by ID

Endpoint: GET /transactions/:id
Response: Returns the transaction object for the given ID.
Update a Transaction

Endpoint: PUT /transactions/:id
Request Body:
json
Copy code
{
  "type": "income",
  "category": "salary",
  "amount": 2000,
  "date": "2024-10-01",
  "description": "Monthly salary"
}
Response: Returns the updated transaction object.
Delete a Transaction

Endpoint: DELETE /transactions/:id
Response: Returns a success message indicating the transaction was deleted.
Get Transaction Summary

Endpoint: GET /summary
Response: Returns a summary of total income, total expenses, and balance.
Postman Screenshots
Here are some screenshots demonstrating each API call:

POST Request to Add Transaction

GET Request to Retrieve All Transactions

Update a Transaction

Delete a Transaction

u can reach ot at suraramesh46@gmail.com  and 9550354436 for quiries