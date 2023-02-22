import { comments } from '$lib/comments';
import { json } from '@sveltejs/kit';

export function GET(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	const comment = comments.find((comment) => comment.id === parseInt(commentId));

	return json(comment);
}

export async function PATCH(requestEvent) {
	const { params, request } = requestEvent;
	const { commentId } = params;
	const updatedComment = await request.json();
	let cmnt;
	comments.forEach((comment, index) => {
		if (comment.id === parseInt(commentId)) {
			cmnt = { ...comments[index], ...updatedComment };
			comments[index] = cmnt;
		}
	});
	if (!cmnt) {
		return json({ message: 'Comment not found' }, { status: 404 });
	}
	return json(cmnt);
}

export async function DELETE(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;
	const commentIndex = comments.findIndex((comment) => comment.id === parseInt(commentId));
	if (commentIndex === -1) {
		return json({ message: 'Comment not found' }, { status: 404 });
	}
	const deletedComment = comments[commentIndex];
	comments.splice(commentIndex, 1);
	return json(deletedComment);
}
