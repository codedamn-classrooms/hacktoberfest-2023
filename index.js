import fs from "fs";

export async function changeFilePermissions(path) {
	try {
		await fs.promises.chmod(path, 666);
		return true;
	} catch (error) {
		return error;
	}
}

export async function changeFileOwner(path, uid, gid) {
	try {
		fs.promises.chown(path, uid, gid);
		return true;
	} catch (error) {
		return false;
	}
}
