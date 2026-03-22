import { AssemblyAI } from 'assemblyai';

export async function GET() {
  try {
    console.log("Testing AssemblyAI API Key...");
    console.log("API Key:", process.env.ASSEMBLYAI_API_KEY?.substring(0, 10) + "...");

    if (!process.env.ASSEMBLYAI_API_KEY) {
      return Response.json({ 
        error: "ASSEMBLYAI_API_KEY is missing",
        success: false
      }, { status: 400 });
    }

    const client = new AssemblyAI({
      apiKey: process.env.ASSEMBLYAI_API_KEY,
    });

    console.log("Client created successfully");
    
    // Try to create a temporary token
    const token = await client.realtime.createTemporaryToken({ 
      expires_in: 3600
    });

    console.log("Token created successfully:", token?.substring(0, 20) + "...");

    return Response.json({ 
      success: true,
      message: "API Key is valid and working!",
      token: token
    });
  } catch (error) {
    console.error("DETAILED ERROR:", {
      name: error.name,
      message: error.message,
      code: error.code,
      status: error.status,
      response: error.response?.data || error.response,
      fullError: error.toString()
    });

    return Response.json({ 
      success: false,
      error: error.message,
      errorDetails: {
        name: error.name,
        code: error.code,
        status: error.status
      }
    }, { status: 500 });
  }
}
