# Basic Setup

npm init -y
npm install -d typescript
npm i express
npm imstall -d @types/express
pwd
npm install mongoose
npm install jsonwebtoken
npm install -d @types/jsonwebtoken
 
# Scripting

add changes to package.json
 "scripts": {
    "build": "tsc -b",
    "start": "node dist/index.js",
    "dev": "npm run build && npm run start"
  },

# Run the script
npm run dev

# Create a DB in mongoDB

# Terminal Command

docker ps

docker run -p 27017:27017 mongo

