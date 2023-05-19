---
title: 'Chatbot Phase 1'
excerpt: 'A pirate themed chatbot'
coverImage: ''
date: '2023-05-03T15:50:07.322Z'
author:
  name: Jake Powell
  picture: ''
ogImage:
  url: ''
published: false
---

# Chatbot Phase 1

Avast! As a developer I am of course interested in using AI tools to frantically keep abreast of the terrifying events of the dystopian future in which robots somehow went from meaning we don't have to work, to meaning there are no jobs.

I should mention at this point I was made redundant recently, which I'm trying to view philosophically as an opportunity to learn new skills and try new things.

So I dived into building something with ChatGPT!

The idea is to somehow use system messages to pre-empt certain behaviours in a chatbot, streamlining the prompting experience. So that if you have some maths for instance, we can preset the bots behaviour in ways we know it performs maths better.

The chatbot I'm using is based heavily on [https://www.jakeprins.com/blog/how-to-create-a-chatgpt-application-using-next-js-and-the-openai-api](this article by Jake Prins), adjusted slightly to get the system message working.

I changed the `addMessage` function, using ChatGPT to assist to this:

```ts
const addMessage = async (content: string) => {
  setIsLoadingAnswer(true);
  try {
    const newMessage: ChatCompletionRequestMessage = {
      role: 'user',
      content,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    const { data } = await sendMessage([...messages, newMessage]);
    const reply = data.choices[0].message;

    setMessages((prevMessages) => [...prevMessages, reply]);
  } catch (error) {
    alert('error');
  } finally {
    setIsLoadingAnswer(false);
  }
};
```

Now it accepts a system message, and all subsequent messages take this context on board.

So let's experiment with some maths based prompting:

`You are a maths assistant, work through maths problems step by step and show your workings. Try to complete the work yourself before assessing whether or not a suggested solution is correct. If the question is missing information, ask the user for it.`
