// pages/api-docs.tsx

import React from 'react';

const ApiDocs = () => {

	const exampleRequestBody = JSON.stringify(
		{
			text: "string",
			type: "encode"
		},
		null,
		2
	);

	return (
		<main className='bg-dark-200 w-full h-full flex items-center justify-center p-4'>
			<div className='cool-bg p-8 w-full max-w-4xl rounded-2xl border border-dark-300'>
				<header className='bg-dark-300 p-6 text-white mb-8'>
					<h1 className='text-4xl font-bold'>API Documentation</h1>
					<p className='mt-2 text-xl'>Documentation for the API endpoints in this application.</p>
				</header>

				<div className='text-white'>
					<section className='mb-8'>
						<h2 className='text-3xl font-semibold mb-4'>GET /api/v1</h2>
						<p className='mb-6'>This endpoint performs encoding or decoding based on the provided parameters.</p>

						<h3 className='text-2xl font-semibold mb-4'>Request Body</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {exampleRequestBody}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Responses</h3>
						<p className='mb-4'>Successful response contains the encoded or decoded text.</p>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {JSON.stringify({ result: "encodedText" }, null, 2)}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Error Responses</h3>
						<p className='mb-4'>If parameters are missing or invalid, you&apos;ll receive error messages.</p>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-4'>
              <code>
                {JSON.stringify({ error: "The 'text' field is required." }, null, 2)}
              </code>
            </pre>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {JSON.stringify({ error: "The 'type' field must be either 'encode' or 'decode'." }, null, 2)}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Example Request</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {`curl -X POST http://localhost:3000/api/v1 \\
  -H "Content-Type: application/json" \\
  -d '{"text": "hello", "type": "encode"}'
`}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Example Response</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg mb-6'>
              <code>
                {JSON.stringify({ result: "encoded_hello" }, null, 2)}
              </code>
            </pre>

						<h3 className='text-2xl font-semibold mb-4'>Error Response Example</h3>
						<pre className='bg-gray-800 text-white p-6 rounded-lg'>
              <code>
                {JSON.stringify({ error: "The 'text' field is required." }, null, 2)}
              </code>
            </pre>
					</section>
				</div>
			</div>
		</main>
	);
};

export default ApiDocs;
