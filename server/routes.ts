import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail, type ContactFormData } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData: ContactFormData = req.body;
      
      // Basic validation
      if (!contactData.name || !contactData.email || !contactData.subject || !contactData.message) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, subject, and message are required" 
        });
      }

      // Send email
      const success = await sendContactEmail(contactData);
      
      if (success) {
        res.json({ message: "Contact form submitted successfully" });
      } else {
        res.status(500).json({ error: "Failed to send email" });
      }
    } catch (error) {
      console.error(`Contact form error: ${error}`);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
