import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

type ResponseData = {
  text: string;
};

interface GenerateNextApirequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GenerateNextApirequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;

  if (!prompt || prompt === '') {
    return new Response('Prompt is required', { status: 400 });
  }

  const aiResult = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    prompt: `${prompt}`,
    temperature: 0.9,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const response =
    aiResult.data.choices[0].text?.trim() ||
    'Sorry, no response was generated.';
  res.status(200).json({ text: response });
}
