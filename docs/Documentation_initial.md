# Cardiovascular Disease Risk Prediction Using Machine Learning and Explainable AI (XAI)

## 1. Project Overview

### Project Title
**Cardiovascular Disease Risk Prediction Using Machine Learning and Explainable Artificial Intelligence**

### Abstract

Cardiovascular diseases (CVDs) are a major global health concern. Early identification of cardiovascular risk can support timely medical assessment and preventive care. Machine learning techniques can analyse clinical and demographic data to identify patterns associated with cardiovascular disease. However, many machine learning models are difficult to interpret, making it challenging to understand why a particular prediction is generated.

This project aims to develop a machine-learning-based cardiovascular disease risk prediction system and improve its transparency using Explainable Artificial Intelligence (XAI). The proposed system will explore classification algorithms such as Logistic Regression, Random Forest, and Gradient Boosting. SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) will be used to explain model predictions at both overall and individual levels.

The project will involve dataset selection, preprocessing, exploratory data analysis, model training, performance evaluation, and explanation of predictions. The final objective is to create an interpretable prototype that demonstrates how machine learning can support cardiovascular risk assessment. The system is intended for educational and research purposes and will not replace professional medical diagnosis.

### Keywords

Cardiovascular Disease, Machine Learning, Explainable AI, SHAP, LIME, Risk Prediction, Classification, Python, FastAPI, Web Application.

---

## 2. Project Objectives

The main objectives are:

1. Obtain and analyse a suitable public cardiovascular or heart disease dataset.
2. Clean and preprocess the dataset for machine learning.
3. Perform exploratory data analysis (EDA) to understand feature distributions, relationships, and class balance.
4. Implement and compare Logistic Regression, Random Forest, and Gradient Boosting.
5. Evaluate models using appropriate classification metrics.
6. Integrate SHAP and LIME to explain model predictions.
7. Develop a web application that allows users to submit input features and view predictions and explanations.
8. Build a complete backend with REST APIs, authentication, authorization, and database integration.
9. Containerize the application using Docker and use NGINX as a reverse proxy.
10. Apply software engineering practices, including automated testing, version control, documentation, and deployment.

---

## 3. Proposed Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Programming language | Python | Machine learning and backend development |

| Frontend | React + TypeScript | Interactive user interface |

| Backend framework | FastAPI | REST API development |

| Data processing | pandas, NumPy | Dataset loading and preprocessing |

| ML framework | scikit-learn | Model training and evaluation |

| Explainable AI | SHAP, LIME | Global and individual prediction explanations |

| Data visualization | Matplotlib, Seaborn | Exploratory analysis and evaluation charts |

| Database | PostgreSQL | Persistent application data |

| ORM | SQLAlchemy | Database operations |

| Database migrations | Alembic | Versioned database schema changes |

| Request validation | Pydantic | Validation of API inputs and outputs |

| Authentication | Secure sessions or access tokens | User authentication |

| Password security | Argon2id or another suitable password-hashing implementation | Secure password storage |

| Reverse proxy | NGINX | Request routing and HTTPS termination |

| Containerization | Docker | Package application components |

| Container orchestration | Docker Compose | Run services together |

| Testing | pytest | Unit and integration testing |

| API documentation | OpenAPI / Swagger UI | Document and test API endpoints |

| Version control | Git and GitHub | Track changes and publish source code |

| CI/CD | GitHub Actions | Automated testing and build checks |

| Deployment | Linux VPS or suitable cloud platform | Host the application |

### Technology selection rationale

Python is selected because the machine learning and XAI ecosystem is primarily Python-based.

FastAPI is selected instead of Django or Node.js because the application is centred on serving machine learning predictions through APIs. FastAPI provides request validation, automatic API documentation, and straightforward integration with Python libraries.

React and TypeScript provide a separate frontend, while PostgreSQL supports persistent application data. Docker and NGINX provide a practical deployment and networking foundation.

Django remains a valid alternative, especially for applications that benefit from its built-in administration interface and integrated authentication features. Node.js is also viable but would generally require a Python service for the proposed ML stack.

---

## 4. Dataset Selection

