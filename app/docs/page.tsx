import React from 'react';
import { decode, encode } from "../../lib/encoder";

const ApiDocs = () => {
	const exampleRequestBody = `hello`;

	return (
		<main className='bg-dark-200 w-full h-full flex items-center justify-center p-4'>
			<div className='cool-bg p-4 sm:p-6 md:p-8 lg:p-12 w-full  rounded-2xl border border-dark-300 overflow-x-auto'>
				<header className='bg-dark-300 p-4 sm:p-6 md:p-8 text-white mb-6 sm:mb-8'>
					<h1 className='text-3xl sm:text-4xl font-bold'>API Documentation</h1>
					<p className='mt-2 text-lg sm:text-xl'>Documentation for the API endpoints in this application.</p>
				</header>

				<div className='text-white'>
					<section className='space-y-8'>
						<h2 className='text-2xl sm:text-3xl font-semibold mb-4 underline text-primary-dark'>
							POST /api/v1/encode
						</h2>
						<p className='mb-4'>This endpoint performs encoding of the provided plain text.</p>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Request Body</h3>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {exampleRequestBody}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Responses</h3>
						<p className='mb-4'>Successful response contains the encoded text.</p>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {`${encode(exampleRequestBody)}`}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Error Responses</h3>
						<p className='mb-4'>If the body is empty, you&apos;ll receive an error message.</p>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {JSON.stringify({ error: "The body text is required." }, null, 2)}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Example Request</h3>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {`curl -X POST http://localhost:3000/api/v1/encode \\
  -H "Content-Type: text/plain" \\
  -d 'hello'
`}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Example Response</h3>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {`${encode(exampleRequestBody)}`}
                </code>
              </pre>
						</div>

						<h2 className='text-2xl sm:text-3xl font-semibold mb-4 underline text-primary-dark'>
							POST /api/v1/decode
						</h2>
						<p className='mb-4'>This endpoint performs decoding of the provided plain text.</p>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Request Body</h3>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {encode(exampleRequestBody)}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Responses</h3>
						<p className='mb-4'>Successful response contains the decoded text.</p>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {`${decode(encode(exampleRequestBody))}`}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Error Responses</h3>
						<p className='mb-4'>If the body is empty, you&apos;ll receive an error message.</p>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {JSON.stringify({ error: "The body text is required." }, null, 2)}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Example Request</h3>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {`curl -X POST http://localhost:3000/api/v1/decode \\
  -H "Content-Type: text/plain" \\
  -d 'FortniteRP Fortnite SkullTrooper. FortniteRP Fortnite FortniteRP. FortniteRP Fortnite FN. FortniteRP Fortnite FN. FortniteRP FortniteRP FortniteRP'
`}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Example Response</h3>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg mb-4'>
                <code className='whitespace-pre break-words'>
                  {`${decode(encode(exampleRequestBody))}`}
                </code>
              </pre>
						</div>

						<h3 className='text-xl sm:text-2xl font-semibold mb-4'>Error Response Example</h3>
						<div className='overflow-x-auto'>
              <pre className='bg-gray-800 text-white p-4 sm:p-6 rounded-lg'>
                <code className='whitespace-pre break-words'>
                  {JSON.stringify({ error: "The body text is required." }, null, 2)}
                </code>
              </pre>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default ApiDocs;
