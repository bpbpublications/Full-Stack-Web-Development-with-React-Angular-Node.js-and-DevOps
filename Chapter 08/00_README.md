# Chapter 8 – Angular Framework (Code Bundle)

This bundle contains example Angular code that matches the structure and topics
covered in Chapter 8. The files are organised by topic so they can be copied
into an Angular CLI project as needed.

Folders:

- 01_basics/              – Minimal Angular app, interpolation, property and event binding
- 02_components/          – Child components, @Input, @Output and parent–child communication
- 03_directives_pipes/    – *ngIf, *ngFor, built-in and custom pipes
- 04_services_http/       – Services, dependency injection, HttpClient example
- 05_routing/             – Angular Router configuration, route parameters, navigation
- 06_forms/               – Template-driven and reactive forms with validation
- 07_project_task_manager – Small Task Manager project using components, service and routing

## How to use

1. Create a new Angular project with the CLI, for example:

   ```bash
   ng new chapter8-demo
   cd chapter8-demo
   ```

2. Copy the desired files from this bundle into `src/app/` (and update
   import paths if needed).

3. Make sure `HttpClientModule`, `FormsModule` and `ReactiveFormsModule` are
   imported in your app module when using HTTP or forms examples.

4. Run the project:

   ```bash
   ng serve
   ```