The project will use a suitable public dataset containing clinical or demographic features and a target label.

Potential dataset sources:

- UCI Machine Learning Repository: https://archive.ics.uci.edu/
- Kaggle: https://www.kaggle.com/datasets

A candidate is the UCI Heart Disease dataset. Its commonly used processed Cleveland subset contains 303 instances and 13 input features.

The final dataset must be selected after examining:

- Dataset source and licensing.
- Number of records and input features.
- Target variable and its meaning.
- Missing or invalid values.
- Class distribution.
- Feature definitions and units.
- Data quality and potential biases.
- Suitability for the intended prediction task.

**Important:** Heart disease classification and future cardiovascular risk prediction are not necessarily the same task. The model's stated purpose must match the dataset's target variable. A dataset indicating existing disease cannot automatically support claims about future disease risk.

---

## 5. Machine Learning Pipeline

### Step 1: Data Loading

Use pandas to load the dataset and inspect its columns, data types, dimensions, missing values, and target distribution.

### Step 2: Data Preprocessing

- Handle missing and invalid values appropriately.
- Identify categorical and numerical features.
- Encode categorical variables when necessary.
- Scale numerical features where appropriate, particularly for Logistic Regression.
- Investigate outliers and inconsistent records.
- Split the dataset into training and test sets.
- Use preprocessing pipelines to avoid inconsistent transformations and data leakage.

### Step 3: Exploratory Data Analysis

Use visualizations and descriptive statistics to investigate:

- Feature distributions.
- Correlations between numerical features.
- Class imbalance.
- Relationships between input features and the target.
- Potential data-quality problems.

### Step 4: Model Training

Train the following classification algorithms:

**Logistic Regression**
- Baseline classification model.
- Comparatively straightforward to interpret.
- May require feature scaling.

**Random Forest**
- Ensemble of decision trees.
- Can model nonlinear relationships.
- Supports feature-importance analysis.

**Gradient Boosting**
- Sequentially builds an ensemble of predictive models.
- Can perform well on structured datasets.
- Requires careful parameter selection and evaluation.

Use consistent preprocessing, reproducible random seeds, and an appropriate validation strategy.

### Step 5: Model Evaluation

Evaluate all models using a held-out test set and appropriate metrics.

| Metric | Purpose |
|---|---|
| Accuracy | Overall proportion of correct classifications |
| Precision | Proportion of predicted positive cases that are actually positive |
| Recall / Sensitivity | Proportion of actual positive cases identified |
| F1-score | Harmonic mean of precision and recall |
| Confusion matrix | Counts of true positives, true negatives, false positives, and false negatives |
| ROC-AUC | Ability to rank positive cases above negative cases across thresholds |

Do not select the final model using accuracy alone. Explain the trade-offs between false negatives and false positives.

Keep the test set separate from model selection and tuning. Use cross-validation on training data when appropriate.

---

## 6. Explainable Artificial Intelligence

### SHAP

SHAP estimates feature contributions to model predictions relative to a reference or baseline.

Planned uses:

- Global feature-importance analysis.
- Summary plots.
- Individual prediction explanations.
- Waterfall or other suitable contribution plots.
- Comparison of feature contributions across models where supported.

### LIME

LIME approximates a model's behaviour near a selected input using a simpler interpretable model.

Planned uses:

- Individual prediction explanations.
- Positive and negative feature contributions.
- Comparison with SHAP for the same input.

### SHAP and LIME comparison

The application should allow users to inspect the explanations produced by both techniques for a selected prediction.

The project can investigate whether the two techniques identify similar influential features and where their explanations differ.

SHAP and LIME explain model behaviour; they do not prove that a feature causes cardiovascular disease. Explanations must be interpreted in the context of the model, dataset, and method assumptions.

---

## 7. Proposed Application Architecture

The application will use a modular backend with a separate frontend and database.

```text
User
 |
 v
React + TypeScript Frontend
 |
 v
NGINX Reverse Proxy
 |
 v
FastAPI Backend
 |
 +---- Authentication and Authorization
 |
 +---- Prediction API
 |
 +---- Model Management
 |
 +---- SHAP and LIME Explanations
 |
 +---- Database Access Layer
 |
 v
PostgreSQL Database
```

