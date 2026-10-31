# Main Modules:
Auth Service	        Registration, login,                                JWT authentication	FastAPI, Python

User/Database Service	User profiles, prediction history, stored records	FastAPI, PostgreSQL

Prediction/ML Service	Input processing, model inference, risk prediction	Python, scikit-learn, FastAPI

Explainability/
Graph Module	        SHAP, LIME, feature importance, visualizations	    Python, SHAP, LIME

4 main modules need to be developed

# Extra modules:
NIGNX- Reverse Proxy
Docker - containerisation 
proper security and robustness

                  ┌──────────────────────┐
                  │     React Frontend   │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │      API Gateway     │
                  └──────────┬───────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
   ┌─────────────┐   ┌──────────────┐   ┌────────────────┐
   │ Auth Service│   │ User Service │   │Prediction      │
   │             │   │              │   │Service         │
   └─────────────┘   └──────────────┘   └───────┬────────┘
                                                │
                                                ▼
                                      ┌──────────────────┐
                                      │ Explainability   │
                                      │ Service          │
                                      └──────────────────┘

# Contracts:
In software architecture, a contract is a formal agreement between two or more software components that defines how they interact with each other.

It establishes rules about:
1. What information a component must provide.
2. What information a component can receive.
3. What format that information must follow.
4. What output the component promises to return.
5. What happens when something goes wrong.
Think of a contract as a communication protocol between services.

| Contract type | What it defines | Example |
|
| API Contract | Communication between services | REST endpoints |
| Data Contract | Structure and format of data | JSON Schema |
| Database Contract | Data ownership and persistence rules | PostgreSQL table structure |
| Authentication Contract | Identity and access rules | JWT |
| Model Contract | ML model input/output requirements | Feature schema |
| Error Contract | Standardized failure responses | Error codes |


## contracts in this projects:

| File | Purpose | Priority |
|
| response.schema.json | Standard success response | High |
| error.schema.json | Standard error response | High |
| register.schema.json | Registration input | Medium | (last)
| login.schema.json | Login input | Medium |    (last)
| prediction-request.schema.json | Patient features submitted to ML model | Critical |
| prediction-response.schema.json | Prediction results returned by ML model | Critical |
| explanation-request.schema.json | Input required for SHAP/LIME | High |
| explanation-response.schema.json | Explanation results returned | High |

## Contracts layout


{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "prediction-request.schema.json",
  "title": "PredictionRequest",
  "description": "Defines the input data required by the cardiovascular risk prediction service.",
  "type": "object",
  "additionalProperties": false,

  "properties": {
    // input/output variable
    },

    "features": {

       //print variable
    

      "properties": {
      // input/output variables under "features"
      },
    }
      "required": [
       //essential variables
      ]
}
