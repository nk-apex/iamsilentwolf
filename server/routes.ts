import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt, system } = req.body;

      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ success: false, message: "prompt is required" });
      }

      const response = await fetch(
        "https://wolfmusicapi-al6b.onrender.com/api/ai/gpt",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt, system }),
        }
      );

      const data = await response.json();
      return res.json(data);
    } catch (error) {
      console.error("AI proxy error:", error);
      return res.status(500).json({ success: false, message: "Failed to reach AI service" });
    }
  });

  return httpServer;
}