The ML functionality will initially live in a separate Python module within the FastAPI backend. It can be extracted into a dedicated ML service later if performance, scaling, or isolation requirements justify that change.

Docker Compose will manage the application containers during development and deployment.

### Frontend

The frontend will provide:

- Registration and login screens.
- User dashboard.
- Patient-feature input form.
- Model selection.
- Prediction results.
- SHAP visualizations.
- LIME explanation visualizations.
- Model performance comparison.
- Authorized prediction history, if implemented.
- Clear educational-purpose and medical limitations notices.

### Backend

The backend will provide:

- REST API endpoints.
- Input validation.
- Authentication and authorization.
- Model inference.
- SHAP and LIME integration.
- Database access.
- Consistent error responses.
- Logging and health checks.
- API documentation.

### Database

PostgreSQL may store:

- User accounts and authentication-related metadata.
- User roles and permissions.
- Prediction metadata and model versions.
- Prediction history, if required and appropriately protected.
- Application audit events where appropriate.

Avoid storing sensitive patient information unnecessarily. Apply access controls, data-retention policies, and suitable security measures if prediction records are persisted.

---

## 8. Proposed API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register an account |
| POST | `/api/auth/login` | Authenticate a user |
| POST | `/api/auth/logout` | End an authenticated session |
| GET | `/api/auth/me` | Retrieve the current user's profile |
| GET | `/api/models` | List available models and versions |
| POST | `/api/predictions` | Generate a prediction |
| GET | `/api/predictions/{id}` | Retrieve an authorized prediction record |
| GET | `/api/predictions` | List the current user's authorized history |
| GET | `/api/health` | Basic health check |

These endpoints are proposed interfaces, not pre-existing implementations.

Prediction requests should use a validated input schema based on the selected dataset's actual feature definitions. Responses should identify the model version, output type, and relevant limitations.

An optional explanation endpoint may be introduced if explanations need to be computed separately from prediction requests.

---

## 9. Authentication and Security

Security features should include:

1. Secure password hashing with a suitable password-hashing algorithm.
2. A carefully selected session or token-based authentication design.
3. Authorization checks on every protected resource.
4. Protection against users accessing another user's prediction records.
5. Input validation and sensible request-size limits.
6. HTTPS in deployed environments.
7. Rate limiting on sensitive endpoints.
8. Environment-based configuration and secret management.
9. Database access controls and parameterized operations through the ORM.
10. Secure dependency management and automated testing.
11. Appropriate logging without exposing passwords, tokens, or sensitive health information.
12. Database backups and a documented recovery process.

Authentication and authorization must be tested independently. Successfully logging in does not automatically authorize access to every resource.

---

## 10. Docker, NGINX, and Deployment

### Docker

Containerize the application components where appropriate:

- Frontend.
- FastAPI backend.
- PostgreSQL database.
- NGINX reverse proxy.

Use Docker Compose to define the services and their networking.

The database should use persistent storage rather than relying on a disposable container filesystem. Credentials and secrets should not be hardcoded into images or committed to source control.

### NGINX

Use NGINX for:

- Reverse proxying.
- Routing requests to the correct service.
- HTTPS termination.
- Request-size limits.
- Basic traffic-management controls.

A custom load balancer is not required for the initial application.

### Deployment

A deployment target may be a Linux VPS or suitable cloud platform.

The deployment process should include:

- Environment configuration.
- HTTPS setup.
- Database migrations.
- Health checks.
- Application logs.
- Restart policies.
- Backups.
- Dependency updates.
- A documented deployment and rollback process.

---

## 11. Software Engineering and Testing

### Testing strategy

**Unit tests**
- Preprocessing functions.
- Input validation.
- Model inference wrappers.
- Explanation-generation functions.

**Integration tests**
- API and database integration.
- Authentication and authorization.
- Prediction requests.
- Error handling.

**End-to-end tests**
- Registration and login.
- Submission of a valid prediction request.
- Display of model output and explanations.
- Access restrictions for prediction history.

