import { put } from "@vercel/blob";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { fileName, fileContent } = req.body;

    if (!fileName || !fileContent) {
      return res.status(400).json({ error: "Missing file data" });
    }

    // Convert Base64 content back to binary
    const buffer = Buffer.from(fileContent, "base64");

    const blob = await put(fileName, buffer, { access: "public" });
    return res.status(200).json({ url: blob.url });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Upload failed" });
  }
}
