# **Accelerometer-Ball-Control-App**

A NodeJS application that lets you control a *ball* via an accelerometer powered device. The application uses for the following stack:

#### Backend

* NodeJS
* Express

#### Frontend:

* Pug
* CSS
* JavaScript

#### Others:

* SocketIO

### Explanation

The application has a simple, crystal clear scope. Given a device controlling a ball in a browser. To attain such a thing we need various players, servers to handle clients requests and ultimately sending responses. Clients themselves need to be able to send and receive responses. However as we are constantly sending data we would like maintain our socket open and just push though the socket the data, for this Socket.IO is our hero.

##### NodeJS Usage
The main server ```app.js``` sitting on top of express deals with creating the server, rendering the and compiling ```.pug``` files and passing through objects to be then used by the templating engine. As well as creating a room (a namespace where socket.io communication takes place) and receiving client request and dealing with them.

Check out ```app.js``` for more * meat *.

#### Clients
The app has a main layout where we create the blueprint for all views, and an additional two views ```game.pug``` and ```controller.pug```. ```game.pug``` is where the game all begins, in fact once the user accesses the main route he/she will be greeted with a message pointing out the url where our server and socket.io are listening.

Once the player accesses the url the ```controller.pug``` script will **emit** a request to the namespace requesting a movement (ball movement of course) and passing in some data. These data are nothing more that the x and y position of the ball which we got from the **deviceOrientation** window's event in the browser used by the accelerometer powered device.

On every new event the script will be sending this movement signal to the main server which in turn will emit the **updateBall** signal to the ```game.pug```'s script which will carry on the movement of the ball on the browser by getting the data and updating the position, velocity and most importantly the style absolute position via a self calling function, called recursively that updates ball on the screen.


### How to play ?

1. Fork
2. Run ```npm run watch```
3. Connect to localhost:port (on your server machine)
4. Access controller via given url on your device.
