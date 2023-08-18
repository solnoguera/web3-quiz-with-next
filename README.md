# Quiz App

### This is a React and TypeScript web application that allows users to take a quizz and earn tokens. The app is built on Next.js and uses React Query for state management. Tailwind CSS is used for styling.

## Requirements

:white_check_mark: The app must be connected to a Metamask wallet.
:white_check_mark: The app must ensure that the user is connected to the Goerli network.
:white_check_mark: The app must show the balance of the $QUIZ token.
:white_check_mark: When the page is loaded, the app must present the title of the daily trivia with its picture and a button that allows the user to begin answering the questions.
:white_check_mark: Once the survey starts, the app must display the current question, which will be available for the amount of seconds specified in the lifetimeSeconds property.
:white_check_mark: Whether or not the user answers the question, the app must move onto the next question.
:white_check_mark: Once all the questions are finished, the app must show an overview of all the answers.
:white_check_mark: The app must have a button that allows the user to submit the answers to the validator contract.
:white_check_mark: The app must refresh the balance of the $QUIZ token.

## Getting Started

To get started with the app, you will need to:

Install Node.js and npm.
Clone the repository from GitHub.
Install the dependencies by running the following command:

```
npm install
```

Run the app by running the following command:

```
npm run dev
```

The app will be available at http://localhost:3000.

## Resources

In addition to the tech requirements, I used **Web3 library** to make interactions with the smart contract (which I extracted from [blockchain-challenge-utils Github Repo](https://github.com/rather-labs/blockchain-challenge-utils/blob/main/abi.json)).

Also I used **Sand API** to create an endpoint that returns the survey data (JSON can be found in app/utils/survey.json), as a way to mock an API call and be able to use some of the React Query functionality.

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React Query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Metamask](https://metamask.io/)
- [Web 3 Library](https://web3js.org/)
- [Goerli Network](https://goerli.ethereum.org/)
- [$QUIZ Token](https://quiz.xyz/)
- [Netlify](https://www.netlify.com/)
- [Sand API](https://sandapi.com/)

I am very proud of the web page. Unfortunately, when calling the .submit() method from the contract, it returns **TransactionRevertedWithoutReasonError: Transaction has been reverted by the EVM**. I did not have more information about the problem so it was very hard for me to solve it alone. I put so much effor on this challenge, I hope this code is enough despite the last error :disappointed:

Please, let me know the way to fix it.

The submit call can be found in useSurveyContract.tsx

# [Go to Deploy](https://web3-quiz.netlify.app/)

---

## Made by Sol Noguera.

### Last updated: August 17, 2023
