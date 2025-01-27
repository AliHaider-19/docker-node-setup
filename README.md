# Docker Node.js Setup  

This repository contains a starter project for setting up a Node.js application with Docker. It includes a basic HTTP server, a `Dockerfile` for containerization, and an optional `docker-compose.yml` file for simplified container management.

---

## 🚀 Features
- Node.js HTTP server setup
- Containerized with Docker
- Optional Docker Compose for easy multi-container support
- Ready-to-use boilerplate for quick development

---

## 🛠️ Setup & Usage

### **1. Clone the repository**
```bash
git clone https://github.com/your-username/docker-node-setup.git
cd docker-node-setup
npm install
node index.js
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
