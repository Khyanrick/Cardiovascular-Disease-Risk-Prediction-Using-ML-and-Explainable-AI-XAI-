## Updated Architecture and Technology_01
Layer	        Technology

Browser	        HTML, CSS, JavaScript

Main backend	Node.js + Express

ORM	            Prisma

Database	    PostgreSQL

ML API	        Python + FastAPI

ML 
visualization	Streamlit

Explainability	SHAP + LIME

Deployment	    Docker + Nginx

# Database Architecture
## Work Flow
Workflow	        What happens?
Registration	    A new user creates an account
Login	            An existing user authenticates
Profile management	A user views or updates their profile
Prediction	        A user submits cardiovascular risk inputs
Explainability	    The system generates SHAP/LIME explanations
Prediction history	A user views previous predictions

## Entities
Entity	            Why does it exist?
User	            Represents an application account
Profile	            Stores additional user information
Prediction	        Represents one prediction operation
Prediction Input	Stores the data submitted for a prediction
ML Model	        Identifies the model used
Explanation	        Stores explainability results
Session	            Represents an authenticated session

The db diagram.io code is in this directory and contains the code to draw the necessary diagrams in the website 
https://dbdiagram.io/

it contains 7 tables;

