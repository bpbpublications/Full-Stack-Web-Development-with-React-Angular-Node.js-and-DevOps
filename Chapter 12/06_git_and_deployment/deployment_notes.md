# 06_git_and_deployment/deployment_notes.md

## Frontend deployment (Vercel / Netlify)

- Build your React/Vite project:
  npm install
  npm run build

- Vercel:
  - Install CLI: npm install -g vercel
  - Run: vercel
  - Follow prompts to link project and deploy

- Netlify:
  - Install CLI: npm install -g netlify-cli
  - Run: netlify deploy --prod
  - Set the build command to "npm run build" and publish directory to "dist"

## Backend deployment (Render / Railway / similar)

- Ensure PORT is read from process.env.PORT
- Add a "start" script in package.json, for example:
  "scripts": {
    "start": "node weather_server_axios.js"
  }

- Push your code to GitHub.
- On Render or Railway:
  - Create a new web service from the repository
  - Set environment variables (API keys, DB connection, etc.)
  - Deploy

These steps mirror the deployment discussion in Chapter 12.
