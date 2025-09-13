import express from "express";
import { version } from "react";
 
const app = express();
const PORT = process.env.PORT || 3000;
 
app.get("/", (_req, res) => {
  res.json({
    message: "Hello Cloud ☁️",
    docs: ["/health", "/version"]
  });
});
 
app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});
 
app.get("/version", (_req, res) => {
  res.json({ name: "hello-cloud", version: "1.0.0" });
});

app.get("/about", (_req, res) => {
  res.json({
    message: "Este es un nuevo endpoint de about", version : "1.0.0"});
});
 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});