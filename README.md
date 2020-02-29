TO DO:
* Instructions to run app locally

# Clicker game

App is running [here](https://ollij5.github.io/clicker-game/)
The counter can be inspected [here](https://cryptic-cliffs-66031.herokuapp.com/counter)

There is a global counter that all players increment when they click on the play button. Every 500 clicks, someone wins 250 points.
Every 100 clicks, someone wins 40 points and every 10 clicks someone wins 5 points. 

The user starts with 20 points and each click on the play button costs 1 point. If the user hits 0 points they are given a chance to reset to 20.

The scores of players are saved to localStorage which is not ideal since it can be manipulated from the console. Also my first time trying css animations
so they are not the smoothest ever.  

## Running the app locally

Clone this repository to your machine.

### Front end
Navigate to the root of the app (where package.json is located)

Install dependencies
```
npm install
```

Start the frontend with the command
```
npm start
```

### Backend
cd into the backend
```
cd backend
```

Install dependencies
```
npm install
```

Create .env file
```
touch .env
```

Add variables to env
```
PORT=3003
MONGODB_URI={URI to a MongoDB database here}
```

start the backend
```
npm start
```