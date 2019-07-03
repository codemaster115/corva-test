# Available Scripts
### `npm start`

Runs the app, both of server and client in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run server`

Launches the node server.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run client`

Runs the app in the development mode.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# Task Description
You have a server which returns random numbers via WebSocket ([socket.io](https://socket.io)) connection.

You should implement the next:

1. A line chart:
    - **x-axis**: time of a received number (look at `timestamp` payload field)
    - **y-axis**: number values
2. A bar chart:
    - **x-axis**: range categories (e.g. `-10 - 0`, `0 - 10`, `10 - 20` etc)
    - **y-axis**: the amount of numbers in each category
3. (Optional) An input called *"Alert threshold"*:
    - a user should be able to enter a number
    - if the random number received from the server is greater than the threshold - show an alert toast / snackbar with the number as the payload
4. Design: we appreciate your own design decisions =)

Charts should be updated in real time. **Please**, consider code style best practices. 

# Limitations

1. **React**
2. Use [socket.io-client](https://socket.io/docs/client-api) to connect to the server
3. That’s all

**P.S.** Feel free to use any module bundler, charts package, UI-kit etc you want. **BUT** please, leave some notes about the project setup.

# Server Setup

1. Install NodeJS
2. In the project root folder run `yarn` / `npm install`
3. Add `.env` file with the specified PORT (`3000` by default) env variable (look at `.env.sample` file)
4. Run `yarn start` / `npm start`
5. Now you can connect to the server via [socket.io-client](https://socket.io/docs/client-api):
    - listen for `data` event
    - the payload format is `{ value: <float>, timestamp: <integer> }`

# Good luck!
