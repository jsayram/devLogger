# Devlogger

---
Jose Ramirez Developer Notes:
---

A C.R.U.D app for development logging. App features local storage functionality that persist its data.
Learned about state, sharing data accross components, and organization of UI.

---

* Installed components using `ng g c components/name` , name: navbar, log-form, logs <br>
* Installed services using `ng g s services/log --module.app.module` <br>-These installations using the Angular CLI allows automatic addition to providers n the `app.module.ts` file <br>

* Manually created a `models` directory with a `Logs.ts` file for an interface of the 'Log' , then import it to the `logs.components.ts` and `log.sevice.ts` files<br>

Other notes: imported the `Observable` ,the `of` operator, and the `BehaviorSubject` from the `rxjs` library in the `log.services.ts` file <br>

## Tools & Assets:

* Chrome extension: <i><strong> Augury</strong></i> <br> 
-(For debugging and visualizing angular applications at runtime) <br>

## Additional Dependencies Added:

* <strong>Bootstrap V4</strong> - <strong>jQuery</strong> - <strong>Popper.js</strong> - <strong>Font-Awesome</strong>:<br> `npm install bootstrap@4.0.0-beta.2 jquery popper.js font-awesome` <br>

-Note for dependencies above: modify <i><strong>`.angular-cli.json`</strong></i> file to add necessary styles and scripts for bootstrap and font-awesome dependencies. Then you can use inside your "<i>componentName</i>.component.html" files. <br>	

---
---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
