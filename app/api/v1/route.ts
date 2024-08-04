import { NextResponse } from 'next/server';
import { encode, decode } from '../../../lib/encoder';

export async function POST(request: Request) {
	try {
		const { text, type } = await request.json();

		if (!text) {
			return NextResponse.json(
				{ error: 'The "text" field is required.' },
				{ status: 400 }
			);
		}

		if (type !== 'encode' && type !== 'decode') {
			return NextResponse.json(
				{ error: 'The "type" field must be either "encode" or "decode".' },
				{ status: 400 }
			);
		}

		let result;

		if (type === 'encode') {
			result = encode(text);
		} else if (type === 'decode') {
			result = decode(text);
		}

		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: 'An unexpected error occurred.' },
			{ status: 500 }
		);
	}
}
