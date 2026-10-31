
Table users {
  id uuid [pk, default: `gen_random_uuid()`]

  email varchar(255) [not null, unique]
  password_hash varchar(255) [not null]

  is_active boolean [not null, default: true]

  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
}

Table user_profiles {
  id uuid [pk, default: `gen_random_uuid()`]

  user_id uuid [not null, unique]

  full_name varchar(150)
  date_of_birth date
  phone_number varchar(20)

  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
}

Ref: user_profiles.user_id - users.id


Table roles {
  id uuid [pk, default: `gen_random_uuid()`]

  name varchar(50) [not null, unique]
  description varchar(255)

  created_at timestamptz [not null, default: `now()`]
}
Table user_roles {
  user_id uuid [not null]
  role_id uuid [not null]

  assigned_at timestamptz [not null, default: `now()`]

  indexes {
    (user_id, role_id) [pk]
  }
}

Ref: user_roles.user_id > users.id
Ref: user_roles.role_id > roles.id
Table predictions {
  id uuid [pk, default: `gen_random_uuid()`]

  user_id uuid [not null]

  status varchar(20) [not null, default: 'pending']

  predicted_result varchar(50)
  risk_score decimal(6,3)

  created_at timestamptz [not null, default: `now()`]
  completed_at timestamptz
}

Ref: predictions.user_id > users.id
Table prediction_inputs {
  id uuid [pk, default: `gen_random_uuid()`]

  prediction_id uuid [not null, unique]

  age integer [not null]
  sex integer [not null]
  chest_pain_type integer [not null]
  resting_blood_pressure integer [not null]
  cholesterol integer [not null]
  fasting_blood_sugar integer [not null]
  resting_ecg integer [not null]
  max_heart_rate integer [not null]
  exercise_angina integer [not null]
  oldpeak decimal(5,2) [not null]
  st_slope integer [not null]

  created_at timestamptz [not null, default: `now()`]
}

Ref: prediction_inputs.prediction_id - predictions.id
Table prediction_explanations {
  id uuid [pk, default: `gen_random_uuid()`]

  prediction_id uuid [not null]

  explanation_method varchar(20) [not null]
  explanation_data jsonb [not null]

  created_at timestamptz [not null, default: `now()`]
}

Ref: prediction_explanations.prediction_id > predictions.id