# Services Directory (`src/services/`)

This directory is designated for API client logic, HTTP services, and third-party API integrations (e.g. Axios instances, Fetch wrappers).

## Guidelines:

- Keep API calls decoupled from Vue components.
- Return strongly typed promises for all async requests.
- Handle error boundaries and standard header configurations centrally here.
