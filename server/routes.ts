import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, type ContactFormData } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Removed /api/contact POST endpoint

  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    try {
      const success = await sendContactEmail({ name, email, phone, message });
      if (success) {
        res.json({ message: "Message sent successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
