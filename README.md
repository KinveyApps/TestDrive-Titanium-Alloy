# TestDrive-Titanium-Alloy
The TestDrive sample application provides you with a near blank template to get started with. It is great for learning and trying Kinvey, or to build your first application upon.

## Run It
After downloading or cloning the repository:

* Make sure you have an [Appcelerator Titanium Platform account](https://my.appcelerator.com/auth/signup), and the [Titanium Studio IDE](http://docs.appcelerator.com/titanium/latest/#!/guide/Quick_Start) installed.
* Open Titanium Studio.
* Choose `File -> Import -> Existing folder as New Project`.
* Choose `Titanium Mobile` as project type, and click `Finish`:
![Import project](https://raw.github.com/KinveyApps/TestDrive-Titanium-Alloy/master/screenshot-import-project.png)
* Replace `App Key` and `App Secret` (`app/alloy.js`) with your applications credentials.
* Optional: adjust the `Run Configurations` to suit your needs:
![Adjust Run Configurations](https://raw.github.com/KinveyApps/TestDrive-Titanium-Alloy/master/screenshot-run-configurations.png)
* Run the project on the platform of your choice. 

## Functionality
This application demonstrates:

* Basic set-up for Titanium apps using Kinvey.
* Pinging the service

## Architecture
The application is set-up to run on Android and as mobile web application. The main entry point of the application is `app/alloy.js`. Here, Kinvey is initialized for use with your app.

The app itself follows the guidelines of the [Alloy Framework](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Framework). The ping button is bound in `controllers/index.js`.

The best place to learn how to add and modify your application is the [Titanium Documentation](http://docs.appcelerator.com).