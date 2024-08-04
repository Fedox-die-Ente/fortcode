
import { NextResponse } from 'next/server';
import {decode} from "../../../../lib/encoder";

export async function POST(request: Request) {
	try {
		const text = await request.text();

		if (!text) {
			return NextResponse.json(
				{ error: 'The body text is required.' },
				{ status: 400 }
			);
		}

		const encodedText = decode(text);

		return new NextResponse(encodedText, {
			status: 200,
			headers: { 'Content-Type': 'text/plain' },
		});
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'An unexpected error occurred.' },
			{ status: 500 }
		);
	}
}
