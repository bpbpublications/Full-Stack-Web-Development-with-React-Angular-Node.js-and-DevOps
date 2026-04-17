Angular User Management System (Chapter 9)

This Angular example corresponds to the user management project in Chapter 9.
It shows how to:

- Scaffold modules and components
- Use a service with HttpClient for CRUD
- Set up routing with list and form pages
- Work with template-driven and reactive style forms

To use this code:

1. Create a new Angular app:
   ng new user-management --routing --style=css
   cd user-management

2. Copy the contents of angular_user_management/src/app/ into your src/app/.
   Adjust module imports if your app already has components.

3. Make sure HttpClientModule, FormsModule and ReactiveFormsModule are imported.

4. Run the app:
   ng serve
