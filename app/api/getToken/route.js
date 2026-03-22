import { AssemblyAI } from 'assemblyai';

export async function GET() {
  try {
    if (!process.env.ASSEMBLYAI_API_KEY) {
      return Response.json({ 
        error: "ASSEMBLYAI_API_KEY is not set",
        suggestion: "Add ASSEMBLYAI_API_KEY to your .env.local file" 
      }, { status: 500 });
    }

    const client = new AssemblyAI({
      apiKey: process.env.ASSEMBLYAI_API_KEY,
    });

    const token = await client.realtime.createTemporaryToken({ 
      expires_in: 3600
    });

    console.log("Token Generated Successfully!"); 
    return Response.json({ token });
  } catch (error) {
    console.error("TOKEN ERROR DETAIL:", error);
    return Response.json({ 
      error: error.message,
      details: error.toString(),
      suggestion: "Check AssemblyAI dashboard and API key validity" 
    }, { status: 500 });
  }
}