**ML evaluation**
- Reproducible training.
- Held-out evaluation.
- Appropriate validation.
- Comparison of classification metrics.
- Verification that preprocessing is consistent between training and inference.

### GitHub repository structure

```text
cardiovascular-xai/
├── frontend/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   ├── core/
│   │   ├── schemas/
│   │   ├── models/
│   │   ├── services/
│   │   └── db/
│   ├── tests/
│   └── requirements.txt
├── ml/
│   ├── data/
│   ├── notebooks/
│   ├── preprocessing.py
│   ├── train.py
│   ├── evaluate.py
│   ├── explain.py
│   └── artifacts/
├── nginx/
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

This is a proposed structure. It can be simplified at the beginning and expanded as the application grows. Large datasets and generated model artifacts should not automatically be committed to Git.

---

## 12. Implementation Roadmap

### Phase 1: Python and ML Fundamentals
- Learn the Python syntax needed for the current task.
- Load and inspect the dataset.
- Implement preprocessing.
- Train Logistic Regression, Random Forest, and Gradient Boosting.
- Evaluate and compare the models.

### Phase 2: Explainability
- Integrate SHAP.
- Integrate LIME.
- Generate global and individual explanations.
- Compare the two techniques.
- Document the limitations of the explanations.

### Phase 3: FastAPI Backend
- Create the application structure.
- Build the prediction endpoint.
- Validate inputs using Pydantic.
- Load the trained model artifacts.
- Write automated API tests.
- Add model-version metadata.

### Phase 4: Frontend
- Build the React/TypeScript interface.
- Connect the frontend to the API.
- Implement prediction forms and result displays.
- Display model comparisons and XAI visualizations.

### Phase 5: Database and Authentication
- Configure PostgreSQL.
- Add SQLAlchemy and Alembic.
- Implement registration, login, logout, and protected endpoints.
- Add authorization checks and optional prediction history.

### Phase 6: Docker and NGINX
- Containerize the application.
- Configure Docker Compose networking.
- Set up NGINX reverse proxying.
- Configure HTTPS and production environment variables.
- Add health checks and persistent database storage.

### Phase 7: Testing, Deployment, and Documentation
- Run unit, integration, and end-to-end tests.
- Review security and error handling.
- Deploy to a suitable Linux or cloud environment.
- Complete the README, technical documentation, and project report.
- Prepare a demonstration and presentation.

**Estimated duration:** approximately 6–8 weeks for a focused prototype, potentially longer depending on available time, prior experience, and academic requirements.

---

## 13. Scope Management

The project will be developed incrementally rather than implementing every production feature at once.

### Minimum viable project
- One documented dataset.
- Three classification models.
- Model evaluation.
- SHAP and LIME explanations.
- FastAPI prediction API.
- Basic frontend.
- Reproducible experiments and documentation.

### Full-stack extension
- PostgreSQL.
- Secure authentication and authorization.
- Prediction history.
- Docker Compose.
- NGINX.
- Automated testing.
- CI/CD.
- Deployment and monitoring.



## 14. Medical and Research Limitations

The application is an educational and research prototype.

- Predictions are based on patterns in the selected dataset.
- Dataset bias and limited sample sizes may affect generalization.
- Evaluation results do not establish clinical validity.
- SHAP and LIME do not prove causality.
- A model trained on one population may not generalize to another.
- Outputs must not be presented as definitive diagnoses or guaranteed estimates of future cardiovascular events.

Clinical use would require substantially more validation, appropriate medical oversight, and assessment of applicable regulatory and privacy requirements.

---

## 15. Final Project Goal

The final deliverable will be a complete, modular web application that combines machine learning, explainable AI, a Python REST backend, a modern frontend, persistent storage, secure authentication, Docker-based deployment, and NGINX reverse proxying.

The academic contribution will be the evaluation and explanation of cardiovascular classification models. The software engineering contribution will be the implementation of a maintainable, tested, and deployable application around those models.

The project will be developed step by step, learning Python syntax and framework concepts as they become necessary, with an emphasis on understanding the code rather than merely copying implementations.
