import OpenAI from 'npm:openai@4.28.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message } = await req.json()

    const openai = new OpenAI({
      apiKey: Deno.env.get('OPENAI_API_KEY')
    })

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "user", content: message }
      ]
    })

    return new Response(
      JSON.stringify({ content: completion.choices[0].message.content }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})