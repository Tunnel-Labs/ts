const isProduction = process.env.NODE_ENV === 'production';
const prefix = 'Invariant failed';

export default function invariant(condition: boolean, message: string) {
	if (condition) {
		return;
	}

	throw new Error(isProduction ? prefix : `${prefix}: ${message || ''}`);
}

export function unreachableCase(_: never, message = 'unreachable') {
	return invariant(false, message);
}

export function unreachable(message = 'unreachable') {
	return invariant(false, message);
}

export const objectKeys = <TObject extends object>(
	object: TObject,
): (keyof TObject)[] => Object.keys(object) as any;

