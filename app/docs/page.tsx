// pages/api-docs.tsx

import React from 'react';

const ApiDocs = () => {

	// Example request body formatted as plain text
	const exampleRequestBody = `hello`; // Example text to be encoded or decoded

	return (
		<main className='bg-dark-200 w-full h-full flex items-center justify-center p-4'>
			<div className='cool-bg p-8 w-full rounded-2xl border border-dark-300'>
				<header className='bg-dark-300 p-6 text-white mb-8'>
					<h1 className='text-4xl font-bold'>API Documentation</h1>
					<p className='mt-2 text-xl'>Documentation for the API endpoints in this application.</p>
				</header>

				<div className='text-white'>
					<section className='mb-8'>
						<h2 className='text-3xl font-semibold mb-4 underline text-primary-dark'>POST /api/v1/encode</h2>
						<p className='mb-6'>This endpoint performs encoding of the provided plain text.</p>

						<h3 className='text-2xl font-semibold mb-4'>Request Body</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {exampleRequestBody}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Responses</h3>
						<p className='mb-4'>Successful response contains the encoded text.</p>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {`FortniteRP Fortnite SkullTrooper. FortniteRP Fortnite FortniteRP. FortniteRP Fortnite FN. FortniteRP Fortnite FN. FortniteRP FortniteRP FortniteRP`}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Error Responses</h3>
						<p className='mb-4'>If the body is empty, you&apos;ll receive an error message.</p>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-4'>
              <code>
                {JSON.stringify({ error: "The body text is required." }, null, 2)}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Example Request</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {`curl -X POST http://localhost:3000/api/v1/encode \\
  -H "Content-Type: text/plain" \\
  -d 'hello'
`}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Example Response</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {`FortniteRP Fortnite SkullTrooper. FortniteRP Fortnite FortniteRP. FortniteRP Fortnite FN. FortniteRP Fortnite FN. FortniteRP FortniteRP FortniteRP`}
              </code>
            </pre>

						<h2 className='text-3xl font-semibold mb-4 underline text-primary-dark'>POST /api/v1/decode</h2>
						<p className='mb-6'>This endpoint performs decoding of the provided plain text.</p>

						<h3 className='text-2xl font-semibold mb-4'>Request Body</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {exampleRequestBody}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Responses</h3>
						<p className='mb-4'>Successful response contains the decoded text.</p>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {`hello`}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Error Responses</h3>
						<p className='mb-4'>If the body is empty, you&apos;ll receive an error message.</p>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-4'>
              <code>
                {JSON.stringify({ error: "The body text is required." }, null, 2)}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Example Request</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {`curl -X POST http://localhost:3000/api/v1/decode \\
  -H "Content-Type: text/plain" \\
  -d 'FortniteRP Fortnite SkullTrooper. FortniteRP Fortnite FortniteRP. FortniteRP Fortnite FN. FortniteRP Fortnite FN. FortniteRP FortniteRP FortniteRP'
`}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Example Response</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {`hello`}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Error Response Example</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg'>
              <code>
                {JSON.stringify({ error: "The body text is required." }, null, 2)}
              </code>
            </pre>
					</section>
				</div>
			</div>
		</main>
	);
};

export default ApiDocs;
