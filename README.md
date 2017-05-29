# ProjectAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Platform to list series of comics online
1.There are three entities on this platform  Series-> Season-> Comics
Series - Series is independent entity which may contain 1 or multiple seasons. It contains (Name, description, created date, updated date, created by)
Season - Season depends on Series which may contain 1 or multiple comics.(Name, description , starts on, ends on, created date, updated date)
Comics - Comic depends on Season comic is single entity. which contains (Name, image, story, created date, updated date).


 2 . Platform will have 3 roles (Super Admin/ Admin/ User)
  3. Super Admin can add/edit/ delete (Admin and User)
  4. Admin can add/edit/delete (Season/Series/Comics)
  5. User can see, search and comment on comics.
  6. Super admin / Admin (Need to login to perform any action)
  7. Searching can be done without login(Commenting can not be done without login)
  
  commands to build project in angular
  1.ng serve (for client execution)
  
  commands to run  backend
  1.sudo service mongodb  (to start mongo)
  2.node index.js    (execute this command in your node project)
  
