import { yogaServer } from '@lib/server/init';
import type { RequestEvent } from '@sveltejs/kit/types/internal';

export async function get() {
	return {
		status: 302,
		headers: { Location: '/' }
	};
}

export async function post(event: RequestEvent) {
	return yogaServer.handleRequest(event.request);
}
