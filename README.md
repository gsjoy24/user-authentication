
  ## Instructions on how to run the application locally 📝  

 * 1️⃣ Clone the repo to your machine. Use this link to do it.
  ↦ https://github.com/gsjoy24/level2-assignment-2.git
 * 2️⃣ Open the project in vs code and create a file named .env in the root of the folder.
 * 3️⃣ Add the code bellow in the .env file
 
 ```
PORT=5000
// you can use your own database url or use mine. i will remove this link after getting the assignment result.
DATABASE_URL=mongodb+srv://admin-gsj:2O0rnkiIrIGr2L7Q@cluster0.nbdk5o7.mongodb.net/level2-assignment-2?retryWrites=true&w=majority
BCRYPT_SALT_ROUND=12
 ```
* 4️⃣ Open the command prompt on the project path or terminal on the vs code by pressing Ctrl + `
* 5️⃣ Run the command 'npm i' or 'npm install' to install all the necessary dependencies.
* 6️⃣ To run the server on http://localhost:5000, run the command 'npm run start:dev'. If you see the code bellow on your machine, congratulate me, the server is running well
```
// on terminal
The server listening on port 5000

// on http://localhost:5000/
  {
    success: true,
    message: 'The server is running!',
  }
```
* 7️⃣ To run the production version, run the command 'npm run build' to build the the project. After complete the build process, run 'npm run start:prod' to run the build or production version on the localhost.
* 8️⃣ You can run the command 'npm run lint' to see if there is any errors on my code. You will see 3 warnings only for console.

Now you can do all the crud operations that was required for the assignment. I will recommend you to see the package.json file to see all the commands.
This server is deployed on vercel, the link is ↦ https://level2-assignment-2.vercel.app/