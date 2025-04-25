export const createChatCompletion = async (message: string) => {
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-9c4a85ad8ac6454980130d663581f43b`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create chat completion');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error creating chat completion:', error);
    throw error;
  }
}