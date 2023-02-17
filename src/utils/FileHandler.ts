import fs from 'fs'

export const getFileList = async (path: string) => {
  const filesList = await fs.promises.readdir(path)
  return filesList
}
