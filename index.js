import fs from "fs/promises";

export async function changeFilePermissions(path) {
	try {
		await fs.chmod(path, 666);
		return true;
	} catch (error) {
		return error;
	}
}

export async function changeFileOwner(path, uid, gid) {
	try {
		fs.chown(path, uid, gid);
		return true;
	} catch (error) {
		return false;
	}
}
